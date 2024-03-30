<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResourceCollection;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

use App\Models\Drawer;
use App\Models\DrawerHistory;
use App\Models\Expense;
use App\Models\Settings;
use Carbon\Carbon;
use Illuminate\Support\Facades\Redirect;


class InventoryController extends Controller
{
    public function show() {
        $payouts = Expense::sum('amount');
        $amount = Drawer::sum('amount');
        $count = Drawer::whereNotNull('order_id')->count();
        $dateFormat = Settings::getValue(Settings::DATE_FORMATE);
        $date = now(Settings::getValue(Settings::TIMEZONE))->format("{$dateFormat}");

        $drawerHistories = DrawerHistory::latest()->paginate(20);

        return view('inventory.show', [
            'amount' => $amount,
            'payouts' => $payouts,
            'count' => $count,
            'date' => $date,
            'drawerHistories' => $drawerHistories,
            'currency' => Settings::getDefaultCurrency(),
            'startingCash' => (float)Settings::getValue(Settings::STARTING_CASH),
        ]);
    }

    /**
     * Show resources.
     * 
     * @return \Illuminate\Http\JsonResponse
     */
    public function getCategories(): JsonResponse
    {
        return $this->jsonResponse(["data" => new CategoryResourceCollection(
            Category::with(['products' =>  function ($query) {
                $query->active()->orderBy("sort_order", "ASC")->orderBy("created_at", "ASC");
            }])->active()->orderBy("sort_order", "ASC")->latest()->get()
        )]);
    }

}

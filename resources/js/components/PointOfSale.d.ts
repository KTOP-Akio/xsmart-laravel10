import React, { Component } from 'react';
import { ICategory } from '../interfaces/category.interface';
import { IProduct } from '../interfaces/product.interface';
import 'react-toastify/dist/ReactToastify.css';
import { ICustomer } from '../interfaces/customer.interface';
interface ICartItem extends IProduct {
    cartId: string;
    quantity: number | undefined;
}
type Props = {
    settings: any;
};
type State = {
    categories: ICategory[];
    products: IProduct[];
    customers: ICustomer[];
    customer: ICustomer | undefined;
    customerName: string | null;
    customerEmail: string | null;
    customerMobile: string | null;
    customerCity: string | null;
    customerBuilding: string | null;
    customerStreet: string | null;
    customerFloor: string | null;
    customerApartment: string | null;
    cart: ICartItem[];
    showProducts: boolean;
    categoryName: string | null;
    total: number;
    subtotal: number;
    tax: number | undefined;
    vatType: string;
    deliveryCharge: number | undefined;
    discount: number | undefined;
    hasaudio: boolean | undefined;
    tenderAmount: number | undefined;
    searchValue: string | null;
    remarks: string | null;
    orderType: string;
    isFullScreen: boolean;
    isLoading: boolean;
    isLoadingCategories: boolean;
    currentPrice: number;
};
declare class PointOfSale extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    specialCustomerPrice: (prod: IProduct) => number;
    getCategories: () => void;
    storeOrder: () => void;
    reset: () => void;
    resetPos: () => void;
    categoryClick: (category: ICategory) => void;
    backClick: () => void;
    handleDiscountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleTaxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleDeliveryChargeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    updateItemPrice: (event: React.ChangeEvent<HTMLInputElement>, item: ICartItem) => void;
    updateItemQtyByClick: (event: any, item: ICartItem, qty: number) => void;
    toggleFullScreen: () => void;
    goToDashboard: () => void;
    calculateTotal: () => void;
    getVat: () => number;
    getTaxAmount: () => number;
    getTotalTax: () => number;
    getChangeAmount: () => number;
    handleTenderAmountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleRemarksChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
    removeItem: (item: ICartItem) => void;
    addToCart: (product: IProduct) => void;
    handleSearchSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    handleSearchChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleVatTypeChange: (event: any) => void;
    handleCustomerSearchChange: (event: React.FormEvent<HTMLInputElement>) => void;
    setCustomer: (customer: ICustomer) => void;
    selectCustomer(customer: ICustomer): void;
    closeModal: (id: string) => void;
    getAppSettings: () => any;
    currencyFormatValue: (number: any) => any;
    receiptExchangeRate: () => any;
    removeCustomer(): void;
    isProductAvailable: (product: IProduct) => boolean;
    updateItemQuantity: (event: React.ChangeEvent<HTMLInputElement>, item: ICartItem) => void;
    createCustomer: (e: React.FormEvent<HTMLFormElement>) => void;
    handleCustomerNameChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleCustomerEmailChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleCustomerMobileChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleCustomerCityChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleCustomerStreetChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleCustomerBuildingChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleCustomerFloorChange: (event: React.FormEvent<HTMLInputElement>) => void;
    handleCustomerApartmentChange: (event: React.FormEvent<HTMLInputElement>) => void;
    printInvoice: (data: any, settings: any) => void;
    modalCloseButton: () => React.ReactNode;
    modalCloseButtonWhite: () => React.ReactNode;
    handleOrderTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    isOrderDelivery: () => boolean;
    allProducts: () => IProduct[];
    handleCloseModal: () => void;
    pricesFilter: () => React.ReactNode;
    handleSelectRadio: (index: number) => void;
    pricesFilterModal: () => React.ReactNode;
    render(): JSX.Element;
}
export default PointOfSale;

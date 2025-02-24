/**
 * Internal dependencies
 */
import { homePage } from '../requests/shopper/home.js';
import { shopPage } from '../requests/shopper/shop-page.js';
import { searchProduct } from '../requests/shopper/search-product.js';
import { singleProduct } from '../requests/shopper/single-product.js';
import { cart } from '../requests/shopper/cart.js';
import { cartRemoveItem } from '../requests/shopper/cart-remove-item.js';
import { checkoutGuest } from '../requests/shopper/checkout-guest.js';
import { checkoutCustomerLogin } from '../requests/shopper/checkout-customer-login.js';
import { coupons } from '../requests/merchant/coupons.js';
import { myAccount } from '../requests/shopper/my-account.js';
import { categoryPage } from '../requests/shopper/category-page.js';
import { myAccountMerchantLogin } from '../requests/merchant/my-account-merchant.js';
import { products } from '../requests/merchant/products.js';
import { addProduct } from '../requests/merchant/add-product.js';
import { orders } from '../requests/merchant/orders.js';
import { ordersSearch } from '../requests/merchant/orders-search.js';
import { homeWCAdmin } from '../requests/merchant/home-wc-admin.js';

const shopper_request_threshold = 'p(95)<10000';
const merchant_request_threshold = 'p(95)<10000';

export const options = {
	scenarios: {
		shopperBrowseSmoke: {
			executor: 'per-vu-iterations',
			vus: 1,
			iterations: 3,
			maxDuration: '180s',
			exec: 'shopperBrowseFlow',
		},
		myAccountSmoke: {
			executor: 'per-vu-iterations',
			vus: 1,
			iterations: 3,
			maxDuration: '60s',
			startTime: '20s',
			exec: 'myAccountFlow',
		},
		cartSmoke: {
			executor: 'per-vu-iterations',
			vus: 1,
			iterations: 3,
			maxDuration: '60s',
			startTime: '25s',
			exec: 'cartFlow',
		},
		checkoutGuestSmoke: {
			executor: 'per-vu-iterations',
			vus: 1,
			iterations: 3,
			maxDuration: '120s',
			startTime: '30s',
			exec: 'checkoutGuestFlow',
		},
		checkoutCustomerLoginSmoke: {
			executor: 'per-vu-iterations',
			vus: 1,
			iterations: 3,
			maxDuration: '120s',
			startTime: '40s',
			exec: 'checkoutCustomerLoginFlow',
		},
		allMerchantSmoke: {
			executor: 'per-vu-iterations',
			vus: 1,
			iterations: 3,
			maxDuration: '360s',
			exec: 'allMerchantFlow',
		},
	},
	thresholds: {
		checks: [ 'rate==1' ],
		'http_req_duration{name:Shopper - Site Root}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Shop Page}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Search Products}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Category Page}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Product Page}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - wc-ajax=add_to_cart}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - View Cart}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Remove Item From Cart}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - wc-ajax=apply_coupon}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Update Cart}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - View Checkout}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - wc-ajax=update_order_review}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - wc-ajax=checkout}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Order Received}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - wc-ajax=get_refreshed_fragments}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Login to Checkout}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - My Account Login Page}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Shopper - Login to My Account}': [
			`${ shopper_request_threshold }`,
		],
		'http_req_duration{name:Merchant - WP Login Page}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - Login to WP Admin}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - WC-Admin}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - wc-analytics/orders?}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - wc-analytics/products/reviews?}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - wc-analytics/products/low-in-stock?}':
			[ `${ merchant_request_threshold }` ],
		'http_req_duration{name:Merchant - All Orders}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - Search Orders By Product}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - All Products}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - Add New Product}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - action=sample-permalink}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - action=heartbeat autosave}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - Update New Product}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - Coupons}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - wc-admin/onboarding/tasks?}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - wc-analytics/admin/notes?}': [
			`${ merchant_request_threshold }`,
		],
		'http_req_duration{name:Merchant - wc-admin/options?options=woocommerce_ces_tracks_queue}':
			[ `${ merchant_request_threshold }` ],
		'http_req_duration{name:Merchant - action=heartbeat}': [
			`${ merchant_request_threshold }`,
		],
	},
};

export function shopperBrowseFlow() {
	homePage();
	shopPage();
	categoryPage();
	searchProduct();
	singleProduct();
}
export function checkoutGuestFlow() {
	cart();
	checkoutGuest();
}
export function checkoutCustomerLoginFlow() {
	cart();
	checkoutCustomerLogin();
}
export function myAccountFlow() {
	myAccount();
}
export function cartFlow() {
	cartRemoveItem();
}
export function allMerchantFlow() {
	myAccountMerchantLogin();
	homeWCAdmin();
	orders();
	ordersSearch();
	products();
	addProduct();
	coupons();
}

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import AddCategory from '../views/Category/AddCategory'
import Category from '../views/Category/Category'
import Product from '../views/Product/Product'
import Admin from '../views/Admin';
import AddProduct from '../views/Product/AddProduct';
import EditCategory from '../views/Category/EditCategory';
import EditProduct from '../views/Product/EditProduct';
import ShowDetails from '../views/Product/ShowDetails';
import ListProducts from '../views/Category/ListProducts';
import WishList from '../views/Product/WishList';
import Signup from '../views/Signup';
import Signin from '../views/Signin';
import Cart from '../views/Cart';
import Success from '../views/payment/Success';
import Failed from '../views/payment/Failed';
import Checkout from '../views/Checkout/Checkout';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/category/show/:id',
    name: 'ListProducts',
    component: ListProducts,
  },
  {
    path: '/admin/category/add',
    name: 'AddCategory',
    component: AddCategory,
  },
  {
    path: '/admin/category',
    name: 'Category',
    component: Category,
  },
  // category edit
  {
  path: '/admin/category/:id',
  name: 'EditCategory',
  component: EditCategory,
  },
    // admin home page
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
  },
  {
    path: '/admin/product',
    name: 'AdminProduct',
    component: Product,
  },
    // add product
  {
    path: '/admin/product/new',
    name: 'AddProduct',
    component: AddProduct,
  },
  {
    path: '/admin/product/:id',
    name: 'EditProduct',
    component: EditProduct,
  },
  {
    path: '/product/show/:id',
    name: 'ShowDetails',
    component: ShowDetails,
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin,
  },
  {
    path: '/wishlist',
    name: 'WishList',
    component: WishList,
  },
  {
      path: '/cart',
      name: 'Cart',
      component: Cart,
  },
  {
    path: '/payment/success',
    name: 'PaymentSuccess',
    component: Success,
  },

  {
    path: '/payment/failed',
    name: 'PaymentFailed',
    component: Failed,
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
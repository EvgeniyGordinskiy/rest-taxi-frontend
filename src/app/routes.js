/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file
 */


/**
 * The routes
 *
 * @type {object} The routes
 */
import Home from './pages/home/home.vue';
import Login from './pages/login/login.vue';
import Register from './pages/register/register.vue';

import UserLayout from './pages/withNavigation/navigation.vue';


import User from './pages/withNavigation/user/index/index.vue';


// eslint-disable-next-line
export default [
  {
    path: '',
    redirect: '/home',
  },
    // Home
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      auth: true,
    },
  },
    
  // Login page
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
    
   //Register page 
  {
    path: '/register',
    name: 'register',
    component: Register,
  },

  // Forgot password page 
  {
    path: '/forgotPassword',
    name: 'forgotPassword',
    component: require('./pages/forgotPassword/forgotPassword.vue'),
  },
  // Components with the navigation wrapper.
  {
    path: '',
    component: UserLayout,
    meta: {
      auth: true,
     },
    children: [
      {
        path: '/user',
        name: 'user',
        component: User,
       
        children: [
        ],
      }
    ],
  },
  {
    path: '/*',
    redirect: '/login',
  },

];

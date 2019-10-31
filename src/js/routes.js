
import HomePage from '../pages/home.vue';
import AboutPage from '../pages/about.vue';
import FormPage from '../pages/form.vue';
import CatalogPage from '../pages/catalog.vue';
import ProductPage from '../pages/product.vue';
import SettingsPage from '../pages/settings.vue';
import Registrate from '../pages/Registrate.vue';

import DynamicRoutePage from '../pages/dynamic-route.vue';
import RequestAndLoad from '../pages/request-and-load.vue';
import NotFoundPage from '../pages/404.vue';
import Login from '../pages/Login';
import Inicio from '../pages/Inicio';
import Informacion from '../pages/Informacion';
import Editprofile from '../pages/Editprofile';
import Restablecercontraseña from '../pages/RestablecerContraseña';
import Contactos from '../pages/chat/Contactos';
import requests from "../pages/chat/requests";
import Chat from '../pages/chat/Chat';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about/',
    component: AboutPage,
  },
  {
    path: '/form/',
    component: FormPage,
  },
  {
    path: '/catalog/',
    component: CatalogPage,
  },
  {
    path: '/product/:id/',
    component: ProductPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/Login/',
    component: Login,
  },
  {
    path: '/Inicio/',
    component: Inicio,
  },
  {
    path: '/Informacion/',
    component: Informacion,
  },
  {
    path: '/Registrate/',
    component: Registrate,
  },
  {
    path: '/Editprofile/',
    component: Editprofile
  },
  {
    path: '/Contactos/',
    component: Contactos
  },
  {
    path: '/requests/',
    component: requests
  },
  {
    path: '/Chat/',
    component: Chat
  },
  {
    path: '/Restablecercontraseña/',
    component: Restablecercontraseña
  },
  {
    path: '/dynamic-route/blog/:blogId/post/:postId/',
    component: DynamicRoutePage,
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            component: RequestAndLoad,
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;

/*
 * File: data.js
 * Project: cellcard-play-pwa
 * Author: Dilum Sanjaya (dranasinghe@mitrai.com)
 * File Created: Thursday, 18th March 2021 10:52 am
 * Module: Cellcard Play Frontend
 * Copyright 2020 - 2021 Mitra Innovation Ltd., Mitra Innovation Ltd.
 */

import {
  ROUTE_LOGGED_HOME,
  ROUTE_STORE,
  ROUTE_NEWS,
  ROUTE_ME,
  ROUTE_MORE,
} from '../../../constants/Routes';
// import gtm from 'constants/GTM';

const data = [
  {
    id: 'home',
    title: 'GP_HAMBURGER_HOME',
    route: ROUTE_LOGGED_HOME,
    // gtmKey: '',
    iconActive: 'home-active',
    icon: 'home-inactive',
  },
  {
    id: 'store',
    title: 'GP_STORESUMMARY_TITLE',
    route: ROUTE_STORE,
    // gtmKey: gtm.events.ACT_STORE,
    iconActive: 'store_filled',
    icon: 'store',
  },
  {
    id: 'news',
    title: 'GP621_001',
    route: ROUTE_NEWS,
    // gtmKey: gtm.events.ACT_NEWS,
    iconActive: 'news-filled',
    icon: 'news',
  },
  {
    id: 'me',
    title: 'GP_CELLCARDPROFILE_TITLE',
    route: ROUTE_ME,
    // gtmKey: gtm.events.ACT_ME,
    iconActive: 'me_filled',
    icon: 'me',
  },
  {
    id: 'more',
    title: 'GP_SETTINGS_TITLE',
    route: ROUTE_MORE,
    // gtmKey: gtm.events.ACT_MORE,
    iconActive: 'menu',
    icon: 'menu',
  },
];

export default data;

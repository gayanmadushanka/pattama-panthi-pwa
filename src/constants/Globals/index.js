/*
 * Author: Buwaneka Sumanasekara (bsumanasekara@mitrai.com)
 * Date: Friday, 21st August 2020 11:55:35 am
 * Module: Cellcard Play Frontend
 * -----
 * Last Modified: Thursday, 27th August 2020 5:46:46 pm
 * Modified By: Buwaneka Sumanasekara (bsumanasekara@mitrai.com>)
 * Copyright © 2020 Cellcard Play. All rights reserved.
 */

const VoucherStatus = {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  USED: 'USED',
};

const ModalTypes = {
  MODAL_TYPE_ERROR: 'error',
  MODAL_TYPE_SUCCESS: 'success',
  MODAL_TYPE_SUCCESS_CHECK: 'success-check',
  MODAL_TYPE_PENDING: 'pending',
};
const TransactionStatus = {
  SUCCESS: 'SUCCESS',
  PENDING: 'PENDING',
  FAILED: 'FAILED',
};

const TopUpItemId = 'Cellcard_Top_Up';

export const ProductPurchasedStatus = {
  SUFFICIENT: 'SUFFICIENT',
  LIMIT_REACHED: 'LIMIT_REACHED',
  INSUFFICIENT: 'INSUFFICIENT',
  INELIGIBLE: 'INELIGIBLE',
  SOLD_OUT: 'SOLD_OUT',
};

const FilterTypes = {
  CATEGORY: 'category',
  BRAND: 'brand',
};

const FullPagePopupTypes = {
  TERMS_CONDITIONS: 'TERMS',
  PRIVACY_POLICY: 'PRIVACY',
};

export default {
  VoucherStatus,
  ModalTypes,
  TransactionStatus,
  ProductPurchasedStatus,
  TopUpItemId,
  FilterTypes,
  FullPagePopupTypes,
};

export const PLAN = 'PLAN';
export const PLAYPOINT = 'PLAYPOINT';
export const HOME = 'HOME';

export const VOUCHER_STATUS = {
  ACTIVE: 'ACTIVE',
  USED: 'USED',
  EXPIRED: 'EXPIRED',
};
export const VOUCHER_DURATIONS = {
  ACTIVE: 'GP_VOUCHERS_VALID',
  USED: 'GP_VOUCHERS_USED',
  EXPIRED: 'GP_VOUCHERS_EXPIRED',
};
export const VOUCHER_LIST_BUTTONS = {
  ACTIVE: 'GP_VOUCHERS_VIEW',
  USED: 'VOUCHERSTATUS_USED',
  EXPIRED: 'VOUCHERSTATUS_EXPIRED',
};
export const BUTTON_TYPES = {
  PRIMARY: 'blue',
  DARK: 'dark',
};

export const VOUCHER_TABS = {
  ACTIVE: 'active',
  EXPIRED: 'inactive',
};
export const EXCLUSIVE_TABS = {
  GAMES: 'games',
  PROMOTIONS: 'promotions',
};
export const NOTIFICATION_TABS = {
  INTERNAL: 'internal',
  EXTERNAL: 'external',
};

export const PACKAGE_TYPES = {
  PLAN: 'PLAN',
  POINTS: 'PLAYPOINT',
};

export const PLAN_STATUS = {
  ACTIVE: 'ACTIVE',
  PENDING_RENEWAL: 'PENDING_RENEWAL',
};
export const MEMBER_TYPES = {
  MEMBER: 'MEMBER',
  NON_MEMBER: 'NON-MEMBER',
};

export const CHECKOUT_ERROR_STATUS = {
  INACTIVE: 0,
  INSUFFICIENT: 1,
  TO_BE_DELETED: 2,
};

export const VERIFY_RECEIVER_ERROR_STATUS = {
  TO_BE_DELETED: 'TO_BE_DELETED',
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  INVALID: 'INVALID',
};

export const VoucherTabs = {
  ACTIVE: 'active',
  EXPIRED: 'inactive',
  USED: 'inactive',
};

export const BUY_PLAN_USER_ELIGIBILITY = {
  NONE: 'NONE',
  SELF_ONLY: 'SELF_ONLY',
  OTHERS_ONLY: 'OTHERS_ONLY',
  SELF_AND_OTHERS: 'SELF_AND_OTHERS',
};

export const REGISTRATION_METHODS = {
  OTP: 'OTP',
  IPIFICATION: 'IPIFICATION',
};

export const PAYMENT_TYPE_MAIN_BALANCE = 'Cellcard Balance';

export const MOBILE_OS = {
  WINDOWS: 'WINDOWS',
  IOS: 'IOS',
  ANDROID: 'ANDROID',
  UNKNOWN: 'UNKNOWN',
};

export const productTypes = {
  VOUCHER: 'VOUCHER',
  TOPUP: 'TOPUP',
};

export const productProviders = {
  FOREST: 'FOREST',
  CELLCARD: 'CELLCARD',
  VOUCHERY: 'VOUCHERY',
  CODASHOP: 'CODASHOP',
};

export const PRODUCT_FIELDS = {
  TEXT_INPUT: 'TEXT_INPUT',
  DROPDOWN: 'DROPDOWN',
};

export const USER_LANGUAGE = 'userLanguage';

export const PLAY_ARENA_POST_API =
  'https://play.com.kh/api/membership/trending/feeds?page=1&per_page=5&page_count=0&total_count=0';

export const PLAY_ARENA_LINK = 'https://play.com.kh/';

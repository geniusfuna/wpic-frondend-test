import { get } from '@/utils/request';

import shopOptions from './mock/shopOptions';
import skuOptions from './mock/skuOptions';
import warehouseOptions from './mock/warehouseOptions';

const fetch = (mockData, time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, time);
  });
};

export default class Shop {
  /**
   * Fetch shops info which managered by user
   * @param {String} uid 用户的 id
   * @returns {Object} response object with status code and data
   *
   * response.data format
   * {
   *  label: {String} shop_name,
   *  value:
   *
   * }
   */

  static async getShopOptions(uid) {
    // return get('/shop-options', {
    //   uid,
    // });

    // construct the a promise response

    return fetch(shopOptions, 1000);
  }

  static async getSkuOptions(shop_id) {
    // return get('/sku-options', {
    //   uid,
    // });

    // construct the a promise response

    return fetch(skuOptions, 1000);
  }

  static async getWarehouseOptions(sku_id) {
    // return get('/warehouse-options', {
    //   uid,
    // });

    // construct the a promise response

    return fetch(warehouseOptions, 1000);
  }
}

import { get } from '@/utils/request';

import shopOptions from './mock/shopOptions';

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

    const fetch = (mockData, time) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockData);
        }, time);
      });
    };

    return fetch(shopOptions, 1000);
  }
}

/**
 * api route 定义，之所以需要这个文件
 * 是希望有一个统一的地方可以清晰的看到所有的路由配置
 * 方便开发人员快速的查找定位问题
 */

module.exports = (r) => {
  /** 首页默认路由 */
  r.get('/', 'home#index');

  /** 用户登陆接口 */
  r.post('/session', 'user#login');

  /** 用户退出接口 */
  r.del('/session', 'user#logout');

  /** 用户查看自身信息接口 */
  r.get('/session', 'user#session');

  /** 用户接口 */
  r.resource('user');

  /** 分类接口 */
  r.resource('category');

  /** 病害接口 */
  r.resource('disease');

  /** 文章接口 */
  r.resource('article');

  /** 文件接口 */
  r.resource('file');

  /** 农业政策接口 */
  r.resource('policy');

  /** 农业价格接口 */
  r.resource('price');

  /** 订单接口 */
  r.resource('order');
};

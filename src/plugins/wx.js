import { jsonp, loadScript } from '@/utils/http';
import { isWeixin } from '@/utils/sniffer';

const base = 'http://hotspot.xinhua-news.cn/dist/2019ncov/';
const shareConfig = {
  title: document.title,
  desc: '战“疫”，新华社与你同行！',
  link: `${base}index.html#/mobile`,
  imgUrl: `${base}img/share.png`,
  success: () => {},
  cancel: () => {},
};
const bootSdk = async ({ appId, timestamp, nonceStr, signature }) => {
  await loadScript('http://res.wx.qq.com/open/js/jweixin-1.2.0.js');
  if (!window.wx) return;
  window.wx.config({
    debug: false,
    appId,
    timestamp,
    nonceStr,
    signature,
    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'],
  });
  window.wx.ready(() => {
    window.wx.onMenuShareTimeline(shareConfig);
    window.wx.onMenuShareAppMessage(shareConfig);
  });
};
const requestSign = async () => {
  const url = location.href.split('#')[0];
  const data = await jsonp('http://pd.xinhua-news.cn/xh/bind/jsapi.do?&mpId=1', { url });
  if (data.code !== 200) return;
  bootSdk(data.content);
};
const install = () => {
  if (!isWeixin) return;
  requestSign();
};
export default { install };

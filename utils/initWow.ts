// import { WOW } from 'wowjs';
export default () => {
  import('wowjs').then(({ WOW }) => {
    (window as any).WOW = WOW;
    if (!/msie [6|7|8|9]/i.test(navigator.userAgent)) {
      new WOW({
        // 可以添加自定义内容
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: true
      }).init();
    }
  });
};

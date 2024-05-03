declare global {
  interface Window {
    jQuery: JQueryStatic;
    $: JQueryStatic;
  }
}
export {}; // 扩展全局对象时必须添加

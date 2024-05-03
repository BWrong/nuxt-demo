declare global {
  interface Window {
    jQuery: JQueryStatic;
    $: JQueryStatic;
  }
}

// 扩展页面元信息
declare module '#app' {
  interface PageMeta {
    // pageType?: string
  }
}


export {}; // 扩展全局对象时必须添加

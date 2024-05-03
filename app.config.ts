// 应用配置，不可被环境变量覆盖，一半放置不敏感配置,可使用useAppConfig获取
const appTitle = import.meta.env.VITE_APP_TITLE;
export default defineAppConfig({
  title: appTitle,
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000'
    }
  }
});

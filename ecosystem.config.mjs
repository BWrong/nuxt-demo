export default {
  apps: [
    {
      name: 'crecohe-web',
      port: '3000',
      exec_mode: 'cluster',
      autorestart: true,
      instances: 'max',
      script: './.output/server/index.mjs'
    }
  ]
};

module.exports = [
  {
    method: 'GET',
    path: '/strapi-deploy-btn/cmd',
    handler: 'strapi-deploy-btn.cmd',
    config: {
      policies: [],
    },
  },
];

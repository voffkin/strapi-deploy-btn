module.exports = [
  {
    method: 'POST',
    path: '/cmd',
    handler: 'strapiDeployBtn.cmd',
    config: { policies: [], auth: false },
  },
];

'use strict';
const { exec } = require("child_process");

const execShellCommand = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn("error execShellCommand", error);
        reject(error);
      }
      resolve(stdout ? stdout : stderr);
    });
  });
};

module.exports = ({strapi}) => ({
  cmd: async (ctx) => {
    const {path, cmd } = strapi.config.get('plugin.strapi-deploy-btn');
    ctx.send({ ok: await execShellCommand(cmd) });
  },
});


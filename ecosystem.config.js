module.exports = {
  apps: [
    {
      name: 'my-app',
      script: './server.js',
      instances: 1,
      max_memory_restart: '300M',
    },
  ],
};

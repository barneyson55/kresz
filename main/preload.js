const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('kreszEnv', {
  electronVersion: process.versions.electron
});

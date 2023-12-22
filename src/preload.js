// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const {contextBridge, ipcRenderer} = require("electron");

let mainBridge = {
    downloadPhoto: async (url) =>  {
        return ipcRenderer.invoke("downloadPhoto", url);
    },
    openWithDefaultNavigator: (url) => {
        return ipcRenderer.invoke("openWithDefaultNavigator", url);
    }
}

contextBridge.exposeInMainWorld("mainBridge", mainBridge);
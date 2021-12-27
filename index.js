var rpc = require("discord-rpc")
const config = require('config');
const client = new rpc.Client({ transport: 'ipc' })
const cID = config.get('server.clientID');
client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Hi, I am details",
            assets: {
                large_image: "icon",
                large_text: "Hi, I am large_text"
            },
            buttons: [{ label: "BUTTON1", url: "https://yuh.wtf/" }, { label: "BUTTON2", url: "https:/twitter.com/oyuhL" }]
        }
    })
})
client.login({ clientId: cID }).catch(console.error);
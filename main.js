RPC = require("discord-rpc");


const clientId = CLIENTID; // The client ID from the Discord Application
const scopes = ['rpc'];
const client = new RPC.Client({ transport: 'ipc' }); // You can choose between IPC and Websocket - IPC for native Desktop Client and Websocket for Discord in your Browser

client.on('ready', () => {
    console.log('Logged in as', client.application.name);
    console.log('Authed for user', client.user.username);

    client.setActivity({
        details: 'I play a cool game',
        state: 'and I\'m dying',
        startTimestamp: new Date(),
        largeImageKey: LARGEIMAGEKEY, // Can be found and optimized here: https://discord.com/developers/applications/{CLIENT_ID}/rich-presence/assets
        instance: true
    });
    console.log(`> Updated Status!`)
});

// Log in to RPC with client id
client.login({ clientId, scopes, redirectUri: YOURURI, accessToken: YOURACCESSTOKEN }).catch(console.error());
// redirectURI: OAuth Redirect URI from the Discord Developers Site
// OPTIONAL accessToken: When you don't want to get an access token remove this, but then you have to grant the Application everytime access in the native Desktop Client
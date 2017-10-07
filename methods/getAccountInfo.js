/**
 * Created by moglix on 27/8/17.
 */
var params = require('../params');
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI({
    server: params.SERVER.URL
});
api.on('error', (errorCode, errorMessage) => {
    console.log(errorCode + ': ' + errorMessage);
});
api.on('connected', () => {
    console.log('connected');
});
api.on('disconnected', (code) => {
    // code - [close code](https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent) sent by the server
    // will be 1000 if this was normal closure
    console.log('disconnected, code:', code);
});

module.exports = function (address) {
    return new Promise((resolve, reject) => {
        api.connect().then(() => {
            /* begin custom code ------------------------------------ */
            console.log('getting account info for', address);
            return api.getAccountInfo(address);
        }).then(info => {
            console.log(info);
            console.log('getAccountInfo done');
            resolve(info);
            /* end custom code -------------------------------------- */
        }).then(() => {
            return api.disconnect();
        }).then(() => {
            console.log('done and disconnected.');
        }).catch((error) => {
            reject(error);
        });
    });
};
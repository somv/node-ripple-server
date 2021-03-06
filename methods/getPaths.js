/**
 * Created by moglix on 27/8/17.
 */
var params = require('../params');
const {RippleAPI} = require('ripple-lib');

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

/**
 * @param pathfind is an Object
 * @returns {Promise}
 */
module.exports = function (pathfind) {
    return new Promise((resolve, reject) => {
        api.connect().then(() => {
            /* insert code here */
            return api.getPaths(pathfind);
        }).then((info)=>{
            resolve(info);
        }).then(() => {
            return api.disconnect();
        }).catch((error)=>{
            reject(error);
        });
    });
};
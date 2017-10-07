/**
 * Created by moglix on 26/8/17.
 */
var express = require('express');
var router = express.Router();
var getAccountInfoPromise = require('../methods/getAccountInfo');
var getServerInfoPromise = require('../methods/getServerInfo');
var getFeePromise = require('../methods/getFee');
var getLedgerVersionPromise = require('../methods/getLedgerVersion');
var getTransactionPromise = require('../methods/getTransaction');
var getTransactionsPromise = require('../methods/getTransactions');
var getTrustlinesPromise = require('../methods/getTrustlines');
var getBalancesPromise = require('../methods/getBalances');
var getBalanceSheetPromise = require('../methods/getBalanceSheet');
var getPathsPromise = require('../methods/getPaths');
var getOrdersPromise = require('../methods/getOrders');
var getOrderbookPromise = require('../methods/getOrderbook');
var getSettingsPromise = require('../methods/getSettings');
var getLedgerPromise = require('../methods/getLedger');

/* GET home page. */
router.get('/getAccountInfo', function(req, res) {
    var address = req.query.address;
    // const myAddress = 'rf1BiGeXwwQoi8Z2ueFYTEXSwuJYfV2Jpn';
    getAccountInfoPromise(address).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getServerInfo', function(req, res) {
    getServerInfoPromise().then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getFee', function(req, res) {
    getFeePromise().then(
        (data)=>{
            res.json({"fee":data});
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getLedgerVersion', function(req, res) {
    getLedgerVersionPromise().then(
        (data)=>{
            res.json({"ledgerVersion":data});
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getTransaction', function(req, res) {
    var id = req.query.id;
    getTransactionPromise(id, null).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getTransactions', function(req, res) {
    var address = req.query.address;
    getTransactionsPromise(address, null).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getTrustlines', function(req, res) {
    var address = req.query.address;
    getTrustlinesPromise(address, null).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getBalances', function(req, res) {
    var address = req.query.address;
    getBalancesPromise(address, null).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getBalanceSheet', function(req, res) {
    var address = req.query.address;
    getBalanceSheetPromise(address, null).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

/**
 * TODO incomplete, pathfind is an object make it post request
 */
router.get('/getPaths', function(req, res) {
    var pathfind = req.query.pathfind;
    getPathsPromise(pathfind).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getOrders', function(req, res) {
    var address = req.query.address;
    getOrdersPromise(address, null).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

/**
 * TODO incomplete, orderbook is an object make it post request
 */
router.get('/getOrderbook', function(req, res) {
    var address = req.query.address;
    var orderbook = {};
    getOrderbookPromise(address, orderbook, null).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

router.get('/getSettings', function(req, res) {
    var address = req.query.address;
    getSettingsPromise(address, null).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

/**
 * TODO incomplete, options is an object make it post request
 */
router.get('/getLedger', function(req, res) {
    var options = {};
    getLedgerPromise(options).then(
        (data)=>{
            res.json(data);
        }).catch((error)=>{
        res.json(error);
    });
});

module.exports = router;
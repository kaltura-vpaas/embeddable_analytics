var express = require('express');
var router = express.Router();
const path = require('path');

const kaltura = require('kaltura-client');
var KalturaClientFactory = require('../lib/kalturaClientFactory');


/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    var appName = 'analyticsviewer'; 
    /* used to designate your application name, this can be used in the Analytics 
    later to differentiate usage across different apps 
    (such as website vs. mobile iOS vs. mobile Android vs. partner site)*/
    var appDomain = process.env.APP_DOMAIN; // the domain to track this playback session to
    var privileges = 'appid:'+appName+'-'+appDomain+',setrole:KMC_ANALYTICS_ROLE';

    var adminks = await KalturaClientFactory.getKS(process.env.KALTURA_USER_ID, {
      type: kaltura.enums.SessionType.ADMIN,
      privileges: privileges
    });
    res.render('index', { ks: adminks });
  } catch (e) {
    res.render('error', { message: e, error: e });
  }
});

router.get('/*', async function (req, res, next) {
  try {
    var appName = 'analyticsviewer'; 
    var privileges = 'appid:'+appName+'-'+appDomain+',setrole:KMC_ANALYTICS_ROLE';
    var appDomain = process.env.APP_DOMAIN; // the domain to track this playback session to
    
    var adminks = await KalturaClientFactory.getKS(process.env.KALTURA_USER_ID, {
      type: kaltura.enums.SessionType.ADMIN,
      privileges: privileges
    });
    res.render(path.parse(req.path).name,{ ks: adminks });
  } catch (e) {
    res.render('error', { message: e, error: e });
  }
});


module.exports = router;


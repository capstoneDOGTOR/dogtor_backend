var express = require('express');
var router = express.Router();
const auth = require('../middle/auth');
const alarm = require('../middle/alarm');

// fcm key Create
router.post(
  '/',
  auth.setCurrentUser,
  auth.checkPermission,
  alarm.createFcmKeyData,
  function (req, res, next) {
    res.status(201).json({ message: 'insert fcmKey success' });
  }
);

// push alarm option Update
router.post(
  '/option',
  auth.setCurrentUser,
  auth.checkPermission,
  alarm.updateAlarmOption,
  function (req, res, next) {
    res.status(201).json({ message: 'update alarm option success' });
  }
);

module.exports = router;

/*!
 * Snap Storage JavaScript Library v0.0.1
 * https://github.com/brimanning/Toolbelt
 *
 * Copyright 2016 Brian Manning
 * Released under the MIT license
 *
 * Date: 11/21/2016
 */

(function (w, $) {
  w.snap = {};

  var useStorage = null,
    type = 'session',
    exists = function(obj) {
      return typeof obj !== 'undefined' && !!obj;
    },
    setType = function(storageType) {
      type = storageType;
    }
    checkStorage = function() {
      try {
        if (useStorage === null) {
          useStorage = exists(Storage) && exists(getStorage(type));
        }
      } catch(e) {
        useStorage = false;
      }

      return useStorage !== null;
    },
    getStorage = function() {
      return type === 'session' ? sessionStorage : localStorage;
    },
    setItem = function(key, obj) {
      if (checkStorage()) {
        try {
          getStorage().setItem(key, JSON.stringify(obj));
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    },
    getItem = function(key) {
      var val = null;
      if (checkStorage()) {
        try {
          val = JSON.parse(getStorage().getItem(key));
        } catch (e) { }
      }
      return val;
    },
    removeItem = function(key) {
      if (checkStorage()) {
        try {
          getStorage().removeItem(key);
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    },
    clear = function() {
      if (checkStorage()) {
        try {
          getStorage().clear();
          return true;
        } catch (e) {
          return false;
        }
      }
      return false;
    }

  w.snap.get = getItem;
  w.snap.getItem = getItem;
  w.snap.set = setItem;
  w.snap.setItem = setItem;
  w.snap.remove = removeItem;
  w.snap.removeItem = removeItem;
  w.snap.clear = clear;

  w.snap.setType = setType;

}(window));

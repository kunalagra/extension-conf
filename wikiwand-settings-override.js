// ==UserScript==
// @name        Wikiwand Settings Override
// @namespace   https://github.com/kunalagra/
// @match       https://www.wikiwand.com/*
// @grant       none
// @version     1.0
// @author      kunalagra
// @description Update settings for Wikiwand.com to prefered values
// @license     MIT
// @icon        https://wikiwandv2-19431.kxcdn.com/icons/icon-180x180.png
// ==/UserScript==

(function() {
    'use strict';

    function updateLocalStorage() {
        // Your key-value pair to update in local storage
      var keyToUpdate = 'settings';
      var updatedValue = '{"theme":"auto","fontSize":5,"fontFamily":"sans","justify":true,"cover":true,"shrinkTOC":false,"linksColor":true,"references":true,"openAI":false,"readyToRender":true,"stickyNavbar":true,"articleWidth":5}';

        // Check if local storage is supported
        if (typeof(Storage) !== "undefined") {
            // Check if the key already exists in local storage
            if (localStorage.getItem(keyToUpdate)) {
                // Update the value of the key
                localStorage.setItem(keyToUpdate, updatedValue);
                console.log('Local storage updated:', keyToUpdate, updatedValue);
            } else {
                // If the key doesn't exist, create it
                localStorage.setItem(keyToUpdate, updatedValue);
                console.log('New key added to local storage:', keyToUpdate, updatedValue);
            }
        } else {
            console.error('Local storage is not supported.');
        }
    }

    // Run the updateLocalStorage function after the page has fully loaded
    window.onload = function() {
        updateLocalStorage();
    };

})();

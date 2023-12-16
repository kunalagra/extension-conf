

    // ==UserScript==
    // @name          Desidime Redirect Removal
    // @version       1
    // @run-at        document-start
    // @description   Desidime Remove Tracking
    // @include       https://www.desidime.com/*
    // @author        MaskedWarrior
    // @license MIT 
    // @namespace https://greasyfork.org/users/878597
    // ==/UserScript==
     
    // Checks if page is loaded
    document.onreadystatechange = () => {
    	if (document.readyState === 'complete') {  
    		// loads a href which DesiDime has added tracking
    		qLinks = document.querySelectorAll("a[href*='links?ref']")
    		// loops through each of the a href
    		for (var J = qLinks.length - 1; J >= 0; --J) {
    			// Get the URL compent (href)
    			var oldHref = qLinks[J].getAttribute('href');
    			// Get the OriginalURL
    			var newHref1 = oldHref.split('&url=')[1];
    			// Deocode the URl
    			var newHref = decodeURIComponent(newHref1)
    			// Change the links
    			qLinks[J].setAttribute('href', newHref);
    		}
    	}
    };


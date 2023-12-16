    // ==UserScript==
    // @name          Desidime Redirect Removal
    // @version       2
    // @run-at        document-start
    // @description   Desidime Remove Tracking
    // @include       https://www.desidime.com/*
    // @author        MaskedWarrior
    // @license MIT 
    // @namespace https://greasyfork.org/users/878597
    // @run-at       document-end
     
    // ==/UserScript==
     
    // Checks if page is loaded
     
    function DesiRM(){
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
    function DesiRM2(){
    	// loads a href which DesiDime has added tracking
    	qLinks = document.querySelectorAll("a[data-href*='links?ref']")
    	// loops through each of the a href
    	for (var J = qLinks.length - 1; J >= 0; --J) {
    		// Get the URL compent (href)
    		var oldHref = qLinks[J].getAttribute('data-href');
    		// Get the OriginalURL
    		var newHref1 = oldHref.split('&url=')[1];
    		// Deocode the URl
    		var newHref = decodeURIComponent(newHref1)
    		// Change the links
    		qLinks[J].setAttribute('data-href', newHref);
        qLinks[J].setAttribute('target', '');
     
    	}
    }
     
    document.onreadystatechange = () => {
    	DesiRM()
      DesiRM2()
      
    }
    (new MutationObserver((mutations) => {
        let runCheck = false
        for (let mutation of mutations) {
            if (mutation.addedNodes.length || mutation.attributeName === 'href') {
                runCheck = true
                break;
            }
        }
        if (runCheck) {
          DesiRM()
          DesiRM2()
        }
    })).observe(document.querySelector('body'), {attributeFilter: ['href'], childList: true, subtree: true})

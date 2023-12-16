// ==UserScript==
// @name        Desidime Redirect Removal
// @version     4
// @run-at      document-start
// @description Remove URL Tracking/Redirects from Desidime.com
// @include     https://www.desidime.com/*
// @author      kunalagra
// @license     MIT
// @namespace   https://greasyfork.org/users/878597
// @supportURL  https://github.com/kunalagra/
// @run-at      document-end
// @icon        https://cdn0.desidime.com/logo/favicon.ico
// @downloadURL https://update.greasyfork.org/scripts/440342/Desidime%20Redirect%20Removal.user.js
// @updateURL https://update.greasyfork.org/scripts/440342/Desidime%20Redirect%20Removal.meta.js
// ==/UserScript==

function fixDesiDimeLinks() {
    // Find and update links in anchor tags
    const anchorLinks = document.querySelectorAll("a[href*='links?ref']");
    anchorLinks.forEach((link) => {
        const originalURL = new URL(link.href).searchParams.get('url');
        if (originalURL) {
            link.href = decodeURIComponent(originalURL);
        }
    });

    // Find and update links in data-href attributes
    const dataHrefLinks = document.querySelectorAll("a[data-href*='links?ref']");
    dataHrefLinks.forEach((link) => {
        const originalURL = new URL(link.getAttribute('data-href')).searchParams.get('url');
        if (originalURL) {
            link.setAttribute('data-href', decodeURIComponent(originalURL));
            link.removeAttribute('target'); // Remove the 'target' attribute
        }
    });
}

// Function to handle DOM changes
function handleDOMChanges(mutationsList) {
    for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'href') {
            // Handle attribute changes (e.g., href attribute)
            fixDesiDimeLinks();
        } else if (mutation.type === 'childList') {
            // Handle changes in the DOM structure (e.g., added nodes)
            fixDesiDimeLinks();
        }
    }
}

// Wrap the MutationObserver setup inside a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    // Use MutationObserver to detect changes in the document
    const observer = new MutationObserver(handleDOMChanges);

    // Observe changes in the body and its subtree
    observer.observe(document.body, { attributes: true, childList: true, subtree: true });

    // Call fixDesiDimeLinks once when the DOM is ready
    fixDesiDimeLinks();
});

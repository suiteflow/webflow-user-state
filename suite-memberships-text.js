window.onload = function() {
  let cookies = document.cookie;
  if(cookies.length > 0) {
    let parsedCookies = {};
    cookies.split(';').forEach(function(cookie) {
      let [key, value] = cookie.split('=').map(c => c.trim());
      parsedCookies[key] = value;
    });

    if(parsedCookies.wf_loggedin === 'true') {
      // Find all elements with the suite-loggedin-text data attribute
      let elements = document.querySelectorAll('[suite-loggedin-text]');

      // Loop through all found elements
      elements.forEach(function(element) {
        // Replace the element's text with the value of the suite-loggedin-text data attribute
        element.textContent = element.getAttribute('suite-loggedin-text');
      });
    }
  }
}

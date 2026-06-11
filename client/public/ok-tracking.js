(function () {
  var ADS_ID = "AW-18228795177";
  // Set to "AW-18228795177/<label>" once the Book-a-call conversion action
  // exists in Google Ads. Empty string disables conversion events only;
  // the base tag still loads.
  var CONVERSION_SEND_TO = "";

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ADS_ID;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", ADS_ID);

  document.addEventListener("click", function (e) {
    var target = e.target;
    var link = target && target.closest ? target.closest('a[href*="tidycal.com"]') : null;
    if (link && CONVERSION_SEND_TO) {
      gtag("event", "conversion", { send_to: CONVERSION_SEND_TO });
    }
  });
})();

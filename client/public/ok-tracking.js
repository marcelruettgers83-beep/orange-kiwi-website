(function () {
  var ADS_ID = "AW-18228795177";
  var CONVERSION_SEND_TO = "AW-18228795177/9DXtCJu0mr0cEKmulfRD";
  var CONSENT_KEY = "orange_kiwi_cookie_consent";
  var CONSENT_ACCEPTED = "accepted";
  var CONSENT_DECLINED = "declined";
  var consentChoice = getStoredConsent();

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    personalization_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500
  });

  if (consentChoice === CONSENT_ACCEPTED) {
    updateConsent("granted");
  } else if (consentChoice === CONSENT_DECLINED) {
    updateConsent("denied");
  }

  var s = document.createElement("script");
  s.async = true;
  s.src = "https://www.googletagmanager.com/gtag/js?id=" + ADS_ID;
  document.head.appendChild(s);

  gtag("js", new Date());
  gtag("config", ADS_ID);

  ready(function () {
    if (!consentChoice) {
      showConsentBanner();
    }
  });

  document.addEventListener("click", function (e) {
    var target = e.target;
    var link = target && target.closest ? target.closest('a[href*="tidycal.com"]') : null;
    if (link && CONVERSION_SEND_TO && consentChoice === CONSENT_ACCEPTED) {
      gtag("event", "conversion", {
        send_to: CONVERSION_SEND_TO,
        value: 1.0,
        currency: "EUR"
      });
    }
  });

  function updateConsent(status) {
    var value = status === "granted" ? "granted" : "denied";
    gtag("consent", "update", {
      ad_storage: value,
      analytics_storage: value,
      ad_user_data: value,
      ad_personalization: value,
      personalization_storage: value
    });
  }

  function getStoredConsent() {
    try {
      var value = window.localStorage.getItem(CONSENT_KEY);
      return value === CONSENT_ACCEPTED || value === CONSENT_DECLINED ? value : null;
    } catch (e) {
      return null;
    }
  }

  function storeConsent(choice) {
    consentChoice = choice;
    try {
      window.localStorage.setItem(CONSENT_KEY, choice);
    } catch (e) {
      // Consent still applies for the current page if local storage is unavailable.
    }
  }

  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  function showConsentBanner() {
    if (document.getElementById("ok-cookie-consent")) {
      return;
    }

    addConsentStyles();

    var banner = document.createElement("div");
    banner.id = "ok-cookie-consent";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookie consent");
    banner.innerHTML =
      '<div class="ok-cookie-consent__copy">' +
        "<strong>Cookies</strong>" +
        "<span>We use cookies to measure ad performance and improve this site. Accept allows measurement cookies. Decline keeps only essential cookies.</span>" +
      "</div>" +
      '<div class="ok-cookie-consent__actions">' +
        '<button type="button" class="ok-cookie-consent__button ok-cookie-consent__button--secondary" data-ok-consent="declined">Decline</button>' +
        '<button type="button" class="ok-cookie-consent__button ok-cookie-consent__button--primary" data-ok-consent="accepted">Accept</button>' +
      "</div>";

    banner.addEventListener("click", function (e) {
      var button = e.target && e.target.closest ? e.target.closest("[data-ok-consent]") : null;
      if (!button) {
        return;
      }

      var choice = button.getAttribute("data-ok-consent");
      storeConsent(choice);
      updateConsent(choice === CONSENT_ACCEPTED ? "granted" : "denied");
      banner.parentNode.removeChild(banner);
    });

    document.body.appendChild(banner);
  }

  function addConsentStyles() {
    if (document.getElementById("ok-cookie-consent-styles")) {
      return;
    }

    var styles = document.createElement("style");
    styles.id = "ok-cookie-consent-styles";
    styles.textContent =
      "#ok-cookie-consent{" +
        "position:fixed;left:16px;right:16px;bottom:16px;z-index:2147483000;" +
        "display:flex;align-items:center;justify-content:space-between;gap:18px;" +
        "max-width:980px;margin:0 auto;padding:16px;border:1px solid #e5e7eb;" +
        "border-radius:8px;background:rgba(255,255,255,.97);color:#282c34;" +
        "box-shadow:0 18px 48px rgba(40,44,52,.16);font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;" +
      "}" +
      "#ok-cookie-consent .ok-cookie-consent__copy{display:grid;gap:4px;min-width:0;}" +
      "#ok-cookie-consent strong{font-family:'Plus Jakarta Sans',Inter,sans-serif;font-size:15px;line-height:1.25;color:#16181d;}" +
      "#ok-cookie-consent span{font-size:14px;line-height:1.5;color:#667085;}" +
      "#ok-cookie-consent .ok-cookie-consent__actions{display:flex;flex:0 0 auto;gap:10px;}" +
      "#ok-cookie-consent .ok-cookie-consent__button{min-height:42px;border-radius:999px;padding:0 18px;border:1px solid #e5e7eb;background:#fff;color:#282c34;font:700 14px/1 Inter,system-ui,sans-serif;cursor:pointer;}" +
      "#ok-cookie-consent .ok-cookie-consent__button--primary{border-color:#a94704;background:#a94704;color:#fff;}" +
      "#ok-cookie-consent .ok-cookie-consent__button:hover{transform:translateY(-1px);}" +
      "#ok-cookie-consent .ok-cookie-consent__button:focus-visible{outline:3px solid rgba(249,112,21,.34);outline-offset:2px;}" +
      "@media (max-width:640px){" +
        "#ok-cookie-consent{left:12px;right:12px;bottom:12px;align-items:stretch;flex-direction:column;padding:14px;}" +
        "#ok-cookie-consent .ok-cookie-consent__actions{width:100%;}" +
        "#ok-cookie-consent .ok-cookie-consent__button{flex:1;}" +
      "}";
    document.head.appendChild(styles);
  }
})();

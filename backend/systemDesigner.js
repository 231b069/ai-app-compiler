function designSystem(intent) {
  const pages = [];

  if (intent.features.login) pages.push("Login");
  if (intent.features.dashboard) pages.push("Dashboard");
  if (intent.features.contacts) pages.push("Contacts");
  if (intent.features.analytics) pages.push("Analytics");
  if (intent.features.payments) pages.push("Pricing");

  return {
    appName: intent.appName,
    appType: intent.appType,
    pages,
    entities: ["users", ...(intent.features.contacts ? ["contacts"] : [])],
    roles: intent.roles,
    businessLogic: {
      premiumGating: intent.features.payments,
      adminAnalytics: intent.features.analytics && intent.roles.includes("admin")
    }
  };
}

module.exports = { designSystem };


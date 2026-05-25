function extractIntent(prompt) {
  const text = prompt.toLowerCase();

  return {
    appName: text.includes("crm") ? "CRM System" : "Generated App",
    appType: text.includes("crm") ? "CRM" : "Generic",
    features: {
      login: text.includes("login") || text.includes("auth"),
      dashboard: text.includes("dashboard"),
      contacts: text.includes("contact"),
      payments: text.includes("payment") || text.includes("premium"),
      analytics: text.includes("analytics"),
    },
    roles: text.includes("admin") ? ["admin", "user"] : ["user"],
    assumptions: []
  };
}

module.exports = { extractIntent };


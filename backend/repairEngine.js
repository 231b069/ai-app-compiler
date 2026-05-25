function repairConfig(config, errors) {
  for (const error of errors) {
    if (error.includes("contacts table is missing")) {
      config.database.tables.contacts = {
        id: "uuid",
        name: "string",
        email: "string"
      };
    }

    if (error.includes("Field")) {
      const match = error.match(/'(.+?)'/);
      if (match) {
        const field = match[1];
        config.database.tables.contacts[field] = "string";
      }
    }
  }

  return config;
}

module.exports = { repairConfig };


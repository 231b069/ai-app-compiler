function validateConfig(config) {
  const errors = [];

  if (!config.ui) errors.push("Missing UI schema");
  if (!config.api) errors.push("Missing API schema");
  if (!config.database) errors.push("Missing database schema");
  if (!config.auth) errors.push("Missing auth schema");

  const dbTables = config.database?.tables || {};

  for (const endpoint of config.api?.endpoints || []) {
    if (endpoint.path.includes("contacts") && !dbTables.contacts) {
      errors.push("API uses contacts but contacts table is missing");
    }

    for (const field of endpoint.fields || []) {
      if (
        endpoint.path.includes("contacts") &&
        dbTables.contacts &&
        !dbTables.contacts[field]
      ) {
        errors.push(`Field '${field}' exists in API but missing in contacts table`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors
  };
}

module.exports = { validateConfig };


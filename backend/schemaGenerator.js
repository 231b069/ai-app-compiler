function generateSchema(design) {
  return {
    ui: {
      pages: design.pages.map(page => ({
        name: page,
        components: page === "Login" ? ["EmailInput", "PasswordInput", "LoginButton"] : ["Header", "Card", "Table"]
      }))
    },

    api: {
      endpoints: [
        { path: "/login", method: "POST", fields: ["email", "password"] },
        { path: "/contacts", method: "GET", fields: [] },
        { path: "/contacts", method: "POST", fields: ["name", "email"] }
      ]
    },

    database: {
      tables: {
        users: {
          id: "uuid",
          email: "string",
          password: "string",
          role: "string"
        },
        contacts: {
          id: "uuid",
          name: "string",
          email: "string"
        }
      }
    },

    auth: {
      roles: design.roles,
      permissions: {
        admin: ["read", "write", "delete", "analytics"],
        user: ["read", "write"]
      }
    },

    businessLogic: design.businessLogic
  };
}

module.exports = { generateSchema };


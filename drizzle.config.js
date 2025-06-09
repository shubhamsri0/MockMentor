/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  out: "./migrations",
  dialect: "postgresql",  // Specify dialect
  dbCredentials: {
    url: 'postgresql://neondb_owner:db6Eifn5gsjZ@ep-spring-sea-a8fo31gw.eastus2.azure.neon.tech/neondb?sslmode=require',
  },
};

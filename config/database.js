module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "mysql",
        host: env("DATABASE_HOST", "35.226.32.237"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "server-doctor"),
        username: env("DATABASE_USERNAME", "Alan"),
        password: env("DATABASE_PASSWORD", "Root0611"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});

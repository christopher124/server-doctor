module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: "strapi-provider-email-mailjet",
      providerOptions: {
        publicApiKey: env("MAILJET_PUBLIC_KEY"),
        secretApiKey: env("MAILJET_SECRET_KEY"),
      },
      settings: {
        defaultFrom: "urri740@gmail.com",
        defaultFromName: "christopher",
        defaultTo: "urri_@hotmail.com",
        defaultToName: "sosa",
      },
    },
    // ...
  },
});

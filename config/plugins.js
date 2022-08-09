module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "sendgrid",
    providerOptions: {
      apiKey: env("SENDGRID_API_KEY"),
    },
    settings: {
      defaultFrom: "urri_@hotmail.com",
      defaultReplyTo: "urri_@hotmail.com",
    },
  },
  // ...
});

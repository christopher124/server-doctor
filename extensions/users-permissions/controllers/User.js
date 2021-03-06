const { sanitizeEntity } = require("strapi-utils");

const sanitizeUser = (user) =>
  sanitizeEntity(user, {
    model: strapi.query("user", "users-permissions").model,
  });

module.exports = {
  /**
   * Retrieve authenticated user.
   * @return {Object|Array}
   */
  // async me(ctx) {
  //   const { id } = ctx.params;
  //   let data = await strapi.plugins["users-permissions"].services.user.fetch({
  //     id,
  //   });
  //   if (data) {
  //     data = sanitizeUser(data);
  //   }
  //   // Send 200 `ok`
  //   ctx.body = data;
  // },
};

const { parseMultipartData, sanitizeEntity } = require("strapi-utils");
module.exports = {
  async create(ctx) {
    strapi.services.sms.sendSms();
    let user;
    if (ctx.is("multipart")) {
      const { context } = parseMultipartData(ctx);
      entity = await strapi.plugins[
        "users-permissions"
      ].controllers.user.create(context, { files });
    } else {
      entity = await strapi.plugins[
        "users-permissions"
      ].controllers.user.create(ctx.request.body);
    }

    return sanitizeEntity(user, {
      model: strapi.query("user", "users-permissions").model,
    });
  },
};

// const { parseMultipartData, sanitizeEntity } = require('strapi-utils');
// module.exports = {

//   async create(ctx) {
//     strapi.services.sms.sendSms();
//     let entity;
//     if (ctx.is('multipart')) {
//       const { data, files } = parseMultipartData(ctx);
//       entity = await strapi.services.comment.create(data, { files });
//     } else {
//       entity = await strapi.services.comment.create(ctx.request.body);
//     }
//     return sanitizeEntity(entity, { model: strapi.models.comment });

//   },
// };

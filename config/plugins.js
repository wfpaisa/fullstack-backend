module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.example.com'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('SMTP_FROM'),
        defaultReplyTo: env('SMTP_REPLY_TO'),
      },
    },
  },
  //
  // strapi-plugin-io
  // https://market.strapi.io/plugins/strapi-plugin-io
  "io": {
    "enabled": false,
    "config": {
      "IOServerOptions": {
        "cors": { "origin": "http://localhost:3001", "methods": ["GET", "POST", "PUT", "DELETE"] },
        // "cors": { "origin": "*", "methods": ["GET", "POST", "PUT", "DELETE"] },
      },
      "contentTypes": {
        // "message": "*",
        // "new": ["find"]
        // "new": ["find", "findOne", "create", "update", "delete", "publish", "unpublish"]
        "new": "*"
      },
      "events": [
        {
          "name": "connection",
          "handler": ({ strapi }, socket) => {
            // console.log('---------------> ', strapi);
            // const getData = async () => {
            //   const entry = await strapi.db.query('api::new.new').findMany({
            //     // select: ['title', 'description'],
            //     // where: { title: 'Hello World' },
            //     // populate: { category: true },
            //   });

            //   console.log('--------->', entry)
            // }
            // getData()

            // console.log('--------->pasa');
            // strapi.log.info(`[io] new connection with id ${socket.id}`);

            // setTimeout(() => {
            //   strapi.$io.emit("api::new.new.find", 'ando buscando'); // simular evento
            //   strapi.$io.raw("customEvent", 'holitas'); //evento generico
            //   console.log('setttimeout');
            // }, 5000)
          },
        },
      ]
    },
  },
});
module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1fe522435de8e85c8488d854ab315456'),
  },
});

module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', '2b3a518777d8e8189351793790008bad'),
        },
    },
    url: env('URL', 'http://localhost:1337'),
});
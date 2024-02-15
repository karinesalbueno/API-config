const dotenv = require('dotenv')

dotenv.config();

const Config = {
    db: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        pass: process.env.DB_PASS
    },
    server: {
        hostname: 'localhost',
        port: 3000
    }
}

module.exports= Config;
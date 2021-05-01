const post = require('./post');
const sequelize = require('../config/connection');
const seedAll = async() => {
    await sequelize.sync({force:true});
    await post();
    process.exit(0)
}
seedAll()
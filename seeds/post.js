const {Post} = require("../models");
console.log(Post);
const postblogdata = [
    {
        title: 'First Blog post of the year!',
        description: 'This is to get it running',
        user_id: 45,
    },
    {
        title: 'Second Blog post of the year!',
        description: 'This is to get it going',
        user_id: 46,
    },
];
const seedposts = () => Post.bulkCreate(postblogdata);
module.exports = seedposts;
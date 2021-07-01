const {Post} = require("../models");
console.log(Post);
const postblogdata = [
    {
        title: 'Post the first blog of your life',
        description: 'This is to get it running',
        user_id: 45,
    },
    {
        title: 'Get the second one going so we know it works',
        description: 'This is to get it going to the top',
        user_id: 46,
    },
];
const seedposts = () => Post.bulkCreate(postblogdata);
module.exports = seedposts;
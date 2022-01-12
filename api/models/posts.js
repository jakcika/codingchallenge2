const db = require('../dbConfig/init');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.author = data.author;
        this.body = data.body;
        this.post_id = data.post_id;

    };

    static get all(){
        return new Promise (async (resolve, reject) => {
            try {
                let postsData = await db.query('SELECT * FROM posts;');
                let posts = postsData.rows.map(p => new Post(p));
                resolve (posts);
            } catch (err) {
                reject('Post not found');
            }
        });
    }  
    
    
    static findById(id){
        return new Promise (async (res, rej) => {
            try {
                let postData = await db.query(`SELECT * FROM posts WHERE posts.id = ${id};`, [ id ]);
                let post = new Post(postData.rows[0]);
                res(post);
            } catch (err) {
                reject('Post not found');
            }
        });
    };

    static async create(postData){
        return new Promise (async (res, rej) => {
            try {
                const { id, title, author, body, post_id} = postData;
                const query = {
                    text: 'INSERT INTO posts (id, title, author, body, post_id) VALUES () RETURNING *',
                    values: [id, title, author, body, post_id] 
                };
                res (result.rows[0]);
            } catch (err) {
                reject('Post could not be created');
            }
        });
    };
}
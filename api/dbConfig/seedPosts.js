const db = require('./init');
const fs = require('fs');

const seeds = fs.readFileSync(__dirname + '/posts.sql').toString();

db.query(seeds, () => console.log('Posts database seeded'));
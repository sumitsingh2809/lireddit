import { MikroORM } from '@mikro-orm/core';
import { __prod__ } from './constants';
import { Post } from './entities/Post';
import path from 'path';

export default {
    migrations: {
        path: path.join(__dirname, './migrations'), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    },
    entities: [Post],
    dbName: 'lireddit',
    type: 'postgresql', // one of `mongo` | `mysql` | `mariadb` | `postgresql` | `sqlite`
    clientUrl: 'http://localhost:5432', // defaults to 'mongodb://localhost:27017' for mongodb driver
    user: 'sumit',
    password: 'root',
    debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];

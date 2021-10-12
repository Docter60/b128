import { MongoClient, MongoError } from 'mongodb';

interface DBState {
    db: MongoClient
}

const state: DBState = {
    db: null
}

function connect(url: string, done: (err?: MongoError) => void) {
    if (state.db) return done();

    MongoClient.connect(url, (err: MongoError, db: MongoClient) => {
        if(err) return done(err);
        state.db = db;
    });
}

function get() {
    return state.db;
}

function close(done:(err?: MongoError) => void) {
    if(state.db) {
        state.db.close((err: MongoError) => {
            state.db = null;
            done(err);
        })
    }
}

export default {
    connect,
    get,
    close
}
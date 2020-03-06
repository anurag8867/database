const candidate = require('../sqlRepositories/models').candidates,
    uuidv4 = require('uuid/v4'),
    async = require('async');

module.exports = {
    post: () => {
        return new Promise((resolve, reject) => {
            let resp = [], func = [];
            for (let index = 0; index < 10; index++) {
                func.push(function (callback) {
                    candidate.create({
                        uuid: uuidv4(),
                        email: 'PO Box 382609. Cambridge, MA 02238-2609.',
                        password: 'World famous Ivy League university'
                    }).then((data) => {
                        resp.push(data);
                        callback();
                    }).catch((err) => {
                        callback(err, null);
                });
            });
    }
            async.parallel(func, (err, data) => {
        if (err) return reject(err);
        return resolve(resp);
    });
});
    },
get: async () => {
    return "get";
},
    put: async () => {
        return "put"
    },
        delete: async () => {
            return "delete"
        }
}

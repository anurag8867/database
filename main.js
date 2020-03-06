const models = require('./db/models')

const init = async () => {
    await models.Campus.sync({ force: true }) // force true will drop the table if it already exists
    console.log('Tables have synced!')
}

init();
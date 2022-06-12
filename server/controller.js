require('dotenv').config()
const Sequelize = require('sequelize')
// const {CONNECTION_STRING} = process.env

const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    getInfo: (req, res) => {
        sequelize.query('select * from INFO;')
            .then(db(dbRes => res.status(200).send(dbRes[0])))
            .catch(err => console.log('GETTING',err))
    },

    addInfo: (req, res) => {
        let {text} = req.body

        sequelize.query(`insert into input (text) values ('${text}');`)
            .then(db(dbRes => res.status(200).send(dbRes[0])))
            .catch(err => console.log('POSTING',err))
    }
}


// app.listen(process.env.SERVER_PORT, () => console.log(`server running port ${process.env.SERVER_PORT}`))
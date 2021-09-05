const mongoose = require('mongoose')

const databaseConnection = async () => {

    try {
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/audio-library-example?directConnection=true&serverSelectionTimeoutMS=2000',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useFindAndModify: false,
                useCreateIndex: true
            }
        )
        console.log(`Connected to Database`)
    } catch (err) {
        console.log('Failed to connect to db\nError: \n' + err)
    }

}

module.exports = databaseConnection
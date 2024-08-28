import app from './app.js'
import dbConn from './lib/dbConn.js'

dbConn()

app.listen(process.env.PORT, () => { 
    console.log('Server is running on port', `${process.env.PORT}`)
})
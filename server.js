require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3002
const swaggerUi = require('swagger-ui-express')
const path = require('path')
const bodyParser = require('body-parser')



const options = {
    explorer: true,
    swaggerOptions: {
        urls: [
            {
                url: `${process.env.LOCAL_URL}/doc/swagger.json`,
                name: 'V1',
            },
        ],
        servers: [
            {
                url: `${process.env.LOCAL_URL}`,
            },
        ],
    },
}

app.use('/docs', swaggerUi.serve, swaggerUi.setup(null, options))

app.use('/doc', express.static(path.join(__dirname, './src/V1.0.0/doc')))

app.use(cors())

app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', require('./src/index'))

app.listen(port, () =>{
    console.log(`server listening on ${port}`);
})
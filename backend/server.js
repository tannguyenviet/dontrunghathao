const dotenv =require( 'dotenv')
dotenv.config({ path: './config/config.env' })
const express =require( 'express')
const cors =require( 'cors')

// const dbConnect =require( './helpers/database/dbConnect'
const indexRouter =require( './routes/index')
// const CustomError =require( './helpers/error/CustomError'
// const logger =require( './config/logger/logger.config'
// const morgan =require( 'morgan'
// const helmet =require( 'helmet'
// require('./loaders/configs');

// dbConnect()
const db = require('./utils/utils_db');
db.sequelize.sync({ alter: true }).then(console.log('Done Alert'));
const app = express()


// if (process.env.MODE === 'production') app.use(morgan('dev'))
// app.use(helmet())
// app.use('/assets', express.static('assets'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', indexRouter)

// app.use((err, req, res, next) => {
//     let customError =err;
//     console.log(err)
//     switch (err.name) {
//         case 'SyntaxError':
//             customError = new CustomError(err.message, 400)
//             break
//         case 'ValidationError':
//             customError = new CustomError(err.message, 400)
//             break
//     }

//     res.status(customError.status || 500).json({
//         success: false,
//         message: customError.message,
//     })
//     if (process.env.MODE === 'production') logger.error(customError)
// })
app.listen(3000,()=>{
  console.log('server run on 8080');
})
// export default app

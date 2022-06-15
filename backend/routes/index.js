const express = require( "express")
// const categoryRouter = require( "./category")
// const productRouter = require( "./product")
// const authRouter = require(  "./auth")
// const orderRouter = require( "./order")
// const address = require( "./address")
// const payment = require( "./payment")
const user = require( "./user.route.js")
const router =express.Router()

// router.use("/category",categoryRouter)
// router.use("/product",productRouter)
// router.use("/auth",authRouter)
// router.use("/order",orderRouter)
// router.use("/address",address)
// router.use("/payment",payment)
router.use("/user",user)



module.exports = router;

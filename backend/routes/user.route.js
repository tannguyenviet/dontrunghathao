const express = require( 'express')
const {getAllUsers,makeAdmin,makeUser } = require( "../controllers/user.controller.js");
const validate = require('../middlewares/validate.js');
const { testGetOne } = require('../validators/auth.validation.js');

const router = express.Router()

router.post("/",validate(testGetOne), getAllUsers)
router.get("/",getAllUsers)
// router.put("/make-admin/:userId",makeAdmin)
// router.put("/make-user/:userId",makeUser)

module.exports = router;
import express from 'express'
import authCtrl from '../controllers/auth.controller'

const router = express.Router()

router.route('/auth/signin')
    .post(authCtrl.signin)
router.route('/suth/signout')
    .post(authCtrl.signout)

export default router
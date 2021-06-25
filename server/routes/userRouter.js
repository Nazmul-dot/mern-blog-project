const express = require('express')
const router = express.Router();
const USER = require('../models/userShcema')
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
router.get('/test', (req, res) => {
    res.send('hlw test router')
})


//registration
router.post('/register', async (req, res) => {
    console.log(req.body)
    const { name, email, password, conferm_password } = req.body
    try {
        if (!name || !email || !password || !conferm_password) {
            return res.status(422).json({ error1: 'fill all the field' })
        }
        const check = await USER.findOne({ email: email })
        if (check) {
            return res.status(422).json({ error: 'email already exist' })
        } else {
            const docu = new USER({ name, email, password, conferm_password })
            const token = await docu.tokengenaration()
            console.log(token)
            res.cookie('jwtToken', token)
            await docu.save()
            console.log('register sucessfull')
            res.status(201).json(docu)
        }

    } catch (error) {
        return res.status(422).json({ error3: 'registration failed' })
    }
})


//login
router.post('/login', async (req, res) => {
    console.log(req.body)
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return res.status(422).json({ error1: 'fill all the field' })
        }
        const userSignin = await USER.findOne({ email: email })
        console.log(userSignin)
        if (userSignin) {
            const ismatch = await bcrypt.compare(password, userSignin.password)
            if (ismatch) {
                const token = await userSignin.tokengenaration()
                console.log(token)
                res.cookie('jwtToken', token)
                console.log("user signin successfully")
                res.json(userSignin)
            }else{
                return res.status(422).json({error:'credential......'})
            }
        } else {
            return res.status(422).json({error:'credential......'})
        }

    } catch (error) {
        return res.status(422).json({ error3: 'login failed failed' })
    }
})

//user logged
router.get('/logged',auth,(req,res)=>{
    console.log('logged')
    res.json(req.user)
})

//logout
router.get('/logout',auth,async(req,res)=>{
    res.clearCookie('jwtToken')
    // req.user.token=[]
   const result= await req.user.save()
   console.log(result)
   res.json(result)
})

module.exports = router
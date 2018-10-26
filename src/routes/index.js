const router = require('express').Router()

router.get('/', (req, res) => {
  return res.render('index')
})

router.get('/login', (req, res) => {
  return res.render('login')
})

router.post('/login', (req, res) => {
  return res.json()
})

router.get('/register', (req, res) => {
  return res.render('register')
})

router.post('/register', (req, res) => {
  return res.json()
})

router.get('/logout', (req, res) => {
  return res.json()
})

module.exports = router

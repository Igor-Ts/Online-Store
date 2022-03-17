const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if (req.method === 'OPTIONS') {
        next()
    }
    try {
        const token = req.headers.authorization.split(' ')[1] // usually token have view like Bearer fdsfs
        if (!token) {
            return res.status(401).json({message: 'Welcome. You are unauthorised'})
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: 'Welcome. You are unauthorised'})
    }
}
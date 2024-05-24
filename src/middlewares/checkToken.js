const jwt = require('jsonwebtoken');

async function checkToken(req, res, next) {

    const authToken = req.headers?.authorization;

    if (!authToken) {
        res.status(401).send({ message: "AUthorization token is missing." });
        return;
    }
    const [bearer, jwtToken] = authToken.split(' ');

    if (bearer !== 'Bearer') {
        res.status(401).send({ message: "AUthorization token bad format." });
        return;
    } 
    
    try {
        var decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);
        next();
    } catch (err) {
        res.status(401).send({ message: "Invalid token or expired" })
    }
}

module.exports = checkToken;
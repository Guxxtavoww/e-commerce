const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;

    if(authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC_KEY, (err, user) => {
            err && res.status(403).json("Token Não é válido")
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("Você não está autenticado! Faça seu login novamente");
    }
}

const verifyTokenAndAuth = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json("Você não é administrador.");
        }
    });
}

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            return res.status(403).json("Você não é administrador.");
        }
    });
}

module.exports = { verifyToken, verifyTokenAndAuth, verifyTokenAndAdmin };
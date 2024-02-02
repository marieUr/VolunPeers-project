import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization;

    if(!token) {
        return res.status().json({message: "no token provided"})
    }

    // verify the token

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: "failed to authenticate token"})
        }

        req.decoded = decoded;
        next();
    });
};

export default verifyToken
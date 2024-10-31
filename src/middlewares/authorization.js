import dotenv from 'dotenv'
dotenv.config()

const authorization = (req, res, next) => {
    const key = req.headers.authorization;
    if (key === process.env.AUTH_KEY) {
        next();
    } else {
        res.status(401).json({message: "Unauthorized Access"})
    }
}

export default authorization;
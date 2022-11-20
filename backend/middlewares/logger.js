module.exports = (req, res, next) => {
    console.log(req.ip, new Date().toUTCString(), req.method, req.url)
    next();
}
const cache = require('../../cache');

exports.handler = async (req, res) => {
    return res.status(200).json(cache.getMessages(req.username).slice(1))
}
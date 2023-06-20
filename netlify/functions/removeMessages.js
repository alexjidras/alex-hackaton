const cache = require('../../cache');

exports.handler = async (req, res) => {
    cache.removeMessages(req.username);

    return res.status(200).json([]);
}
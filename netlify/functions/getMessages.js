const cache = require('../../cache');

exports.handler = async (event, context) => {
    if (event.httpMethod !== "GET") {
        return {
            statusCode: 405
        }
    }

    const username = event.headers['x-username'];

    if (!username) {
        return {
            statusCode: 401,
            body: JSON.stringify({ message: 'You are not logged in'})
        }
    }

    return {
        statusCode: 200,
        body: JSON.stringify(cache.getMessages(username).slice(1))
    };
}
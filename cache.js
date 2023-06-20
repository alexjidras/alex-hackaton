class Cache {
    messages = {}

    getMessages(username) {
        return [...this.messages[username] ?? []] ;
    }
    addMessage(username, ...messages) {
        if (Array.isArray(this.messages[username])) {
            this.messages[username].push(...messages);
            return;
        }
        this.messages[username] = messages;
    }
    removeMessages(username) {
        delete this.messages[username];
    }
}

module.exports = new Cache();
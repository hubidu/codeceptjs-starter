let request = require('es6-request'); 

class RESTHelper extends Helper {
    constructor (config) {
        super(config)
        this.responses = []
    }

    doHttpGet (url){
        return request.get(url)
        .then((body) => {
            this.responses.push(body)
            return body;
        });
    }
    
    clearResponses () {
        this.responses = []
    }

    getResponses () {
        return Promise.resolve(this.responses)
    }
}

module.exports = RESTHelper;
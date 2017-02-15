Feature('Call REST APIs')

Scenario('I can make a GET request', function* (I) {
    let body = yield I.doHttpGet('http://www.google.com')
    I.say(`Got body ${body} from google`)
})

Scenario('I can make multiple GET requests and collect responses', function* (I) {
    I.clearResponses()
    I.doHttpGet('http://www.google.com')
    I.doHttpGet('http://www.yahoo.com')
    I.doHttpGet('http://exploringjs.com/')

    let responses = yield I.getResponses()
    I.say(`Got ${responses.length} http responses`)
    I.say(`Response from exploringjs ${responses[2]}`)
})
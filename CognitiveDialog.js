var request = require('request'); //node module for http post requests

exports.retreiveMessage = function (session){

    request.post({
        url: 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/def25571-93c5-446b-90ee-def509026dee/url?iterationId=0b8add39-563a-4306-8831-68176d96b52b',
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Prediction-Key': '37af3e33444c4b1ea56ad6bb9050681d'
        },
        body: { 'Url': session.message.text }
    }, function(error, response, body){
        console.log(validResponse(body));
        session.send(validResponse(body));
    });
}

function validResponse(body){
    if (body && body.Predictions && body.Predictions[0].Tag){
        return "This is " + body.Predictions[0].Tag
    } else{
        console.log('Oops, please try again!');
    }
}
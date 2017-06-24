
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: 'API KEY'
});
api.CallStatus({
   messageid: "Message Id",

}, function(response, status) {
    console.log(response);
    console.log(status);
});
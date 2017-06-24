
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: 'API KEY'
});
api.CallMakeTTS({
   receptor: "YOUR RECEPTOR",
    message: "YOUR MESSAGE "
}, function(response, status) {
    console.log(response);
    console.log(status);
});
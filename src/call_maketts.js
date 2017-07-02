
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: 'your apikey here'
});
api.CallMakeTTS({
    receptor: "your receptor mobile number",
    message: "your message"
}, function(response, status) {
    console.log(response);
    console.log(status);
});
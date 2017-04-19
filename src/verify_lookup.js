var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: 'your apikey here'
});
api.VerifyLookup({
    receptor: "your receptor mobile number",
    token: "your token",
    template: "your template"
}, function(response, status) {
    console.log(response);
    console.log(status);
});

var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: 'your apikey here'
});
api.Receive({
    linenumber: "",
    isread: 0
}, function(response, status) {
    console.log(response);
    console.log(status);
});

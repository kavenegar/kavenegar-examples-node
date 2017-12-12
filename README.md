# kavenegar-examples-node

## Installation
```node
npm install kavenegar
```
## Usage
```node
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: 'your apikey here'
});
api.Send({
        message: "خدمات پیام کوتاه کاوه نگار",
        sender: "10004346",
        receptor: "09123456789,09367891011"
    },
    function(response, status) {
        console.log(response);
        console.log(status);
    });
/*
sample output
{
    "return":
    {
        "status":200,
        "message":"تایید شد"
    },
    "entries": 
    [
        {
            "messageid":8792343,
            "message":"خدمات پیام کوتاه کاوه نگار",
            "status":1,
            "statustext":"در صف ارسال",
            "sender":"10004346",
            "receptor":"09123456789",
            "date":1356619709,
            "cost":120
        },
        {
            "messageid":8792344,
            "message":"خدمات پیام کوتاه کاوه نگار",
            "status":1,
            "statustext":"در صف ارسال",
            "sender":"10004346",
            "receptor":"09367891011",
            "date":1356619709,
            "cost":120
        }
    ]
}
*/
```
```node
var Kavenegar = require('kavenegar');
var api = Kavenegar.KavenegarApi({
    apikey: 'your apikey here'
});
api.VerifyLookup({
    receptor: "09361234567",
    token: "852596",
    template: "registerverify"
}, function(response, status) {
    console.log(response);
    console.log(status);
});
/*
sample output
{
    "return":
    {
        "status":200,
        "message":"تایید شد"
    },
    "entries": {
            "messageid":8792343,
			"message": "ممنون از ثبت نام شما کد تایید عضویت  : 852596",
            "status":5,
            "statustext":"ارسال به مخابرات",
            "sender":"10004346",
            "receptor":"09361234567",
            "date":1356619709,
            "cost":120
   }    
    
}
*/
```
## Contribution
Bug fixes, docs, and enhancements welcome! Please let us know support@kavenegar.com

<hr>

<div dir='rtl'>

	
#### راهنما

##### معرفی سرویس کاوه نگار

کاوه نگار یک وب سرویس ارسال و دریافت پیامک و تماس صوتی است که به راحتی میتوانید از آن استفاده نمایید.

##### ساخت حساب کاربری

اگر در وب سرویس کاوه نگار عضو نیستید میتوانید از [لینک عضویت](http://panel.kavenegar.com/client/membership/register) ثبت نام  و اکانت آزمایشی برای تست API دریافت نمایید.

##### مستندات

برای مشاهده اطلاعات کامل مستندات [وب سرویس پیامک](http://kavenegar.com/وب-سرویس-پیامک.html)  به صفحه [مستندات وب سرویس](http://kavenegar.com/rest.html) مراجعه نمایید.

##### راهنمای فارسی

در صورتی که مایل هستید راهنمای فارسی کیت توسعه کاوه نگار را مطالعه کنید به صفحه [کد ارسال پیامک](http://kavenegar.com/sdk.html) مراجعه نمایید.

##### اطالاعات بیشتر
برای مطالعه بیشتر به صفحه معرفی [وب سرویس کاوه نگار](http://kavenegar.com/%D9%88%D8%A8%D8%B3%D8%B1%D9%88%DB%8C%D8%B3-%D9%BE%DB%8C%D8%A7%D9%85%DA%A9.html) مراجعه نمایید .

 اگر در استفاده از کیت های سرویس کاوه نگار مشکلی یا پیشنهادی  داشتید ما را با یک Pull Request  یا  ارسال ایمیل به support@kavenegar.com  خوشحال کنید.
 

</div>

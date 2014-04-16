/*===========================================
=            Database connection            =
===========================================*/

/*
var mysql = require("db-mysql");
new mysql.Database({
    "hostname": "emc2innovation.com",
    "user": "admin_admin",
    "password": "laro4325",
    "database": "admin_wp"
}).connect(function(error) {
    if (error) {
        return console.log("CONNECTION error: " + error);
    }
    this.query()
        .select(["id", "user", "email"])
        .from("users")
        .where("role IN ?", [ ["administrator", "user"] ])
        .and("created > ?", [ new Date(2011, 1, 1) ])
        .execute(function(error, rows, columns){
            if (error) {
                console.log('ERROR: ' + error);
                return;
            }
            // Do something with rows & columns
        });
});
*/

/*============================================
=            EventSource Listener            =
============================================*/

var EventSource = require('eventsource');
var esInitDict = {rejectUnauthorized: false};

var deviceID = "50ff69065067545642530387";
var accessToken = "b83d8349a10a34df67f74d4afed7783851534819";

var url = "https://api.spark.io/v1/devices/"+deviceID+"/events/?access_token="+accessToken;

console.log("Listening on "+url+" ...");

var es = new EventSource(url);

es.addEventListener('Environment', function(e){
        console.log( e.data);
}, false);

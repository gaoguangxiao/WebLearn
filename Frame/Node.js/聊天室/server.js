var ws = require("nodejs-websocket");
var post = 8010;
var user = 0;

var server = ws.createServer(function (conn) {

    console.log("创建一个新的连接");
    user++;

    conn.nickname = "user" + user;
    conn.fd = "user" + user;

    var mes = {};
    mes.type = "enter";
    mes.data = conn.nickname + "进来啦";

    broadcast(JSON.stringify(mes));

    //监听输入
    conn.on("text", function (str) {
        console.log("回复" + str);
        mes.type = "message";
        mes.data = conn.nickname + "说" + str;
        broadcast(JSON.stringify(mes));
    });

    conn.on("close", function (code, reason) {
        console.log("关闭连接");
        mes.type = "leave";
        mes.data = conn.nickname + "离开了";
        broadcast(JSON.stringify(mes));
    });

    conn.on("error",function(e){

    })

}).listen(post);

function broadcast(str) {
    // console.log(str);
    server.connections.forEach(function (con) {
        con.send(str);
    })
}
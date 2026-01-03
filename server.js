const http=require('http');
const fs=require('fs');


const server=http.createServer((req,res)=>{
if(req.url==="/"){
    const loginhtml=fs.readFileSync("Login.html","utf-8");
    res.writeHead(200,{"Content-Type": "text/html"});
    res.end(loginhtml);
}else if(req.url==="/style.css"){
    const css=fs.readFileSync("style.css","utf-8");
        res.writeHead(200,{"Content-Type": "text/css"});
    res.end(css);
}else if(req.url==="/login.js")
{
    const js=fs.readFileSync("login.js","utf-8");
    res.writeHead(200,{"Content-Type": "text/javascript"});
res.end(js);
}


else{
    res.writeHead(404);
    res.end("Page not found");
}


});
server.listen(9810,()=>{
    console.log("Server listning at port 9810.....");
});
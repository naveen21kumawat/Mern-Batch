import url from "url";
import http from "http";


const server = http.createServer((req, res) => {

if(req.url === "/"){
    const users = [
        { id: 1, name: "John", age: 30 },
        { id: 2, name: "Jane", age: 25 },
        { id: 3, name: "Doe", age: 35 }
    ];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
}
else if(req.url === "/about"){
    res.write("About Page / Path");
    res.end("\nAbout Page");
}
else{
    res.write("404 Page Not Found / Path");
    res.end("\n404 Page Not Found");
}
   
})

server.listen(3001, () => {
    console.log("Server running on port 3000"); 
})
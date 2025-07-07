const cds = require('@sap/cds');

module.exports= async (srv)=>{
    srv.on("READ", "Users", async (req)=>{
var allData =[
    {
        ID: 1,
        Name: "John Doe",
        Email: "john2gmail.com",
        Password:"123"
    },
    {
        ID:2,
        Name:"second",
        Email:"second@gmail.com",
        Password:"432"
    }
]
return allData;
    }
)
}
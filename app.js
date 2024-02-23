const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const teachersRoutes = require("./Route/teacherRoutes");
const classesRoutes = require("./Route/classesRoutes");
const childrenRoutes = require("./Route/childsRoutes");
const server = express();
let portNumber = process.env.PORT || 8080;


// connenct to the db then the server
mongoose.connect("mongodb://127.0.0.1:27017/nurserydb")
.then(()=>{
    console.log("conected to the db");
    server.listen(portNumber, ()=>{
        console.log(`server is running on port ${portNumber}`);
    });
})
.catch(()=>{
    console.log("couldn't connect to the Database");
})




server.use(cors());

// logging middleware
server.use(morgan("dev"));
// settings
server.use(express.json());
server.use(express.urlencoded({extended: true}));

//routes
server.use(teachersRoutes);
server.use(classesRoutes);
server.use(childrenRoutes);

server.post("/patients", (req, res)=>{
    res.status(200).json({message: "added Succesfully"});
})

// NotFound Middleware
server.use((req, res)=>{
    res.status(404).json({message:"Not Found"});
})

// Error middleware
server.use((err, req, res, next)=>{
    res.status(500).json({message:"Internal server Error"});
})



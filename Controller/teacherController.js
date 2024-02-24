const Teacher = require("../Model/teacherSchema.js");

const fs = require('fs').promises;
const path = require('path');

async function deleteFile(filePath) {
    try {
        await fs.unlink(filePath);
        console.log('File deleted successfully');
    } catch (err) {
        console.error('Error deleting file:', err);
    }
}


module.exports.getTeachers = [(req, res, next)=>{
    let authorized = true;
    if(!authorized)
        res.status(401).json({message: "Not authorized"});
    next();
},
(req, res)=>{
    res.status(200).json({message: "all teachers"})
}
]

module.exports.addTeacher = (req, res)=>{
    console.log(req.file)
    let imgPath = "NoImage";

    if(req.file)
        imgPath = req.file.path;
    
    let {fullName, email, password} = req.body;
    console.log(imgPath, fullName, email, password);
    const newTeacher = new Teacher({
        fullName : fullName,
        email: email,
        password: password,
        image: imgPath
    })



    newTeacher.save()
    .then(()=>{
        console.log("user saved!");
        res.status(201).json({message: "added teacher"});
    })
    .catch(()=>{
        console.log("failed, teacher isn't saved");
        // delete the picture
        if(imgPath !== "NoImage")
            deleteFile(`${imgPath}`);

        res.status(400).json({message: "failed"})
    })
    
}

module.exports.updateTeachers = (req, res)=>{
    res.status(201).json({message: "updates teacher"});
}

module.exports.getTeacherById = (req, res)=>{
    res.status(200).json({message: `teacher ID: ${req.params.id}`});
}

module.exports.deleteTeacherById = (req, res)=>{
    res.status(204).json({message: `deleted teacher: ${req.params.id}`});
}

module.exports.getTeacherSupervisors = (req, res)=>{
    res.status(200).json({message: "supervisors"});
}
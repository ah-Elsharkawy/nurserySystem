const Teacher = require("../Model/teacherSchema.js");

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
    const newTeacher = new Teacher({
        fullName : "AhmedElsharkawy",
        email: "aelsharkawy5@gmail.com",
        password: "1234",
        Image: "imgString"
    })

    newTeacher.save()
    .then(()=>{
        console.log("user saved!")
    })
    .catch(()=>{
        console.log("failed, teacher isn't saved")
    })
    res.status(201).json({message: "added teacher"})
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
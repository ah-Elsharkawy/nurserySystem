module.exports.getAllClasses = (req, res)=>{
    res.status(200).json({message: "all classes"});
}

module.exports.getClassById = (req, res)=>{
    res.status(200).json({message: `class ID: ${req.params.id}`});
}

module.exports.addClass = (req, res)=>{
    res.status(201).json({message: "added a new class"});
}

module.exports.updateClasses = (req, res)=>{
    res.status(201).json({message: "updated classes"});
}

module.exports.deleteClassById = (req, res)=>{
    res.status(204).json({message: `deleted class with ID: ${req.params.id}`});
}

module.exports.getClassTeacher = (req, res)=>{
    res.status(200).json({message: "class teacher"});
}

module.exports.getClassChildren = (req, res)=>{
    res.status(200).json({message: "class children"});
}
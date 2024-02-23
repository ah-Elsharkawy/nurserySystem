
module.exports.getAllChilds = (req, res)=>{
    res.status(200).json({message: "all childs"});
}

module.exports.getChildById = (req, res)=>{
    res.status(200).json({message: `child ${req.params.id}`});
}

module.exports.addChild = (req, res)=>{
    res.status(201).json({message: "added new child"});
}

module.exports.updateChilds = (req, res)=>{
    res.status(201).json({message: "updated child Data"});
}

module.exports.deleteChildById = (req, res)=>{
    res.status(204).json({message: `deleted child ${req.params.id}`});
}


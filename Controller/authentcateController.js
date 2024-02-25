require("dotenv").config();
const jwt = require("jsonwebtoken");
const Teacher = require("../Model/teacherSchema")
const bcrypt = require("bcrypt")

let login = async (req, res) => {
    let {email, password} = req.body;

    let hashedPass = 
    await bcrypt.hash(password, 10);
    console.log(hashedPass);
    //console.log(bcrypt.hash(password, 10).then((pass) => console.log(pass)));
    Teacher.findOne({email: email, password: password})
    .then(
        (teacher) => {
            if(!teacher)
            {
                console.log("teacher on error" , teacher);
                res.status(401).json("invalid email or password");
            }
            else
            {
                let result = bcrypt.compare(password, hashedPass).then((res)    =>console.log(res))
                let token = jwt.sign({_id: teacher._id, role: "teacher"},
                process.env.SECRET_KEY);

                res.status(200).json({token: token});
            }
                
            
        }
    )
}

module.exports = {login};
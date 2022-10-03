const userSchema = require("../models/userSchema");
const petSchema = require("../models/petSchema.js");
const procedureSchema = require("../models/procedureSchema");
const bcrypt = require("bcrypt");
const express = require("express");
const { db } = require("../models/userSchema");
const router = express.Router();

const procedureManager = "Richard Leal";
const procedureWorker1 = "Jorge"; // Resto
const procedureWorker2 = "Orlando"; // Responsável por consulta médica, exame de sangue, tratamento dentário
const procedureWorker3 = "Xuxa"; // Responsável por banho ou tosa


router.post("/addPet", async (req, res) => {
  const {name, age, weight, specie, owner} = req.body;
  if (!name || !age || !weight || !specie)
    return res.status(400).json({msg:"Please complete all fields before submitting."});
  const newPet = new petSchema({name, age, specie, weight, owner});
  const newPetRes = await newPet.save();

  if(newPetRes)
    return res.status(200).json({msg : "Pet is succesfully saved on the database."});
})

router.post("/registerProcedure", async (req, res) => {
  const {name, pet, petOwner, petOwnerEmail} = req.body;
  const procedureStartDate = Date.now();
  let procedureWorker = '';

  if(name === 'Banho' || name === 'Tosa')
    procedureWorker = procedureWorker3;
  else if(name === 'Tratamento Dentário' || name === 'Exame de Sangue' || name === 'Exame Médico')
    procedureWorker = procedureWorker2;
    else procedureWorker = procedureWorker1;

  const procedureState = 'Pending Approval';
  
  const newProcedure = new procedureSchema({name, pet, petOwner, petOwnerEmail, procedureManager, procedureWorker, procedureStartDate, procedureState});
  const newProcedureRes = await newProcedure.save();

  if(newProcedureRes)
    return res.status(200).json({msg : "Procedure is succesfully saved on the database."});

})

router.post("/getProcedures", async (req, res) => {
  const { owner, pet} = req.body;
  procedureSchema.find({pet: pet, petOwner: owner}).lean().exec(function(err, docs) {
    if(!err)
    return res.status(200).json(docs);
    
  })
})

router.post("/getPets", async (req, res) => {
    const {owner} = req.body;
    petSchema.find({owner}).lean().exec(function(err,docs) {
      if(!err)
      return res.status(200).json(docs);
    });
})

router.post("/register", async (req, res) => {
  const { email, password, userType, address, name } = req.body;
  if (!email || !password)
    return res.status(400).json({ msg: "Password and Email are required." });
  if (password.length < 8)
    return res
      .status(400)
      .json({ msg: "Password must be at least 8 characters long." });

  const user = await userSchema.findOne({ email });
  if (user) return res.status(400).json({ msg: "User already exists!" });

  const newUser = new userSchema({ email, password, userType, address, name });
  bcrypt.hash(password, 7, async (err, hash) => {
    if (err) return res.status(400).json({ msg: "Error saving the password." });
    newUser.password = hash;
    const savedUserRes = await newUser.save();

    if (savedUserRes)
      return res
        .status(200)    
        .json({ msg: "User is succesfully saved on the database." });
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ msg: "Password or email missing." });
  }
  const user = await userSchema.findOne({ email: email });
  if (!user) {
    return res.status(400).json({ msg: "User not found on the database." });
  }
  const matchPassword = await bcrypt.compare(password, user.password);
  if (matchPassword) {

    const userSession = {email: user.email, name: user.name}
    req.session.user = userSession

    return res.status(200).json({ msg: "Logged in succesfully!", userSession });
  } else {
    return res.status(400).json({ msg: "Invalid password." });
  }
});

router.delete('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if(err){
        res.status(400).json({msg:"Unable to log out."})
      } else {
        res.status(200).json({msg:"Logout successful."})
      }
    });
  } else {
    res.end();
  }
});

router.delete("/cancelProcedure", (req, res) => {
  const {id} = req.body;
  procedureSchema.findByIdAndDelete(id, function(err, docs) {
    if (err){
      res.status(400).json({msg:"Unable to delete procedure - not found."});
    }
    else{
      res.status(200).json({msg:"Procedure canceled with success !"});
    }
  })

});

router.get('/isAuth', async (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user)
  } else {
    return res.status(401).json('unauthorize')
  }
})

module.exports = router;

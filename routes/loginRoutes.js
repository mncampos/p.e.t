const userSchema = require("../models/userSchema");
const bcrypt = require("bcrypt");
const express = require("express");
const { db } = require("../models/userSchema");
const router = express.Router();

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

router.get('/isAuth', async (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user)
  } else {
    return res.status(401).json('unauthorize')
  }
})

module.exports = router;

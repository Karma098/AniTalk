const express=require("express");
const { register,login, setAvatar, getAllUsers } = require("../controllers/userController");
const router=express.Router();

router.post("/register",register);
router.post("/login",login);
router.put("/setAvatar/:id",setAvatar);
router.get('/allusers/:id',getAllUsers);

module.exports=router;
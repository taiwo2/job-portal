import userSchema from "../models/user.js";

export const register = async (req, res) => {
  try {
    const newUser = new userSchema({ ...req.body });
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const login = async (req, res) => {
  const {userName, email,password} = req.body
  try {
    const user = await userSchema.findOne({email: email,password: password})
    if (user) {
      res.status(200).json(user)
    }else{
      res.status(505).json("Invalid Credential")
    }
  } catch (error) {
    res.status(404).json(error);

  }
}

export const updateUser = async (req,res) => {
  try{
    await userSchema.findOneAndUpdate({_id: req.body._id}, req.body)
    const user = await userSchema.findById({_id: req.body._id})
    res.status(201).json(user)
  }catch (error) {
    res.status(404).json(error.message)
  }
}
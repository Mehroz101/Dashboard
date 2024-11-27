const User = require("../models/User");
const bcryptjs = require("bcryptjs");

const updateaccountinformation = async (req, res) => {
  const { fname, lname, email, phone } = req.body;
  //console.log("user Deatail:", req.body);
  try {
    // Use the user ID from the req.user object set by the authenticateToken middleware
    const user = await User.findById(req.user.id);
    //console.log(req.user.id);
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Optionally check if the new email is already in use
    if (email && email !== user.email) {
      const emailExists = await User.findOne({ email });
      if (emailExists) {
        return res.status(409).send("Email is already in use");
      }
    }

    // Update user details
    user.fName = fname || user.fName;
    user.lName = lname || user.lName;
    user.email = email || user.email;
    user.phone = phone || user.phone;

    // Save the updated user
    await user.save();
    //console.log(user);
    res.status(200).send("Account Information Updated");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
};

const showAccountInformation = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      //console.log("user not found")
    } else {
      res.status(200).send({ user });
    }
  } catch (error) {
    //console.log(error.message)
  }
};
const allusers = async (req, res) => {
  try {
    const response = await User.find();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};
const addUser = async (req, res) => {
  const { fName, lName, Email, Number, Password } = req.body;

  try {
    const isUserExist = await User.findOne({ email: Email });
    if (isUserExist) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }
    const hashPassowrd = await bcryptjs.hash(Password, 10);

    const newUser = new User({
      email: Email,
      password: hashPassowrd,
      fName,
      lName,
      phone: Number,
    });
    const userCreated = await newUser.save();

    res.status(201).json({
      success: true,
      message: "User registered successfully!",
      user: userCreated,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
const edituser = async (req, res) => {
  try {
    const { userId, fName, lName, Email, Number, Password } = req.body;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the new email is already taken by another user
    if (Email && Email !== user.email) {
      const isEmailTaken = await User.findOne({ email: Email });
      if (isEmailTaken) {
        return res.status(409).json({
          success: false,
          message: "Email is already taken by another user",
        });
      }
    }

    // Hash the password if it's being updated
    let updatedFields = {
      fName,
      lName,
      email: Email,
      phone: Number,
    };
    if (Password) {
      const hashedPassword = await bcryptjs.hash(Password, 10);
      updatedFields.password = hashedPassword;
    }

    // Update the user details
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: updatedFields },
      { new: true } // Return the updated user
    );

    res.status(200).json({
      success: true,
      message: "User details updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = {
  showAccountInformation,
  updateaccountinformation,
  allusers,
  addUser,
  edituser,
};

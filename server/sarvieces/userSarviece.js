import { clerkClient } from "@clerk/clerk-sdk-node";
import User from "../models/userModal.js";

export const getUserById = async (clerkId) => {
  try {

    const clerkUser = await clerkClient.users.getUser(clerkId);
    console.log(clerkUser.emailAddresses[0]?.emailAddress  , "this id");
    

    let user = await User.findOne({ clerkId });
    
    
    if (!user) {
      user = new User({
        clerkId: clerkUser.id,
        email: clerkUser.emailAddresses[0]?.emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName, 
      });
      await user.save();
    }
    return  user;
  } catch (error) {    
    throw new Error("Failed to fetch user data sadd");
  }
  
};

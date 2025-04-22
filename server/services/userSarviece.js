import { clerkClient } from "@clerk/clerk-sdk-node";
import User from "../models/userModal.js";

export const getUserById = async (clerkId) => {
  try {
    const clerkUser = await clerkClient.users.getUser(clerkId);

    const email = clerkUser?.emailAddresses?.[0]?.emailAddress;
    if (!email) {
      throw new Error("Email not found from Clerk user.");
    }

    let user = await User.findOne({ clerkId });

    if (!user) {
      user = new User({
        clerkId: clerkUser.id,
        username: clerkUser.username || '',
        email,
        firstName: clerkUser.firstName || '',
        lastName: clerkUser.lastName || '',
      });
      await user.save();
   
    } else {
      console.log("User already exists in DB");
    }

    return user;
  } catch (error) {
    console.error("getUserById error:", error);
    throw new Error("Failed to fetch or create user");
  }
};

// Get all users from Clerk
export const getAllUsers = async () => {
  try {
    const users = await clerkClient.users.getUserList();
    return users;
  } catch (error) {
    console.error(" Error fetching all users:", error);
    throw new Error("Failed to fetch all users");
  }
};


// Create user with basic Clerk data
// export const createUserService = async (id, firstName, lastName, email) => {
//   try {
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       throw new Error("User already exists");
//     }

//     const user = new User({
//       clerkId: id,
//       email,
//       firstName,
//       lastName,
//     });

//     await user.save();
//     console.log("User created successfully");
//     return user;
//   } catch (err) {
//     console.error("createUserService error:", err.message);
//     throw new Error("Failed to create user");
//   }
// };

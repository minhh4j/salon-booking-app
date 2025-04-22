
import { getUserById, getAllUsers } from "../services/userSarviece.js"; // double check spelling here!
import { asyncHandler } from "../middleware/asyncHandler.js";

// GET a single user by Clerk ID
export const getUser = asyncHandler(async (req, res) => {
  const { clerkId } = req.params;

  if (clerkId === "all") {
    const users = await getAllUsers();
    return res.status(200).json(users);
  }

  const user = await getUserById(clerkId);
  res.status(200).json(user);
});



// import  getUserById from "../sarvieces/userServiece"; 

// import { getUserById , createUserService} from "../services/userSarviece.js";
// import {Clerk} from '@clerk/clerk-sdk-node'


// export const getUser = async (req, res) => {
//     try {
//         const { clerkId } = req.params;
//         const user = await getUserById(clerkId);
//         res.json(user);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };




// const clerk = new Clerk({
//     secretKey:process.env.CLERK_SECRET_KEY
// })

// export const createUser = async (req,res)=>{
//     const {userId} = req.body;
//     try {
//         const user = await clerk.users.getUser(userId)
//         const id = user.id;
//         const firstName = user.firstName 
//         const lastName = user.lastName
//         const email = user.emailAddresses[0]?.emailAddress
//         const newUser = await createUserService(id,firstName,lastName,email)
//         res.status(200).json(newUser)
//     } catch (error) {
        
//     }
// }
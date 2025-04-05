// import  getUserById from "../sarvieces/userServiece"; 

import { getUserById } from "../services/userSarviece.js";


export const getUser = async (req, res) => {
    try {
        const { clerkId } = req.params;
        const user = await getUserById(clerkId);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

"use server";

import User from "@/models/user.model";
import { connectToDatabase } from "../dbconnect";

export async function getUserById(params: any) {
    try {
        connectToDatabase()
        const { userId } = params

        const user = await User.findOne({ clerkId: userId })

        return user
    } catch (error) {
        console.log(error)
        throw error
    }
}

// Note: This is a dummy user model for MongoDB
// {
//     "_id": { "$oid": "65abb5cd44316ef0e3082537" },
//     "clerkId": "b47e3082536",
//     "name": "John Smith",
//     "username": "johnsmith",
//     "email": "johnsmith@gmail.com",
//     "password": "5abb47c44",
//     "bio": "This is a dummy user",
//     "profilePicture": "https://example.com/dummyuser.jpg",
//     "location": "Nairobi, Kenya",
//     "portfolioWebsite": "https://dummywebsite.com",
//     "reputation": { "$numberInt": "0" },
//     "saved": [],
//     "joinedAt": "2022-01-01T00:00:00.000Z"
// }
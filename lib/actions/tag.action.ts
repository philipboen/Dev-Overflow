"use server"

import User from "@/models/user.model"
import { connectToDatabase } from "../dbconnect"
import { GetAllTagsParams, GetTopInteractedTagsParams } from "../shared.types"
import Tag from "@/models/tag.model"


export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
    try {
        connectToDatabase()

        const { userId } = params

        const user = await User.findById(userId)

        if (!user) throw new Error("User not found")

        // Find interactions for the user and group by tags...*
        // Interaction Model in the database

        return [{ _id: '1', name: 'React' }, { _id: '2', name: 'Nodejs' }, { _id: '3', name: 'Next.js' }]
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export async function getAllTags(params: GetAllTagsParams) {
    try {
        connectToDatabase()

        const tags = await Tag.find({})

        return { tags }
    }
    catch (error) {
        console.log(error)
        throw error
    }
}
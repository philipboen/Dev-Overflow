"use server";

import { connectToDatabase } from "../dbconnect";

export async function createQuestion() {
    try {
        connectToDatabase()
    } catch (error) {
        console.log(error)
    }
}
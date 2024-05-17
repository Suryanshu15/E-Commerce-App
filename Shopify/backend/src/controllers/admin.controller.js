import { Admin } from "../models/admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const registerAdmin = asyncHandler(async(req,res) => {
    
})

const loginAdmin = asyncHandler( async(req,res) => {    
    const {adminName, adminPassword} = req.body

    if(!admin && !adminPassword){
        throw new ApiError(400, "username and password are required")
    }

    const admin = await Admin.findOne({admin})

    if(!admin) {
        throw new ApiError(404, "admin not found")
    }

    const isPasswordCorrect = await admin.isPasswordCorrect(adminPassword)
    if(!isPasswordCorrect){
        throw new ApiError(401, "invalid password")
    }




})

export {
    loginAdmin,
}
import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler.js";


const loginAdmin = asyncHandler( async(req,res) => {    
    const {admin,password} = req.body;

    if(!admin){
        throw new ApiError(404, "admin is required")
    }

    const isPasswordCorrect = (password)=>{
        return password==="admin@123"
    }

    if(!isPasswordCorrect){
        throw new ApiError(401, "invalid password")
    }

    const {accessToken, refreshToken} = await generateAccessAndResponceTokens(user._id)
    // console.log(accessToken + " " + refreshToken)
    const logedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true,
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: logedInUser, accessToken,
                refreshToken
            },
            "User logged in successfully"
        ) 
    )
})

export {
    loginAdmin,
}
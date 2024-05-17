import { Admin } from "../models/admin.model.js";
import { Product } from "../models/product.models.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"

const generateAccessAndResponceTokens = async (adminId) => {
    try {
        const admin = await Admin.findById(adminId)
        // console.log(admin._id)
        const accessToken = await admin.generateAccessToken();
        // console.log(accessToken);
        const refreshToken = await admin.generateRefreshToken()

        admin.refershToken = refreshToken;
        admin.save({ validateBeforeSave: false })
        console.log("saved");
        return {accessToken, refreshToken}
         
    } catch (error) {
        throw new ApiError(500, "some thing went wrong while generating at or rt")
    }
}

const registerAdmin = asyncHandler( async(req,res) => {
    const {adminName, email, password}= req.body
    // console.log("email: ", email)

    if(
        [adminName, email, password].some((field) => field?.trim() === ""))
        {
        throw new ApiError(400,"fields can not be empty")
    }


    const existedadmin = await Admin.findOne({email})
    
    if(existedadmin) {
        throw new ApiError(409, "admin with email or admin name already admin")
    }

    const admin = await Admin.create({
        adminName,
        email,
        password,
    })

    const createdAdmin = await Admin.findById(admin._id).select(
        "-password -refreshtoken"
    )

    if(!createdAdmin){
        throw new ApiError(500, "error while registering")
    }

    return res.status(201)
    .json(new ApiResponse(200,createdAdmin,"admin registeres successfully"))
})

const loginAdmin = asyncHandler( async(req,res) => {
        
    const {email,password} = req.body;

    if(!email) {
        throw new ApiError(400, "email is required")
    }

    const admin = await Admin.findOne({email})
    // console.log(admin)

    if(!admin){
        throw new ApiError(404, "admin not found")
    }

    const isPasswordCorrect = await admin.isPasswordCorrect(password)

    if(!isPasswordCorrect){
        throw new ApiError(401, "invalid password")
    }
    // console.log(admin._id)
    const {accessToken, refreshToken} = await generateAccessAndResponceTokens(admin._id)
    // console.log(accessToken + " " + refreshToken)
    const logedInAdmin = await Admin.findById(admin._id).select("-password -refreshToken")

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
                admin: logedInAdmin, accessToken,
                refreshToken
            },
            "admin logged in successfully"
        ) 
    )
})

const logoutAdmin = asyncHandler( async(req,res) => {
    // console.log(req)
    await Admin.findByIdAndUpdate(
        req.user._id,

        {
            $set: {
                refershToken : null
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true,
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged out"))

})

const addProduct = asyncHandler( async(req,res) => {
    const {productName, description, price, ratings, category} = req.body;

    if(
        [productName, description, price, category].some((field) => field?.trim() === ""))
        {
        throw new ApiError(400,"fields can not be empty")
    }

    const productImageLocalPath = req.files?.productImage[0]?.path;

    if(!productImageLocalPath) {
        throw new ApiError(400, "product image is required")
    }

    const productImg = await uploadOnCloudinary(productImageLocalPath)

    const admin = req.user._id;
    console.log(admin)

    const product = await Product.create({
        productname: productName,
        admin,
        productImage: productImg.url,
        description,
        price,
        ratings: ratings || "",
        category
    })

    return res.status(201)
    .json(
        new ApiResponse(200, product ,"product added successfully")
    )
})

export {
    loginAdmin,
    registerAdmin,
    logoutAdmin,
    addProduct,

}
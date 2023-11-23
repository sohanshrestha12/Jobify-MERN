import { StatusCodes } from "http-status-codes"

export const register = async (req,res)=>{
    res.status(StatusCodes.OK).json({msg:'This is an register page.'})
}

export const login = async (req,res) =>{
    res.status(StatusCodes.OK).json({msg:'This is an login page.'})
}
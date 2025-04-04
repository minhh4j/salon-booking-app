import mongoose from 'mongoose';
import Sarvice from '../models/sarviceModel.js';
// import CustomError from '../middleware/errorHandler.js';

export const addSarvice = async (sarviceData) => {
    const existingSarvice = await Sarvice.findOne({ name: sarviceData.name });

    if (existingSarvice) {
        throw new Error("Service already exists");
    }

    const sarvice = await Sarvice.create(sarviceData);
    return sarvice;
};


export const getSarvicesService = async ({id, name, page, limit}) => {
    const skip = (page - 1) * limit;

    // const match = { isDeleted: false };
    const match = { isDeleted: false };
  
    if (name) {
      match.name = { $regex: name, $options: "i" };
    }
  
    if (id) {
      match._id = new mongoose.Types.ObjectId(id);
    }
  
    const pipline = [
      { $match: match },
      { $sort: { createdAt: -1 } },
      { $skip: skip },
      { $limit: limit },
    ];
  
    const sarvice = await Sarvice.aggregate(pipline);
  
    if (id && sarvice.length === 0) {
      throw new Error("Sarvice not found or is deleted", 404);
    }
  
    const total = await Sarvice.countDocuments({ isDeleted: false, ...match });
    return { sarvice , total, };
}

export const deleteProduct = async(sarviceId) => {
    const sarvice = await Sarvice.findByIdAndUpdate(
      sarviceId, 
      {isDeleted:true},
      {new : true }
    )
    if(!sarvice){
      throw new CustomError('Sarvice is not fount' , 404)
    }
    return sarvice ;
  }



  export const updateSarvice = async (serviceId,updateData) => {
  
    const sarvice = await Sarvice.findOneAndUpdate(
      { _id: serviceId, isDeleted: false},
      { $set: { ...updateData } },
      { new: true }
    );
    
    if(!sarvice){
      throw new Error('Sarvice is not fount' , 404)
    }
    return sarvice ;
  }
  
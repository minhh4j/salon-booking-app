import { asyncHandler } from "../middleware/asyncHandler.js";
import { addSarvice , getSarvicesService } from '../sarvieces/servicesSarvices.js';

export const addSarviceController = asyncHandler(async (req, res) => {
    const sarviceData = req.body;

    if (req.file && req.file.path) {
        sarviceData.image = req.file.path;
    } else {
        return res.status(400).json({
            success: false,
            message: "Image upload failed. Please include a valid image file.",
        });
    }

    const sarvice = await addSarvice(sarviceData);

    res.status(201).json({
        success: true,
        message: 'Sarvice added successfully',
        sarvice,
    });
});


export const getServiceController = asyncHandler(async (req,res) => {
    const {id} = req.params ;
    
    const {page = 1, limit = 10, name} = req.query;

    const { sarvice, total } = await getSarvicesService({id, name, page: parseInt(page), limit: parseInt(limit) });
    return res.status(200).json({
        success: true,
        sarvice: sarvice.length,
        total,
        page: Math.ceil(total / limit),
        currentPage: parseInt(page),
        sarvice,
    })
})



export const deleteServices = asyncHandler( async (req,res) => {
    const {sarviceId} = req.params ;

    const sarvice = await deleteServices(sarviceId)
    res.status(200).json({
        success:true,
        message:'Sarviece deleted successfully',
        
    })
})


export const updateSarvice = asyncHandler( async (req ,res) => {
    const {id} = req.params;
    const updateData = req.body;

    if(req.file){
        updateData.image = req.file.path;
    }

    const product = await updateSarvice( id , updateData );
    res.status(200).json({
        success:true,
        message:'Product updated successfully',
        product
    })
  
})
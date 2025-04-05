import { asyncHandler } from "../middleware/asyncHandler.js";
import { 
    addService, 
    getServicesService, 
    deleteService, 
    updateService 
} from "../services/serviceService.js";

export const addServiceController = asyncHandler(async (req, res) => {
    const serviceData = req.body;

    
    if (req.file && req.file.path) {
        serviceData.image = req.file.path;
    } else {
        return res.status(400).json({
            success: false,
            message: "Image upload failed. Please include a valid image file.",
        });
    }

    const service = await addService(serviceData);

    res.status(201).json({
        success: true,
        message: "Service added successfully",
        service,
    });
});

export const getServiceController = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { page = 1, limit = 10, name } = req.query;

    const { services, total } = await getServicesService({
        id,
        name,
        page: parseInt(page),
        limit: parseInt(limit),
    });

    return res.status(200).json({
        success: true,
        count: services.length,
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: parseInt(page),
        services,
    });
});

export const deleteServiceController = asyncHandler(async (req, res) => {
    const { serviceId } = req.params;

    const service = await deleteService(serviceId);
    
    if (!service) {
        return res.status(404).json({
            success: false,
            message: "Service not found",
        });
    }

    res.status(200).json({
        success: true,
        message: "Service deleted successfully",
    });
});




export const updateServiceController = asyncHandler(async (req, res) => {
    const { serviceId } = req.params; 
    const updateData = req.body;

    console.log(serviceId ,'id');
    console.log(req.body ,"hhhh");
    
    if (req.file && req.file.path) {
        updateData.image = req.file.path;
    }

    
    const service = await updateService(serviceId, updateData);

    if (!service) {
        return res.status(404).json({
            success: false,
            message: "Service not found",
        });
    }

    console.log(service , 'chek');
    console.log(updateData , 'updateData');
    
    
    res.status(200).json({
        success: true,
        message: "Service updated successfully",
        service,
    });
});


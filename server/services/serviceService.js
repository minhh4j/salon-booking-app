import mongoose from "mongoose";
import Service from "../models/serviceModel.js";

export const addService = async (serviceData) => {
    const existingService = await Service.findOne({ serviceName: serviceData.serviceName });

    if (existingService) {
        throw new Error("Service already exists");
    }

    const service = await Service.create(serviceData);
    return service;
};

export const getServicesService = async ({ id, name, page = 1, limit = 10 }) => {
    const skip = (page - 1) * limit;

    const match = { isDeleted: false };

    if (name) {
        match.serviceName = { $regex: name, $options: "i" };
    }

    if (id) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid ID format");
        }
        match._id = new mongoose.Types.ObjectId(id);
    }

    const pipeline = [
        { $match: match },
        { $sort: { createdAt: -1 } },
        { $skip: skip },
        { $limit: limit },
    ];

    const services = await Service.aggregate(pipeline);

    if (id && services.length === 0) {
        throw new Error("Service not found or is deleted");
    }

    const totalServices = await Service.countDocuments({ isDeleted: false, ...match });

    return { services, totalServices };
};

export const deleteService = async (serviceId) => {
    const service = await Service.findByIdAndUpdate(
        serviceId, 
        { isDeleted: true },
        { new: true }
    );

    if (!service) {
        throw new Error("Service not found");
    }

    return service;
};

export const updateService = async (serviceId, updateData) => {
    if (!mongoose.Types.ObjectId.isValid(serviceId)) {
        throw new Error("Invalid service ID format");
    }
    
    const service = await Service.findByIdAndUpdate(
        serviceId,
        { $set: { ...updateData } },
        { new: true }
    );
console.log(service);

    return service;
};

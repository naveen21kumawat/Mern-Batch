import turfModel from "../models/turfModel.js";

// Add new turf
export const addTurf = async (req, res) => {
    try {
        const { name, openingTime, closingTime, pricePerHour, address, ownerId } = req.body;
        const image = req.file ? req.file.filename : ''; // Get uploaded image filename

      
        if (!name || !openingTime || !closingTime || !pricePerHour || !address || !ownerId) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // Parse address if it's a string
        const addressData = typeof address === 'string' ? JSON.parse(address) : address;

     
        if (!addressData.street || !addressData.city || !addressData.state || !addressData.zipCode) {
            return res.status(400).json({
                message: "Complete address is required"
            });
        }
   
        const turf = await turfModel.create({
            name,
            openingTime,
            closingTime,
            pricePerHour,
            address: addressData,
            ownerId,
            image
        });

        res.status(201).json({
            message: "Turf added successfully",
            turf
        });
    } catch (error) {
        console.error("Add turf error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Get all turfs
export const getAllTurfs = async (req, res) => {
    try {
        const turfs = await turfModel.find().populate('ownerId', 'name email');
        
        res.status(200).json({
            message: "Turfs fetched successfully",
            turfs
        });
    } catch (error) {
        console.error("Get all turfs error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};


export const getTurfsByOwner = async (req, res) => {
    try {
        const { ownerId } = req.params;
        console.log("ownerId", ownerId)

        // Validate ownerId
        if (!ownerId || ownerId === 'undefined') {
            return res.status(400).json({
                message: "Valid Owner ID is required"
            });
        }
        console.log("ownerId", ownerId)

        const turfs = await turfModel.find({ ownerId });

        console.log("turfs", turfs)
        res.status(200).json({
            message: "Turfs fetched successfully",
            turfs
        });
    } catch (error) {
        console.error("Get turfs by owner error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Get single turf by ID
export const getTurfById = async (req, res) => {
    try {
        const { id } = req.params;

        const turf = await turfModel.findById(id).populate('ownerId', 'name email');

        if (!turf) {
            return res.status(404).json({
                message: "Turf not found"
            });
        }

        res.status(200).json({
            message: "Turf fetched successfully",
            turf
        });
    } catch (error) {
        console.error("Get turf by ID error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Update turf
export const updateTurf = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const turf = await turfModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!turf) {
            return res.status(404).json({
                message: "Turf not found"
            });
        }

        res.status(200).json({
            message: "Turf updated successfully",
            turf
        });
    } catch (error) {
        console.error("Update turf error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

// Delete turf
export const deleteTurf = async (req, res) => {
    try {
        const { id } = req.params;

        const turf = await turfModel.findByIdAndDelete(id);

        if (!turf) {
            return res.status(404).json({
                message: "Turf not found"
            });
        }

        res.status(200).json({
            message: "Turf deleted successfully"
        });
    } catch (error) {
        console.error("Delete turf error:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};

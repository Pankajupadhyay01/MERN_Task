import Help_Center from "../model/data.js";

export const createCard = async (req, res) => {
    try {
        const { title, description, link } = req.body;

        const isExist = await Help_Center.findOne({ title });
        if (isExist) {
            return res.status(400).json({
                success: false,
                message: `Card already exists with ${title} title`
            })
        }
        await Help_Center.create({ title, description, link });

        return res.status(201).json({
            success: true,
            message: "Card created successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred",
            error: error.message
        });
    }
}

export const getCards = async (req, res) => {
    try {
        const cards = await Help_Center.find();
        return res.status(200).json({
            success: true,
            data: cards
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred",
            error: error.message
        });
    }
}


export const getIndividualCard = async (req, res) => {
    try {
        const { title } = req.params;
        const card = await Help_Center.findOne({ title });

        if (!card) {
            return res.status(404).json({
                success: false,
                message: `Card not found with ${title} title`
            })
        }

        return res.status(200).json({
            success: true,
            data: card
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred",
            error: error.message
        });
    }
}
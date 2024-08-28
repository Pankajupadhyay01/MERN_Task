import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the title"]
    },
    description: {
        type: String,
        required: [true, "Please enter the description"]
    },
    link: {
        type: String,
        validate: {
            validator: function (v) {
                return v ? /^https?:\/\//.test(v) : true;
            },
            message: props => `${props.value} is not a valid URL!`
        },
        required: [true, "Please enter the link"]
    }
})

const Help_Center = mongoose.model("Help_Center", Schema)

export default Help_Center
const mongoose = require("mongoose")

const listingSchema = new mongoose.Schema({
    title: {
        type : String,
        required: true
    },
    description: {
        type : String
    },
    image: {
        type : String,
        default: "https://unsplash.com/photos/a-sandy-beach-covered-in-lots-of-water-hNOIblybufc",
        set: (v) => 
            v === "" 
            ? "https://unsplash.com/photos/a-sandy-beach-covered-in-lots-of-water-hNOIblybufc" 
            : v,
    },
    price: {
        type : Number
    },
    location: {
        type : String
    },
    country: {
        type : String
    }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
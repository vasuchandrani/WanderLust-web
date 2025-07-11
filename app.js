const express = require("express")
const app = express();

const Listing = require("./models/listing.js");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const ejsMate = require("ejs-mate")
app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "/public")))

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/wanderlust")
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })
    
app.listen(8080, () => {
    console.log("Server is running on port 8080");
})

//ROUTES
app.get("/", (req, res) => {
    res.send("Major Project");
})

// GET all listings
app.get("/listing", async (req, res) => {
    
    let allListings = await Listing.find();

    res.render("listings/index.ejs", { allListings })
})

// GET create form
app.get("/listing/new", (req, res) => {  
    res.render("listings/new.ejs");
})

app.use(express.urlencoded({ extended: true }));
// POST a New Listing 
app.post("/listing", async (req, res) => {

    const newListing = new Listing(req.body.listing);

    await newListing.save();

    res.redirect("/listing")

    // console.log(req.body);
})  

// GET a perticular show 
app.use(express.urlencoded( { extended : true } ));
app.get("/listing/:id", async (req, res) => {

    let { id } = req.params;

    const listing = await Listing.findById(id);

    res.render("listings/show.ejs", { listing });

})

// GET edit form
app.get("/listing/:id/edit", async (req, res) => {
   
    let { id } = req.params;
    let listing = await Listing.findById(id);

    res.render("listings/edit.ejs", { listing });
})

const methodOverride = require("method-override")
app.use(methodOverride("_method"));

// PUT 
app.put("/listing/:id", async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndUpdate(id, {...req.body.listing});
    
    res.redirect(`/listing/${id}`);
})

app.delete("/listing/:id", async (req, res) => {

    let { id } = req.params;
    
    let deletedListing = await Listing.findByIdAndDelete(id);

    console.log(deletedListing);
    res.redirect("/listing");
})

// app.get("/testListing", async (req, res) => {
//     const sample = await Listing.create({
//         title: "My New Villa",
//         description: "By the beach",
//         price: 1200,
//         location: "Goa",
//         country: "India"
//     });

//     res.send("Sample added");
// });
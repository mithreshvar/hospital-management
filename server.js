require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors");
const path = require("path");
const waitingListRoutes = require("./routes/waitingList");
const patientProfilesRoutes = require("./routes/patientProfile");
const userRoutes = require('./routes/user');
const prescriptionRoutes = require('./routes/prescription');
const historyLogRoutes = require('./routes/historyLog');


const app = express();
const port = process.env.PORT;

// middlewares
app.use(cors());
app.use(express.json());


// Pick up React index.html file
app.use(
    express.static(path.join(__dirname, "./client/build"))
);


// routes
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
app.use("/api/waitingList", waitingListRoutes);
app.use("/api/patientProfiles", patientProfilesRoutes);
app.use('/api/user', userRoutes);
app.use('/api/prescription', prescriptionRoutes);
app.use('/api/historyLog', historyLogRoutes);

// Catch all requests that don't match any route
app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "./client/build/index.html")
    );
});


// connect to db
mongoose.connect(process.env.ATLAS_URI)
    .then(() => {
        // listen to port
        app.listen(port, () => {
            console.log("connected to database && Server running on port: ", port);
        });
    })
    .catch((error) => {
        console.log(error);
    })

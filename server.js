const express = require("express");
const connectDB = require("./config/connectDB");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");
const ownerRoute = require("./routes/ownerRoute");
const vetRoute = require("./routes/vetRoute");
const petRoute = require('./routes/petRoute')
//environement
require("dotenv").config({ path: "./config/.env" });

//app
const app = express();

//db Connect
connectDB();

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api", ownerRoute);
app.use("/api/vet", vetRoute);
app.use("/api/pet", petRoute);
//cors
// if (process.env.NODE_ENVIRONMENT === "dev") {
//   app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// }

//port
port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
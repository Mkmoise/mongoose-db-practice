require("dotenv").config();
const espress = require("express");
const mongoose = require("mongoose");
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.user(express.json());

//simple request logger
app.use((req, res, next) => {
  console.log('${req.method} ${req.url}');
  next();
});

//connect to mongodb atlas
mongoose
  .connect(process.env.MONGODB_URL)
  .then (() => {
    console.log( "Connected to MongoDB Atlas" );
  })
  .catch ((error) => {
    console.error( "MongoDB connection error" );
  });

//routes
app.get("/", (req, res) => {
  res.json({ message: "CommunityHub Api is running"});
});
app.use("/api/post", postRoutes);

//404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});
app.listen(PORT, () => {
  console.log('Server running on http://localhost:${PORT}');
});

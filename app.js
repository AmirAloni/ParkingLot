const express = require("express");
const connectDB = require("./config/db");

const app = express();

app.use(express.json());

// Connect Database
connectDB();

app.use("/api/park", require("./routes/api/park"));
app.use("/api/decisions", require("./routes/api/decisions"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

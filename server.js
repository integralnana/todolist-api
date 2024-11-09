const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const todosRoutes = require("./routes/todos");

const app = express();
app.use(
  cors({
    origin: "https://todolist-frontend-ashen-theta.vercel.app",
    credentials: true
  })
);
app.use(bodyParser.json());

app.use("/api/todos", todosRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});

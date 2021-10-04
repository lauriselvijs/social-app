const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");

const { sequelize } = require("./models");

dotenv.config({ path: "./config/config.env" });

const posts = require("./routes/api/posts");
const users = require("./routes/api/users");
const auth = require("./routes/api/auth");

const app = express();

app.use(express.json());

app.use("/api/posts", posts);
app.use("/api/users", users);
app.use("/api/auth", auth);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, async (res) => {
  console.log(
    colors.yellow.bold(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );

  try {
    await sequelize.authenticate();

    console.log(colors.green.bold("Database Connected!"));
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to connect" });
  }
});

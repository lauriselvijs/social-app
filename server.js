const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const { sequelize, User, Post } = require("./models");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();

    return res.json(users);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid },
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

app.post("/users", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const user = await User.create({ first_name, last_name, email, password });

    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.post("/posts", async (req, res) => {
  const { userUuid, body, category } = req.body;

  try {
    const user = await User.findOne({ where: { uuid: userUuid } });
    const post = await Post.create({ body, category, userId: user.id });

    return res.json(post);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
  try {
    await sequelize.authenticate();
    console.log("Database Connected!");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Failed to connect" });
  }
});

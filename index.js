const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys.js");
require("./models/User");
require("./services/passport");

// Database Connection
const connectDB = async () => {
  try {
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};

connectDB();

const app = express();

// Cookies
app.use(
  cookieSession({
    maxAge: 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/authRoutes")(app);
require("./routes/recipeRoutes")(app);

// Server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});

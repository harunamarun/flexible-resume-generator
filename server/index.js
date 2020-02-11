const config = require("./config");

const knex = require("knex")(config.db);
const models = require("./models")(knex);

const apiRouter = require("./controllers")(models);

const morgan = require("morgan"); // a popular library for logging your requests

const bodyParser = require("body-parser"); // a middleware plugin to enable express to parse JSON

// and of course, an express server =)
const express = require("express");

const app = express();

//auth
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");

app.use(passport.initialize());
passport.use(
  new LocalStrategy(function(username, password, done) {
    //   if (なんらかのエラー) {
    //     return done(エラー内容);
    // }
    // else if (失敗) {
    //     return done(null, false);
    // }
    // else if (成功) {
    //     return done(null, username);
    // }
    console.log("called LocalStrategy");
    return done(null, { hoge: "hoge", fuga: "fuga" });
  })
);
app.get("/login", function(req, res) {
  res.sendFile(`${__dirname}/login.html`);
});
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/login", passport.authenticate("local"), function(req, res) {
  // 認証成功するとここが実行される
  console.log("認証成功！！！！！");
  res.redirect("/");
});

app.use(
  session({
    secret: "○○"
  })
);
app.use(passport.session());

passport.serializeUser(function(user, done) {
  console.log("user", user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
/**
 ********************************SERVER SETUP********************************
 ****************************************************************************
 */
// 1. log every request when it comes in
app.use(morgan("dev"));

// 2. Parse request bodies as json
app.use(bodyParser.json({ type: "application/json", limit: "50mb" }));

// 3. If the requests begin with '/api', hand them off to the API router
app.use("/api", apiRouter);
app.use(express.static(`${__dirname}/../build/`));

app.use((err, req, res, next) => {
  if (err.stack) {
    if (err.stack.match("node_modules/body-parser"))
      return res.status(400).send("Invalid JSON");
  }

  console.log(err);
  return res.status(500).send("Internal Error.");
});

/**
 ********************************START SERVER********************************
 ****************************************************************************
 */

app.listen(config.express.port, () => {
  console.log(`Server up and listening on port ${config.express.port}`);
});

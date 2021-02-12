// Import server config
// Config listen port

const app = require("./config/app");
const Environment = require("./config/Environments/Environments");

app.listen(Environment.port);
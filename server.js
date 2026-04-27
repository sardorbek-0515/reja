const http = require("http");

const mongodb = require("mongodb");

let db;
const connectionString =
  "mongodb+srv://<username>:no17fZi6eDPpOz1E@atlas-sql-69edc361a25dbc03594f60e6-cb4xgu.a.query.mongodb.net/Reja?retryWrites=true&w=majority";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("ERROR  MongoDB ULANMADI");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`,
        );
      });
    }
  },
);

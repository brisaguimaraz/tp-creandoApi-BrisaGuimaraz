const express = require("express");
const methodOverride = require("method-override");
const paginate = require("express-paginate");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(paginate.middleware(8, 50));
app.use(methodOverride("_method"));
//rutas de las APIs
app.use("/api/v1/movies", require("./routes/v1/movies.routes"));
app.use("/api/v1/genres", require("./routes/v1/genres.routes"));
app.listen("3001", () => console.log("Servidor corriendo en el puerto 3001"));

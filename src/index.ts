import express, { Request, Response }  from "express";
import cors from "cors";

// Debemos tener instalado 'npm install dotenv --save'
// y con un archivo .env definir las variables de entorno
// para la conexion a la DB y en prod utilizamos sockets

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); //se supone que esto en produccion no se haria
  //console.log(process.env.DB_HOST)
}

console.log("Front URL ", process.env.FRONT_URL);

const app = express();

var corsOptions = {
  origin: process.env.FRONT_URL,
  credentials: true 
};

app.use(cors(corsOptions));

// Parse requests of content-type: application/json & application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log('Sequelize enabled...')
// Sequelize
const db = require("./models");
db.sequelize.sync({ logging: console.log });

const PORT = process.env.PORT || 3000;

app.use('/api/users', require('./routes/UsersRoutes'));

app.get("/", (req: Request, res: Response) => {
  res.send("hello putitos!");
});

app.listen(PORT, () => {
  console.log(`server is listening on ${PORT}`);
});

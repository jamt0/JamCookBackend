import 'module-alias/register';
import { Request, Response }  from "express";
import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import routes from 'routes';
import sequelize from "models";

//puerto
const PORT = process.env.PORT || 3000;

//variables de entorno para desarrollo
if ( process.env.NODE_ENV !== 'production' ) {
  require('dotenv').config();
}

//url front
console.log("Front URL ", process.env.FRONT_URL);

//app
const app = express();

//Parseo de hearder y body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
var corsOptions = {
  //origin: process.env.FRONT_URL, hay que investigar mas de este tema
  credentials: true 
};
app.use(cors(corsOptions));

//herlmet
app.use(helmet());

//fileUpload
app.use(fileUpload());

//Static public file
app.use(express.static(path.join(__dirname, '../public')));

//sequelize sync
console.log('Sequelize enabled...')
sequelize.sync({ logging: console.log });

//routes
app.use('/', routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Jamcook's API!");
});

//listen port
app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});

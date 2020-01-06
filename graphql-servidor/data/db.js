"use strict";
import mongoose from "mongoose";
import config from "./config";

mongoose.Promise = global.Promise;
mongoose
  .connect(config.database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conexion MongoDB exitosa..!!");
  })
  .catch(err => console.log(err));

const clienteSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  empresa: String,
  email: String,
  edad: Number,
  tipo: String,
  pedidos: Array
});

const Cliente = mongoose.model("cliente", clienteSchema);

export { Cliente };

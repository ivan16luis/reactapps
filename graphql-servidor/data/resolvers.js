"use strinct";
import { Cliente } from "./db";

export const resolvers = {
  Query: {
    getClientesLimit: (root, { limit }) => {
      return new Promise((resolve, object) => {
        Cliente.find({}, (error, result) => {
          if (error) rejects(error);
          else resolve(result);
        }).limit(limit);
      });
    },
    getCliente: (root, { id }) => {
      return new Promise((resolve, object) => {
        Cliente.findById(id, (error, result) => {
          if (error) rejects(error);
          else resolve(result);
        });
      });
    },
    getClientes: root => {
      return new Promise((resolve, object) => {
        Cliente.find({}, (error, result) => {
          if (error) rejects(error);
          else resolve(result);
        });
      });
    }
  },
  Mutation: {
    crearCliente: (root, { input }) => {
      const insertCliente = new Cliente();
      insertCliente.nombre = input.nombre;
      insertCliente.apellido = input.apellido;
      insertCliente.empresa = input.empresa;
      insertCliente.email = input.email;
      insertCliente.edad = input.edad;
      insertCliente.tipo = input.tipo;
      insertCliente.pedidos = input.pedidos;
      insertCliente.id = insertCliente._id;
      return new Promise((resolve, object) => {
        insertCliente.save(error => {
          if (error) rejects(error);
          else resolve(insertCliente);
        });
      });
    },
    actualizarCliente: (root, { input }) => {
      const id = input.id;
      return new Promise((resolve, object) => {
        Cliente.findByIdAndUpdate(id, input, { new: true }, (error, result) => {
          if (error) rejects(error);
          else resolve(result);
        });
      });
    },
    eliminarCliente: (root, { input }) => {
      const id = input.id;
      return new Promise((resolve, object) => {
        Cliente.findByIdAndRemove(id, (error, result) => {
          if (error) rejects(error);
          else resolve(result);
        });
      });
    }
  }
};

import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);
/**
 * GET -> Buscar
 * POST -> Salvar
 * PUT -> Alterar
 * DELETE -> Deletar
 * PATCH -> Alteração Específica
 */

 // http://localhost:3333/users

//  app.get("/", (request, response) => {
//     //  return response.send("Hello World - NLW04");
//     return response.json({ message: "Hello World - NLW04"})
//  });

//  // 1º param ->   Rota(Recurso API)
//  // 2º param -> request, response
//  app.post("/", (request, response) => {
//     // Recebeu os dados para salvar
//     return response.json({message: "Os dados foram salvos com sucesso!"});
//  });

app.listen(3333, () => console.log("Server is running!"));


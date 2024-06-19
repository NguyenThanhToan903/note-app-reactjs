import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";
import fakeData from "./fakeData.js";

const app = express();
const httpServer = http.createServer(app);

const typeDefs = `#graphql
  type Folder {
    id: ID,
    name: String,
    createdAt: String,
    author: Author
  }

  type Author {
    id: String, 
    name: String,
  }

  type Query {
    folders: [Folder],
    folder(folderId: String): Folder
  }
`;

const resolvers = {
  Query: {
    folders: () => {
      return fakeData.folders;
    },
    folder: (parent, args) => {
      // Fixed this resolver name
      const folderId = args.folderId;
      console.log({ folderId });
      return fakeData.folders.find((folder) => folder.id === folderId);
    },
  },

  Folder: {
    author: (parent, args) => {
      console.log({ parent, args });
      const authorId = parent.authorId;
      return fakeData.authors.find((author) => author.id === authorId);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));

console.log(`🚀 Server ready at http://127.0.0.1:4000`);

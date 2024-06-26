import { graphQLRequest } from "./request.js";

export const folderLoader = async () => {
  const query = `query Folders {
    folders {
      id
      name
      createdAt
    }
  }`;

  const data = await graphQLRequest({ query });

  return data;
};

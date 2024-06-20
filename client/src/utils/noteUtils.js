export const notesLoader = async ({ params: { folderId } }) => {
  console.log("loader", { folderId });
  const query = `query Folder($folderId: String) {
      folder(folderId: $folderId) {
        id
        name
        notes {
          content
          id
        }
      }
    }`;

  const data = await graphQLRequest({
    query,
    variables: {
      folderId,
    },
  });

  return data;
  // const res = await fetch("http://127.0.0.1:4000/graphql", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify({
  //     query,

  //   }),
  // });
  // const { data } = await res.json();
  // console.log("[Note List]", { data });
  // return data;
};

export const noteLoader = async ({ params: { noteId } }) => {
  console.log("loader", { noteId });
  const query = `query Folder($noteId: String) {
    note(noteId: $noteId) {
      content
      id
    }
  }`;
  const res = await fetch("http://127.0.0.1:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: {
        noteId,
      },
    }),
  });
  const { data } = await res.json();
  console.log("[Note List123]", { data });
  return data;
};

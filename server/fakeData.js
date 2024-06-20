export default {
  authors: [
    {
      id: 123,
      name: "Author 1",
    },
  ],
  folders: [
    {
      id: "1",
      name: "Home",
      createdAt: "2024-05-02",
      authorId: 123,
    },
    {
      id: "2",
      name: "New Folder",
      createdAt: "2024-05-03",
      authorId: 123,
    },
    {
      id: "3",
      name: "Work",
      createdAt: "2024-05-04",
      authorId: 1,
    },
  ],
  notes: [
    { id: "123", content: "<p>Go to park</p>", folderId: "1" },
    { id: "1234", content: "<p>Go to school</p>", folderId: "2" },
    { id: "1235", content: "<p>Go to supermarket</p>", folderId: "1" },
  ],
};

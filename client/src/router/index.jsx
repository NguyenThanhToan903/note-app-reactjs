import { createBrowserRouter, Outlet } from "react-router-dom";
import NoteList from "../components/NoteList.jsx";
import AuthProvider from "../context/AuthProvider.jsx";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Note from "../components/Note";
import ProtectedRoute from "./ProtectedRoute.jsx";
const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
            children: [
              {
                element: <NoteList />,
                path: `folders/:folderId`,
                children: [
                  {
                    element: <Note />,
                    path: `notes/:noteId`,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]);
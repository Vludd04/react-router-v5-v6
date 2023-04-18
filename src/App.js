import React from "react";
import { Link, Navigate, useParams, useRoutes } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <h1>App Layout</h1>
      <Link to="/users">Users List Page</Link>
      <h1>MainPage</h1>
    </>
  );
};

const UsersListPage = () => {
  const users = ["0", "1", "2", "3", "4"];
  return (
    <>
      <h1>App Layout</h1>
      <Link to="/users">Users List Page</Link>
      <h1>Users Layout</h1>
      <Link to="/">Main Page</Link>
      <h1>Users List Page</h1>
      <ul>
        {users.map((index) => {
          return (
            <li key={index}>
              <Link to={`/users/${index}/profile`}>User {index}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const UserPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>App Layout</h1>
      <Link to="/users">Users List Page</Link>
      <h1>Users Layout</h1>
      <Link to="/">Main Page</Link>
      <h1>User Page</h1>
      <ul>
        <li>
          <Link to={`/users`}>Users List Page</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}>Edit This User</Link>
        </li>
      </ul>
      <p>User Id: {userId}</p>
    </>
  );
};

const UserEditPage = () => {
  const { userId } = useParams();
  return (
    <>
      <h1>App Layout</h1>
      <Link to="/users">Users List Page</Link>
      <h1>Users Layout</h1>
      <Link to="/">Main Page</Link>
      <h1>Edit User Page</h1>
      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}>User Profile Page</Link>
        </li>
        <li>
          <Link to={`/users/${+userId + 1}/profile`}>Another User</Link>
        </li>
        <li>
          <Link to="/users">Users List Page</Link>
        </li>
      </ul>
    </>
  );
};

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "users",
    children: [
      {
        path: "",
        element: <UsersListPage />,
      },
      {
        path: ":userId",
        element: <Navigate to="profile" />,
      },
      {
        path: ":userId/profile",
        element: <UserPage />,
      },
      {
        path: ":userId/edit",
        element: <UserEditPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];

function App() {
  const elements = useRoutes(routes);
  return elements;
}

export default App;

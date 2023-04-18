import React from "react";
import { Link, Redirect, Route, Switch, useParams } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/users/:userId?/:page?" component={UsersLayout} />
      <Route exact path="/" component={HomePage} />
      <Redirect to="/" />
    </Switch>
  );
};

export default App;

const HomePage = () => {
  return (
    <>
      <h1>App Layout</h1>
      <Link to="/users">Users List Page</Link>
      <h1>MainPage</h1>
    </>
  );
};

const UsersLayout = () => {
  const { userId, page } = useParams();

  if (userId && page === "profile") {
    return <UserPage />;
  }

  if (userId && page === "edit") {
    return <UserEditPage />;
  }

  if (!userId) {
    return <UsersListPage />;
  }
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

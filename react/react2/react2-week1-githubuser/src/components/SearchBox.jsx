import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import "./style.css";

function SearchBox() {
  const { isLoading, fetchError, userList, handleSearchTextChanged } =
    useContext(UserContext);
  //console.log(isLoading);
  const users =
    userList.length > 0
      ? userList.map((user) => <li key={user.id}>{user.login}</li>)
      : "No results";
  return (
    <div>
      <input type="text" onChange={handleSearchTextChanged} />
      {fetchError && <p className="error-message"> Error: {fetchError}</p>}
      {isLoading && <p>Loading....</p>}
      {!fetchError && !isLoading && <ul>{users}</ul>}
    </div>
  );
}

export default SearchBox;

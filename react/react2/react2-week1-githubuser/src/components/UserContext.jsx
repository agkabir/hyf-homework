import React, { createContext, useState, useEffect, useMemo } from "react";
import DebounceText from "./DebounceText";
const api_url = "https://api.github.com/search/users?q=";
const UserContext = createContext();

function UserContextProvider({ children }) {
  const [searchText, setSearchText] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [userList, setUserList] = useState([]);

  const debouncedSearch = DebounceText(searchText, 500);

  const handleSearchTextChanged = React.useCallback((e) => {
    setSearchText(e.target.value);
  }, []);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(api_url + debouncedSearch);
        if (!response.ok) throw Error("Did not receive expected data!");
        const result = await response.json();
        setUserList(result.items);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    //(async () => await fetchUsers())();
    if (debouncedSearch) fetchUsers();
    else setUserList([]);
  }, [debouncedSearch]);

  const contextValue = useMemo(() => {
    return {
      isLoading,
      fetchError,
      userList,
      handleSearchTextChanged,
    };
  }, [isLoading, fetchError, userList, handleSearchTextChanged]);

  return (
    <div>
      <UserContext.Provider value={contextValue}>
        {children}
      </UserContext.Provider>
    </div>
  );
}
export { UserContext, UserContextProvider };

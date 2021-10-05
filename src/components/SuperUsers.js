import axios from "axios";
import React, { useEffect, useState } from "react";

const Superheroes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUsers(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>Super Users</h2>
        {users.map((user) => {
          return <p key={user.id}>{user.name}</p>;
        })}
      </div>
    </>
  );
};

export default Superheroes;

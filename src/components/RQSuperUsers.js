import React from "react";

import axios from "axios";
import { useQuery } from "react-query";

const fetchQuery = () => {
  return axios.get("https://jsonplaceholder.typicode.com/users");
};

const RQSuperheroes = () => {
  const { isLoading, data } = useQuery("super-heroes", fetchQuery);

  if (isLoading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h2>React Query Super Users</h2>
        {data?.data.map((user) => {
          return <p key={user.id}>{user.username}</p>;
        })}
      </div>
    </>
  );
};

export default RQSuperheroes;

import React, { useEffect, useState } from "react";
import "./styles.scss";

const Rankings = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await fetch(`${process.env.REACT_APP_API_ENDPOINT + "/"}`);
      const response = await data.json();
      setUsers(response);
      setIsLoading(false);
    };
    fetchUsers().catch((error) => {
      setErrorMsg("Failed to load.");
      setIsLoading(false);
      console.log(error);
    });
  }, []);

  return (
    <div className="Rankings">
      <h1>Rankings</h1>
      {isLoading ? (
        <div className="RanksLoading">
          <span>Loading users</span>
        </div>
      ) : errorMsg ? (
        <div className="ErrorMsg">{errorMsg}</div>
      ) : (
        <table className="RankingsTable table table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Detections</th>
              <th scope="col">Joined</th>
            </tr>
          </thead>
          <tbody>
            {users
              .sort((a, b) => {
                return b.entries - a.entries;
              })
              .map((user, index) => {
                const { name, email, entries, joined, id } = user;
                const date = new Date(joined);
                return (
                  <tr key={id}>
                    <th scope="row">{index + 1}</th>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{entries}</td>
                    <td>{date.toLocaleDateString()}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Rankings;

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function User() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      setUsers(null);
      setError(null);
      setLoading(true);
      const response = await axios.get("/api/users");
      console.log(response.data);
      setUsers(response.data);
    } catch (e) {
      console.log(e.response.status);
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러 발생!</div>;
  if (!users) return null;

  return (
    <>
      <ul>
        {users &&
          users.users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.email})
            </li>
          ))}
      </ul>
      <button onClick={getUsers}>다시 호출</button>
    </>
  );
}

"use client";

import { createUserOnAPI, getUsersFromAPI } from "@/app/services/users";
import { IUser } from "@/app/types/user";
import { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    async function fetchPosts() {
      try {
        const usersData = await getUsersFromAPI();
        setUsers(usersData);
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      }
    }

    fetchPosts();
  }, []);

  const handleCreateUser = async () => {
    try {
      const newUser = {
        fullName,
        email,
        phoneNumber,
        gender,
      };
      await createUserOnAPI(newUser);

      const updatedUsers = await getUsersFromAPI();
      setUsers(updatedUsers);
    } catch (error) {
      console.error("Failed to create post:", error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <div>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Enter full name"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        />
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter phone number"
        />
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Enter gender"
        />
        <button onClick={handleCreateUser}>Create User</button>
      </div>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

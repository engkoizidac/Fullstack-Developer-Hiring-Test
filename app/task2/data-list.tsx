"use client";

import { useState } from "react";

// Sample user data
const users = [
  { id: 1, name: "John Smith", email: "john@example.com", role: "Developer" },
  {
    id: 2,
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "Designer",
  },
  { id: 3, name: "Mike Wilson", email: "mike@example.com", role: "Manager" },
  { id: 4, name: "Emma Davis", email: "emma@example.com", role: "Developer" },
  { id: 5, name: "Tom Brown", email: "tom@example.com", role: "Designer" },
];

export default function UserList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Search users by name or email
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-xl  p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
      />
      {filteredUsers.length > 0 ? (
        <ul className="space-y-2">
          {filteredUsers.map((user) => (
            <li key={user.id} className="p-4 border-b border-gray-700">
              <div className="font-semibold">{user.name}</div>
              <div className="text-sm text-fuchsia-800">{user.email}</div>
              <div className="text-xs text-amber-600">{user.role}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 mt-4">No results found</div>
      )}
    </div>
  );
}

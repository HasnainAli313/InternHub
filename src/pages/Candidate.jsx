

import React, { useState } from "react";

function Candidates() {
  const [candidates, setCandidates] = useState([
    {
      name: "Hasnain Ali",
      email: "aliorakzai407@gmail.com",
      role: "Frontend Developer",
      status: "Active",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    status: "Pending",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddCandidate = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.role && formData.status) {
      setCandidates([...candidates, formData]);
      setFormData({ name: "", email: "", role: "", status: "Pending" });
    }
  };

  const filteredCandidates = candidates.filter((candidate) =>
    Object.values(candidate)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const getStatusStyle = (status) => {
    switch (status.toLowerCase()) {
      case "active":
        return "bg-green-200 text-green-800";
      case "pending":
        return "bg-yellow-200 text-yellow-800";
      case "rejected":
        return "bg-red-200 text-red-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  return (
    <section className="min-h-screen p-6 border">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-2xl font-semibold">Candidate Details</h2>
      </div>

      <input
        type="text"
        placeholder="Search by name, email, role, or status..."
        className="border p-2 w-full mb-4 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <table className="w-full border mb-8">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map((c, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 border">{c.name}</td>
              <td className="p-2 border">{c.email}</td>
              <td className="p-2 border">{c.role}</td>
              <td className="p-2 border">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle(
                    c.status
                  )}`}
                >
                  {c.status}
                </span>
              </td>
            </tr>
          ))}
          {filteredCandidates.length === 0 && (
            <tr>
              <td colSpan={4} className="text-center py-4">
                No matching candidates found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <form
        onSubmit={handleAddCandidate}
        className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border p-2 rounded"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border p-2 rounded"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          className="border p-2 rounded"
          value={formData.role}
          onChange={handleInputChange}
          required
        />
        <select
          name="status"
          className="border p-2 rounded"
          value={formData.status}
          onChange={handleInputChange}
          required
        >
          <option value="Active">Active</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>

        <button
          type="submit"
          className="md:col-span-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Candidate
        </button>
      </form>

     
    </section>
  );
}

export default Candidates;

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
        return "bg-green-500 text-white";
      case "pending":
        return "bg-yellow-400 text-black";
      case "rejected":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold border-b border-gray-700 pb-2">
          Candidate Details
        </h2>
      </div>

      <input
        type="text"
        placeholder="Search by name, email, role, or status..."
        className="bg-gray-800 border border-gray-700 text-white p-2 w-full mb-6 rounded focus:outline-none focus:ring focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="overflow-x-auto">
        <table className="w-full text-left border border-gray-700 bg-gray-800 rounded overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="p-3 border border-gray-700">Name</th>
              <th className="p-3 border border-gray-700">Email</th>
              <th className="p-3 border border-gray-700">Role</th>
              <th className="p-3 border border-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((c, i) => (
              <tr key={i} className="border-t border-gray-700 hover:bg-gray-700">
                <td className="p-3 border border-gray-700">{c.name}</td>
                <td className="p-3 border border-gray-700">{c.email}</td>
                <td className="p-3 border border-gray-700">{c.role}</td>
                <td className="p-3 border border-gray-700">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusStyle(
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
                <td colSpan={4} className="text-center py-4 text-gray-300">
                  No matching candidates found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <form
        onSubmit={handleAddCandidate}
        className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-800 p-6 rounded shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-400"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-400"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="role"
          placeholder="Role"
          className="p-2 bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-400"
          value={formData.role}
          onChange={handleInputChange}
          required
        />
        <select
          name="status"
          className="p-2 bg-gray-700 text-white rounded focus:outline-none"
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
          className="md:col-span-4 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
        >
          Add Candidate
        </button>
      </form>
    </section>
  );
}

export default Candidates;

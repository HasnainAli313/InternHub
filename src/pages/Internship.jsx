import React, { useState } from 'react';

function Internship() {
  const [internships, setInternships] = useState([
    { title: 'MERN Stack', department: 'CS', duration: '6 Weeks', stipend: '8000 Rs', status: 'Open' },
    { title: 'Data Science', department: 'DS', duration: '6 Weeks', stipend: '8000 Rs', status: 'Open' },
    { title: 'Cyber Security', department: 'CS', duration: '6 Weeks', stipend: '8000 Rs', status: 'Closed' },
    { title: 'Flutter Developer', department: 'CS', duration: '6 Weeks', stipend: '8000 Rs', status: 'Closed' },
    { title: 'Android Developer', department: 'CS', duration: '6 Weeks', stipend: '8000 Rs', status: 'Open' },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    department: '',
    duration: '',
    stipend: '',
    status: 'Open',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInternships(prev => [...prev, formData]);
    setFormData({
      title: '',
      department: '',
      duration: '',
      stipend: '',
      status: 'Open',
    });
  };

  return (
    <section className='bg-gray-900 min-h-screen text-white p-6'>
      <h1 className='text-3xl font-bold mb-6 border-b border-gray-700 pb-2'>Internship Opportunities</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className='bg-gray-800 p-6 rounded-lg shadow-md max-w-4xl mx-auto mb-12 flex flex-wrap gap-4 justify-center'
      >
        <input
          type='text'
          name='title'
          placeholder='Title'
          value={formData.title}
          onChange={handleChange}
          className='p-2 w-[30%] bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-400'
          required
        />
        <input
          type='text'
          name='department'
          placeholder='Department'
          value={formData.department}
          onChange={handleChange}
          className='p-2 w-[30%] bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-400'
          required
        />
        <input
          type='text'
          name='duration'
          placeholder='Duration'
          value={formData.duration}
          onChange={handleChange}
          className='p-2 w-[30%] bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-400'
          required
        />
        <input
          type='text'
          name='stipend'
          placeholder='Stipend'
          value={formData.stipend}
          onChange={handleChange}
          className='p-2 w-[30%] bg-gray-700 text-white rounded focus:outline-none focus:ring focus:ring-blue-400'
          required
        />
        <select
          name='status'
          value={formData.status}
          onChange={handleChange}
          className='p-2 w-[30%] bg-gray-700 text-white rounded focus:outline-none'
        >
          <option value='Open'>Open</option>
          <option value='Closed'>Closed</option>
        </select>
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded transition'
        >
          Add Internship
        </button>
      </form>

      {/* Internship Cards */}
      <div className='flex flex-wrap justify-center gap-6'>
        {internships.map((item, idx) => (
          <div
            key={idx}
            className='bg-gray-800 p-5 rounded-lg shadow-md w-[250px] h-[250px] flex flex-col justify-between text-center border border-gray-700'
          >
            <div>
              <h1 className='text-xl font-semibold mb-2'>{item.title}</h1>
              <p>Department: {item.department}</p>
              <p>Duration: {item.duration}</p>
              <p>Stipend: {item.stipend}</p>
            </div>
            <button
              className={`mt-4 py-1 px-3 rounded font-medium text-sm ${
                item.status === 'Open' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {item.status}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Internship;

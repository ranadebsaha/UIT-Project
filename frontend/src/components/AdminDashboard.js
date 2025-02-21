// import React from 'react';
// import { FaUserPlus, FaSignInAlt, FaUserEdit } from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link, useNavigate } from 'react-router-dom';

// const Dashboard = () => {
//   const navigate= useNavigate();
//   let admin=JSON.parse(localStorage.getItem('admin'));

//   const logout = () => {
//     localStorage.clear();
//     navigate('/');
// }

//   return (
//     <div className="d-flex flex-column flex-md-row h-100" style={{ height: '100vh' }}>
//       <div className="bg-dark text-white p-4 d-flex flex-column" style={{ width: '250px', minHeight: '100vh' }}>
//         <h2 className="mb-4">Health Management</h2>
//         <Link to={'/profile/'+admin._id} className="btn btn-primary w-100 mb-2 d-flex align-items-center">
//           <FaUserPlus className="me-2" /> Profile
//         </Link>
//         <button onClick={logout} className="btn btn-secondary w-100 mb-2 d-flex align-items-center">
//           <FaSignInAlt className="me-2" /> Logout
//         </button>
//         <Link to={'/admin/update/'+admin._id} className="btn btn-info w-100 d-flex align-items-center">
//           <FaUserEdit className="me-2" /> Update Profile
//         </Link>
//         <div className="flex-grow-1"></div>
//       </div>


//       <div className="flex-grow-1 bg-light p-4 overflow-auto">

//         <nav className="navbar navbar-light bg-white mb-4 shadow-sm">
//           <div className="container-fluid">
//             <span className="navbar-brand mb-0 h1">Patient Dashboard</span>
//           </div>
//         </nav>

//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//           <div className="col">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Total Patients</h5>
//                 <p className="card-text fs-2">120</p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Appointments Today</h5>
//                 <p className="card-text fs-2">15</p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Available Doctors</h5>
//                 <p className="card-text fs-2">8</p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">New Registrations</h5>
//                 <p className="card-text fs-2">25</p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Pending Reports</h5>
//                 <p className="card-text fs-2">10</p>
//               </div>
//             </div>
//           </div>
//           <div className="col">
//             <div className="card">
//               <div className="card-body">
//                 <h5 className="card-title">Discharged Patients</h5>
//                 <p className="card-text fs-2">30</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


// import React, { useEffect } from 'react';
// import { FaUserPlus, FaSignInAlt, FaUserEdit } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const user = localStorage.getItem('admin');

//   // Redirect to login if user is not found
//   // useEffect(() => {
//   //   if (!user) {
//   //     navigate('/');
//   //   }
//   // }, [user, navigate]);

//   const logout = () => {
//     if (window.confirm('Are you sure you want to log out?')) {
//       localStorage.clear();
//       navigate('/');
//     }
//   };

//   const stats = [
//     { title: "Total Patients", count: 120 },
//     { title: "Appointments Today", count: 15 },
//     { title: "Available Doctors", count: 8 },
//     { title: "New Registrations", count: 25 },
//     { title: "Pending Reports", count: 10 },
//     { title: "Discharged Patients", count: 30 },
//   ];

//   return (
//     <div className="d-flex h-100">

//       {/* Sidebar */}
//       <aside className="bg-dark text-white p-4 d-flex flex-column" style={{ width: '250px', minHeight: '100vh' }}>
//         <h2 className="mb-4">Health Management</h2>

//         <nav className="d-flex flex-column gap-2">
//           <Link to="/profile/" className="btn btn-primary d-flex align-items-center">
//             <FaUserPlus className="me-2" /> Profile
//           </Link>
//           <button onClick={logout} className="btn btn-secondary d-flex align-items-center">
//             <FaSignInAlt className="me-2" /> Logout
//           </button>
//           <button className="btn btn-info d-flex align-items-center">
//             <FaUserEdit className="me-2" /> Update Profile
//           </button>
//         </nav>

//         <div className="flex-grow-1"></div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-grow-1 bg-light p-4 overflow-auto">

//         {/* Navbar */}
//         <nav className="navbar navbar-light bg-white mb-4 shadow-sm">
//           <div className="container-fluid">
//             <span className="navbar-brand mb-0 h1">Patient Dashboard</span>
//           </div>
//         </nav>

//         {/* Statistics Grid */}
//         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
//           {stats.map((stat, index) => (
//             <div className="col" key={index}>
//               <div className="card shadow-sm">
//                 <div className="card-body">
//                   <h5 className="card-title">{stat.title}</h5>
//                   <p className="card-text fs-2">{stat.count}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </main>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useEffect, useState } from 'react';
import { FaUserPlus, FaSignInAlt, FaUserEdit, FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('admin');
  const [searchId, setSearchId] = useState('');
  const [patient, setPatient] = useState(null);

  // Redirect to login if not authenticated
  // useEffect(() => {
  //   if (!user) {
  //     navigate('/');
  //   }
  // }, [user, navigate]);

  const logout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.clear();
      navigate('/');
    }
  };

  const stats = [
    { title: "Total Patients", count: 120 },
    { title: "Appointments Today", count: 15 },
    { title: "Available Doctors", count: 8 },
    { title: "New Registrations", count: 25 },
    { title: "Pending Reports", count: 10 },
    { title: "Discharged Patients", count: 30 },
  ];

  const patientsData = {
    "1001": { id: "1001", name: "John Doe", age: 35, condition: "Flu" },
    "1002": { id: "1002", name: "Jane Smith", age: 42, condition: "Diabetes" },
  };

  const handleSearch = () => {
    if (patientsData[searchId]) {
      setPatient(patientsData[searchId]);
    } else {
      setPatient(null);
    }
  };

  return (
    <div className="bg-light vh-100">

      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Health Management</Link>

          <div className="d-flex">
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search Patient by ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>

          <div className="ms-auto d-flex gap-2">
            <Link to="/profile/" className="btn btn-primary">
              <FaUserPlus className="me-2" /> Profile
            </Link>
            <button onClick={logout} className="btn btn-secondary">
              <FaSignInAlt className="me-2" /> Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="container mt-4">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {stats.map((stat, index) => (
            <div className="col" key={index}>
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title">{stat.title}</h5>
                  <p className="card-text fs-2">{stat.count}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {patient && (
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">Patient Details</h5>
              <p><strong>ID:</strong> {patient.id}</p>
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Condition:</strong> {patient.condition}</p>
            </div>
          </div>
        )}

        {searchId && !patient && (
          <div className="alert alert-warning mt-4">No patient found with ID {searchId}.</div>
        )}

      </main>
    </div>
  );
};

export default Dashboard;

import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [teacher, setTeacher] = useState([]);
  const [selectedTeacherIds, setSelectedTeacherIds] = useState([]);

  useEffect(() => {
    loadTeacher();
  }, []);

  const loadTeacher = async () => {
    const result = await axios.get('http://localhost:8080/teacher');
    setTeacher(result.data);
  };

  const deleteSelectedTeachers = async () => {
    const idsToDelete = selectedTeacherIds.join(',');
    await axios.delete(`http://localhost:8080/teacher/delete-multiple/${idsToDelete}`);
    setSelectedTeacherIds([]);
    loadTeacher();
  };

  const deleteTeacher = async (id) => {
    await axios.delete(`http://localhost:8080/teacher/${id}`);
    loadTeacher();
  };

  const handleSelectTeacher = (id) => {
    const newSelectedIds = [...selectedTeacherIds];
    if (newSelectedIds.includes(id)) {
      newSelectedIds.splice(newSelectedIds.indexOf(id), 1);
    } else {
      newSelectedIds.push(id);
    }
    setSelectedTeacherIds(newSelectedIds);
  };

  return (
    <div className="container">
      <div className="py-4">
      <div><h1>Teacher List</h1></div>
        <div className="d-flex justify-content-end mb-2">
          <button className="btn btn-danger" onClick={deleteSelectedTeachers} disabled={selectedTeacherIds.length === 0}>
            Delete Selected
          </button>
        </div>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">LastName</th>
              <th scope="col">Father Name</th>
              <th scope="col">Job</th>
              <th scope="col">Governmental Position</th>
              <th scope="col">Educational Position</th>
              <th scope="col">Address</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {teacher.map((teacher, index) => (
              <tr key={index}>
                <td>
                  <input type="checkbox" checked={selectedTeacherIds.includes(teacher.id)} onChange={() => handleSelectTeacher(teacher.id)} />
                </td>
                <th scope="row">{index + 1}</th>
                <td>{teacher.name}</td>
                <td>{teacher.lastname}</td>
                <td>{teacher.fathername}</td>
                <td>{teacher.job}</td>
                <td>{teacher.gov_position}</td>
                <td>{teacher.edu_position}</td>
                <td>{teacher.address}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/view-employee/${teacher.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/edit-employee/${teacher.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteTeacher(teacher.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

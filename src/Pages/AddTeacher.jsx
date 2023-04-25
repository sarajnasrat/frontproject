import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AddTeacher = () => {
  let navigate = useNavigate();
 
  const [teacher, setTeacher] = useState({
    name: "",
    lastname: "",
    fathername: "",
    job: "",
    gov_position: "",
    edu_position: "",
    address: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const { name, lastname, fathername, job, gov_position, edu_position, address } = teacher;
  const onInputChange = (e) => {
    setTeacher({ ...teacher, [e.target.name]: e.target.value });

  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/teacher", teacher);
    setSuccessMessage("Teacher record successfully added!");
    navigate("/home");
    console.log(teacher);
    setTeacher({
      name: "",
      lastname: "",
      fathername: "",
      job: "",
      gov_position: "",
      edu_position: "",
      address: "",
    });
    window.alert("Teacher successfully added!");
  };
  return (
    <div className='container'>
      <h1>Teacher Registration Form</h1>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <form onSubmit={onSubmit}>
        <div className='row'>
          <div className='col-md-6'>
            <label className='col-4' >First Name:</label>
            <input type='text' className='form-control'
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)} required></input>
          </div>
          <div className='col-md-6'>
            <label className='col-4' >Last Name:</label>
            <input type='text' className='form-control'
              name="lastname"
              value={lastname}
              onChange={(e) => onInputChange(e)} required></input>
          </div>
          <div className='col-md-6'>
            <label className='col-4' >Father Name:</label>
            <input type='text' className='form-control'
              name="fathername"
              value={fathername}
              onChange={(e) => onInputChange(e)} required></input>
          </div>
          <div className='col-md-6'>
            <label className='col-4' >Job:</label>
            <input type='text' className='form-control'
              name="job"
              value={job}
              onChange={(e) => onInputChange(e)} required></input>
          </div>
          <div className='col-md-6'>
            <label className='col-4' >Governmental Position:</label>
            <input type='text' className='form-control'
              name="gov_position"
              value={gov_position}
              onChange={(e) => onInputChange(e)} required></input>
          </div>
          <div className='col-md-6'>
            <label className='col-4' >Educational Position:</label>
            <input type='text' className='form-control'
              name="edu_position"
              value={edu_position}
              onChange={(e) => onInputChange(e)} required></input>
          </div>
          <div className='col-md-6'>
            <label className='col-4' >Address:</label>
            <input type='text' className='form-control'
              name="address"
              value={address}
              onChange={(e) => onInputChange(e)} required></input>
          </div>

          <div>
            <button type='submit' className="btn btn-outline-primary">
              Save
            </button>
            <button type="reset" className="btn btn-danger" onClick={() => setTeacher({
              name: "",
              lastname: "",
              fathername: "",
              job: "",
              gov_position: "",
              edu_position: "",
              address: "",
            })}>
              Reset
            </button>
          </div>
        </div>
        <div>

        </div>
      </form>
    </div>
  );
}

export default AddTeacher;

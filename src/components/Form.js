import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Henry",
    admin: false
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([])

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if(e.target.type === "checkbox"){
      value = e.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e){
    e.preventDefault();
  
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setErrors([])
  } 

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName} {data.admin}
      </div>
    );
  });

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name = "firstName"
        value={formData.firstName} 
        onChange={handleChange} 
      />
      <input 
        type="text" 
        name = "lastName"
        value={formData.lastName} 
        onChange={handleChange} 
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">Submit</button>
    </form>
      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([])

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    if (firstName.length > 0){
    const formData = {
      firstName: firstName,
      lastName: lastName
    };
    const dataArray = [...submittedData, formData];
    setSubmittedData(dataArray);
    setFirstName("");
    setLastName("");
    setErrors([])
  }else{
    setErrors(["First name is required!"])
  }

}

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    );
  });

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleFirstName} value={firstName} />
      <input type="text" onChange={handleLastName} value={lastName} />
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
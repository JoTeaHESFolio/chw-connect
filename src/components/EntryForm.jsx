import React, { useState } from "react";

function EntryForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    housingStatus: "",
    insuranceStatus: "",
    concerns: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Future: send data to Google Sheets API
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        State:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Zip Code:
        <input
          type="text"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Housing Status:
        <select
          name="housingStatus"
          value={formData.housingStatus}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="rent">Rent</option>
          <option value="own">Own</option>
          <option value="temporary">Temporary</option>
          <option value="shelter">Shelter</option>
          <option value="rv/car">RV/Car</option>
          <option value="unhoused">Unhoused</option>
        </select>
      </label>
      <br />
      <label>
        Insurance Status:
        <select
          name="insuranceStatus"
          value={formData.insuranceStatus}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="uninsured">Uninsured</option>
          <option value="medicaid">Medicaid</option>
          <option value="medicare">Medicare</option>
          <option value="va">VA</option>
          <option value="chip">CHiP children's insurance</option>
          <option value="private">Private</option>
          <option value="cobra">short-term or COBRA</option>
          <option value="catastrophic">Catastrophic</option>
          <option value="Travel">Travel or Student</option>
        </select>
      </label>
      <br />
      <label>
        Primary Concern:
        <select
          name="concerns"
          value={formData.concerns}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="housing">Housing</option>
          <option value="emergencyhousing">Emergency Housing</option>
          <option value="repair">Housing Repair</option>
          <option value="utilities">Utilities</option>
          <option value="food">Food Security</option>
          <option value="nutrition">Diet/Nutrition</option>
          <option value="insurance">Insurance</option>
          <option value="medical">Medical</option>
          <option value="mental">Mental Health</option>
          <option value="dental">Dental</option>
          <option value="hearing">Hearing</option>
          <option value="vision">Vision/Blindness</option>
          <option value="rx">Rx Assistance</option>
          <option value="medsupply">Supplies-Medical</option>
          <option value="eol">Pallative Care/EOL</option>
          <option value="spiritual">Spiritual</option>
          <option value="baby">Baby</option>
          <option value="child">Children</option>
          <option value="childcare">Child care</option>
          <option value="babysupply">Supplies Baby</option>
          <option value="foster">Foster/Adopt</option>
          <option value="disability">Disability</option>
          <option value="va">VA</option>
          <option value="ssa">SSI/SSDI</option>
          <option value="legal">Legal</option>
          <option value="judicial">Judicial</option>
          <option value="education">Education</option>
          <option value="language">Language</option>
          <option value="unemployment">Unemployment</option>
          <option value="jobtraining">Job Training</option>
          <option value="jobseeking">Job Seeking</option>
          <option value="volunteer">Volunteer</option>
          <option value="transport">Transportation</option>
          <option value="vehicleassist">Vehicle Repair Assistance</option>
          <option value="gas">Gas Assistance</option>
          <option value="disaster">Disaster</option>
        </select>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default EntryForm;

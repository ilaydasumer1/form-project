import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import AdminDetail from "./AdminDetail/AdminDetail";
import { TiTick } from 'react-icons/ti';
import { IoMdText } from 'react-icons/io';
import { BsFillPersonFill } from 'react-icons/bs';
import axios from "axios";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    youare: "",
    youhave: "",
    userName: "",
    typeOfProject: "",
    budget: "",
  });
  const handleSubmitUser = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users', {
        firstname: formData.firstName,
        lastname: formData.lastName,
        username: formData.userName,
        email: formData.email,
      });
      console.log(response.data);
      nextStep(); // Başarılı ise sonraki adıma geç
    } catch (error) {
      console.error('User submission error:', error);
    }
  };
  
  // İkinci adım için handler
  const handleSubmitProject = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/projects', {
        youAre: formData.youare,
        youHave: formData.youhave,
        typeOfProject: formData.typeOfProject,
        budget: formData.budget,
      });
      console.log(response.data);
      // Burada başka bir adıma geçebilir veya kullanıcıya geri bildirim sağlayabilirsiniz.
    } catch (error) {
      console.error('Project submission error:', error);
    }
  };
  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
  };

  switch (currentStep) {
    case 1:
      return (
        <div className="containerr">
          <div className="icons">
            <span>
              <TiTick className="icon" />
            </span>
            <span>
              <IoMdText className="icon" />
            </span>
            <span>
              <BsFillPersonFill className="icon" />
            </span>
          </div>
          <div className="form-div">
            <div>
              <h4 className="header">Tell Us About Your Requirements</h4>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="content">
                <input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                />
                <input
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                <input
                  name="userName"
                  type="text"
                  value={formData.userName}
                  onChange={handleChange}
                  placeholder="User Name"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                />
                <button
                  onClick={handleSubmitUser}
                  type="button"
                  class="btn btn-primary"
                  data-toggle="button"
                  aria-pressed="false"
                  autocomplete="off"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
          <div className="text">
            <p>
              Want to contact us? Call us on +91 934834328293, +91 8382913823
            </p>
          </div>
        </div>
      );
    case 2:
      return (
        <div className="containerr">
          <div className="icons">
            <span>
              <TiTick className="icon" />
            </span>
            <span>
              <IoMdText className="icon" />
            </span>
            <span>
              <BsFillPersonFill className="icon" />
            </span>
          </div>
          <div className="form-div">
            <div>
              <h4 className="header">Tell Us About Your Requirements</h4>
            </div>
            <div>
            <form className="content" onSubmit={handleSubmitProject}>
  <select
    className="content-select"
    name="youare"
    value={formData.youare}
    onChange={handleChange}
  >
    <option value="">You are...</option>
    <option value="Software Developer">Software Developer</option>
    <option value="Industrial Engineer">Industrial Engineer</option>
    <option value="Professional Photographer">Professional Photographer</option>
    <option value="Web Designer">Web Designer</option>
    <option value="Graphic Artist">Graphic Artist</option>
    <option value="Other">Other</option>
  </select>

  <select
    className="content-select"
    name="youhave"
    value={formData.youhave}
    onChange={handleChange}
  >
    <option value="">You have...</option>
    <option value="Idea">Idea</option>
    <option value="Company">Company</option>
    <option value="Budget">Budget</option>
    <option value="Worker">Worker</option>
    <option value="Other">Other</option>
  </select>

  <select
    className="content-select"
    name="typeOfProject"
    value={formData.typeOfProject}
    onChange={handleChange}
  >
    <option value="">Type of Project/Query</option>
    <option value="Digital Branding">Digital Branding</option>
    <option value="Professional Photography">Professional Photography</option>
    <option value="Web Design">Web Design</option>
    <option value="Mobile App Development">Mobile App Development</option>
    <option value="Digital Marketing">Digital Marketing</option>
    <option value="Other">Other</option>
  </select>

  <input
    name="budget"
    type="text"
    value={formData.budget}
    onChange={handleChange}
    placeholder="Budget"
  />

  <button type="button" className="btn btn-light" onClick={prevStep}>
    Previous
  </button>
  <button type="submit" className="btn btn-success">
    Submit
  </button>
</form>

            </div>
          </div>
          <AdminDetail/>
        </div>
      );
    default:
      return null;
  }
};

export default App;

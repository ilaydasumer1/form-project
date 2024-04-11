import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    youare: "",
    youhave: "",
    typeOfProject: "",
    budget: "",
  });

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
        <form onSubmit={handleSubmit}>
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
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
          />
          <button type="button" onClick={nextStep}>
            Next
          </button>
        </form>
      );
    case 2:
      return (
        <form onSubmit={handleSubmit}>
          <select
            name="youare"
            value={formData.youare}
            onChange={handleChange}
          >
            <option value="">You are</option>
            <option value="digitalBranding">Software Developer</option>
            <option value="photography">Industrial engineer</option>
            <option value="photography">Professional Photographer</option>
            <option value="webDesign">Web Designer</option>
            <option value="webDesign">graphic artist</option>
            <option value="other">Other</option>
          </select>
          <select
            name="youhave"
            value={formData.youhave}
            onChange={handleChange}
          >
            <option value="">You have</option>
            <option value="digitalBranding">Idea</option>
            <option value="photography">company</option>
            <option value="webDesign">budget</option>
            <option value="webDesign">worker</option>
            <option value="other">Other</option>
          </select>
          <select
            name="typeOfProject"
            value={formData.typeOfProject}
            onChange={handleChange}
          >
            <option value="">Type of Project/Query</option>
            <option value="digitalBranding">Digital Branding</option>
            <option value="photography">Professional Photography</option>
            <option value="webDesign">Web Design</option>
            <option value="appDevelopment">Mobile App Development</option>
            <option value="digitalMarketing">Digital Marketing</option>
            <option value="other">Other</option>
          </select>
          <input
            name="budget"
            type="text"
            value={formData.budget}
            onChange={handleChange}
            placeholder="Budget"
          />
          <button type="button" onClick={prevStep}>
            Previous
          </button>
          <button type="submit">Submit</button>
        </form>
      );
    default:
      return null;
  }
};

export default App;

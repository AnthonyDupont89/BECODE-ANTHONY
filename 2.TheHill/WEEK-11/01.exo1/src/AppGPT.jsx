import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    phoneNumber: "",
    password1: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Règles de validation
  const validationRules = {
    firstname: (value) => value.length >= 3 || "*Firstname must be at least 3 characters",
    lastname: (value) => value.length >= 5 || "*Lastname must be at least 5 characters",
    age: (value) =>
      (!isNaN(value) && value >= 9 && value <= 99) || "*Your age must be between 9 and 99",
    email: (value) => value.length >= 5 || "*Email must be at least 5 characters",
    phoneNumber: (value) =>
      (!isNaN(value) && value.length === 10) || "*Your phone number must be 10 digits",
    password1: (value) => value.length >= 8 || "*Password must be at least 8 characters",
    password2: (value) =>
      value === formData.password1 || "*Password verification must match password",
  };

  const validateField = (name, value) =>
    validationRules[name] ? validationRules[name](value) : true;

  const validateForm = (data) => {
    const newErrors = {};
    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error !== true) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (isSubmitted) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid", formData);
    } else {
      console.log("Form has errors", validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formData).map((name) => (
        <div key={name}>
          <input
            type={name.includes("password") ? "password" : "text"}
            name={name}
            placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
            value={formData[name]}
            onChange={handleChange}
            className={isSubmitted && errors[name] ? "notvalid" : "valid"}
          />
          {isSubmitted && errors[name] && <p className="error">{errors[name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    email: "",
    phoneNumber: "",
    password1: "",
    password2: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // Suivi de la soumission

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

    // Validation dynamique après le premier submit
    if (isSubmitted) {
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        const newErrors = validateField(name, value);
        if (!newErrors[name]) {
          delete updatedErrors[name]; // Supprime l'erreur si corrigée
        } else {
          updatedErrors[name] = newErrors[name]; // Ajoute ou met à jour l'erreur
        }
        return updatedErrors;
      });
    }
  };

  const validateField = (name, value) => {
    const errors = {};

    if (name === "firstname" && value.length < 3) {
      errors.firstname = "*Firstname must be at least 3 characters";
    }

    if (name === "lastname" && value.length < 5) {
      errors.lastname = "*Lastname must be at least 5 characters";
    }

    if (name === "age" && (isNaN(value) || value < 9 || value > 99)) {
      errors.age = "*Your age must be between 9 and 99";
    }

    if (name === "email" && value.length < 5) {
      errors.email = "*Email must be at least 5 characters";
    }

    if (name === "phoneNumber" && (isNaN(value) || value.length !== 10)) {
      errors.phoneNumber = "*Your phone number must be 10 digits";
    }

    if (name === "password1" && value.length < 8) {
      errors.password1 = "*Password must be at least 8 characters";
    }

    if (name === "password2" && value !== formData.password1) {
      errors.password2 = "*Password verification must match password";
    }

    return errors;
  };

  const validateForm = (formData) => {
    const errors = {};
    Object.keys(formData).forEach((key) => {
      Object.assign(errors, validateField(key, formData[key]));
    });
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true); // Indiquer que le formulaire a été soumis
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    const hasErrors = Object.keys(validationErrors).length > 0;
    if (!hasErrors) {
      console.log("Valid form");
    } else {
      console.log("Not valid form");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          onChange={handleChange}
          className={
            isSubmitted && errors.firstname
              ? "notvalid"
              : isSubmitted && formData.firstname
              ? "valid"
              : ""
          }
        />
        {isSubmitted && errors.firstname && <p>{errors.firstname}</p>}

        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          onChange={handleChange}
          className={
            isSubmitted && errors.lastname
              ? "notvalid"
              : isSubmitted && formData.lastname
              ? "valid"
              : ""
          }
        />
        {isSubmitted && errors.lastname && <p>{errors.lastname}</p>}

        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={handleChange}
          className={
            isSubmitted && errors.age
              ? "notvalid"
              : isSubmitted && formData.age
              ? "valid"
              : ""
          }
        />
        {isSubmitted && errors.age && <p>{errors.age}</p>}

        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          className={
            isSubmitted && errors.email
              ? "notvalid"
              : isSubmitted && formData.email
              ? "valid"
              : ""
          }
        />
        {isSubmitted && errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          name="phoneNumber"
          placeholder="phoneNumber"
          onChange={handleChange}
          className={
            isSubmitted && errors.phoneNumber
              ? "notvalid"
              : isSubmitted && formData.phoneNumber
              ? "valid"
              : ""
          }
        />
        {isSubmitted && errors.phoneNumber && <p>{errors.phoneNumber}</p>}

        <input
          type="password"
          name="password1"
          placeholder="password"
          onChange={handleChange}
          className={
            isSubmitted && errors.password1
              ? "notvalid"
              : isSubmitted && formData.password1
              ? "valid"
              : ""
          }
        />
        {isSubmitted && errors.password1 && <p>{errors.password1}</p>}

        <input
          type="password"
          name="password2"
          placeholder="repeat password"
          onChange={handleChange}
          className={
            isSubmitted && errors.password2
              ? "notvalid"
              : isSubmitted && formData.password2
              ? "valid"
              : ""
          }
        />
        {isSubmitted && errors.password2 && <p>{errors.password2}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;

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

  const [isSubmitted, setIsSubmitted] = useState(false); // État pour suivre la soumission

  // Fonction pour gérer les changements dans les champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Fonction de validation (hors de handleSubmit)
  const validateForm = (formData) => {
    const errors = {};

    if (formData.firstname.length < 3) {
      errors.firstname = "*Firstname must be at least 3 characters";
    }

    if (formData.lastname.length < 5) {
      errors.lastname = "*Lastname must be at least 5 characters";
    }

    if (isNaN(formData.age) || formData.age < 9 || formData.age > 99) {
      errors.age = "*Your age must be between 9 and 99";
    }

    if (formData.email.length < 5) {
      errors.email = "*Email must be at least 5 characters";
    }

    if (isNaN(formData.phoneNumber) || formData.phoneNumber.length !== 10) {
      errors.phoneNumber = "*Your phone number must be 10 digits";
    }

    if (formData.password1.length < 8) {
      errors.password1 = "*Password must be at least 8 characters";
    }

    if (formData.password2 !== formData.password1) {
      errors.password2 = "*Password verification must match password";
    }

    return errors;
  };

  // Fonction pour gérer le submit du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitted(true); // Indiquer que le formulaire a été soumis
    const validationErrors = validateForm(formData); // Valider tous les champs
    setErrors(validationErrors); // Mettre à jour les erreurs

    // Vérifier si le formulaire est valide
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
          className={errors.firstname ? "notvalid" :  isSubmitted && formData.firstname ? "valid" : ""}
        />
        {errors.firstname && <p>{errors.firstname}</p>}

        <input
          type="text"
          name="lastname"
          placeholder="lastname"
          onChange={handleChange}
          className={errors.lastname ? "notvalid" :  isSubmitted && formData.lastname ? "valid" : ""}
        />
        {errors.lastname && <p>{errors.lastname}</p>}

        <input
          type="text"
          name="age"
          placeholder="age"
          onChange={handleChange}
          className={errors.age ? "notvalid" :  isSubmitted && formData.age ? "valid" : ""}
        />
        {errors.age && <p>{errors.age}</p>}

        <input
          type="text"
          name="email"
          placeholder="email"
          onChange={handleChange}
          className={errors.email ? "notvalid" :  isSubmitted && formData.email ? "valid" : ""}
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="text"
          name="phoneNumber"
          placeholder="phoneNumber"
          onChange={handleChange}
          className={errors.phoneNumber ? "notvalid" :  isSubmitted && formData.phoneNumber ? "valid" : ""}
        />
        {errors.phoneNumber && <p>{errors.phoneNumber}</p>}

        <input
          type="password"
          name="password1"
          placeholder="password"
          onChange={handleChange}
          className={errors.password1 ? "notvalid" :  isSubmitted && formData.password1 ? "valid" : ""}
        />
        {errors.password1 && <p>{errors.password1}</p>}

        <input
          type="password"
          name="password2"
          placeholder="repeat password"
          onChange={handleChange}
          className={errors.password2 ? "notvalid" : isSubmitted && formData.password2 ? "valid" : ""}
        />
        {errors.password2 && <p>{errors.password2}</p>}

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;

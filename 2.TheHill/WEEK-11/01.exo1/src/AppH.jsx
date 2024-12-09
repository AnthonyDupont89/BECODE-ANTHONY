import React, { useState } from "react";



// composant
export default function App() {

  // state formData (objet)
  const [formData, setFormData] = useState({
    pseudo: "",
    password: "",
  });


  // state errors (objet)
  const [errors, setErrors] = useState({});



  // fonction de validation du formulaire
  const validateField = (name, value) => {
    setErrors((prev) => {
      return { ...prev, [name]: "" };
    });

    if (name === "pseudo" && value.length < 5) {
      setErrors((prev) => {
        return { ...prev, [name]: "Pseudo must be at least 5 characters" };
      });
    }

    if (name === "password" && value.length < 9) {
      setErrors((prev) => {
        return { ...prev, [name]: "Password must be at least 9 characters" };
      });
    }
  };



  console.log(errors);
  console.log(formData);
  


  
  // fonction attentive aux changement input
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    validateField(name, value);
  };



  // fonction pour soumettre le formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    console.log(formData);
  };



  // HTML
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type='text'
        placeholder='Pseudo'
        name='pseudo'
        onChange={(e) => handleChange(e)}
        className={errors.pseudo ? "notvalid" : formData.pseudo ? "valid" : ""}
      />
      {errors.pseudo && <p>{errors.pseudo}</p>}
      <input
        type='password'
        placeholder='Password'
        name='password'
        onChange={(e) => handleChange(e)}
        className={
          errors.password ? "notvalid" : formData.password ? "valid" : ""
        }
      />
      {errors.password && <p>{errors.password}</p>}

      <button>Send</button>
    </form>
  );
}

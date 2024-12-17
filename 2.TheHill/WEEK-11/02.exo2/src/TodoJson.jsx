import React, { useEffect, useState } from 'react';

function todoJson() {
  const [todos, setTodos] = useState([]); // Liste des tâches
  const [newTodo, setNewTodo] = useState(''); // Tâche en cours de saisie

  // Fonction pour récupérer les tâches
  const fetchTodos = async () => {
    const response = await fetch('http://localhost:3000/todos'); // L'URL de JSON Server
    const data = await response.json(); // Conversion en JSON
    setTodos(data); // Mise à jour de l'état
  };

  // Fonction pour ajouter une tâche
  const addTodo = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    if (!newTodo.trim()) return; // Ne rien faire si l'input est vide

    const response = await fetch('http://localhost:3000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newTodo, completed: false }), // Envoi de la nouvelle tâche
    });
    const data = await response.json();
    setTodos((prevTodos) => [...prevTodos, data]); // Mise à jour de la liste des tâches
    setNewTodo(''); // Réinitialisation de l'input
  };

  // Fonction pour supprimer une tâche
  const deleteTodo = async (id) => {
    await fetch(`http://localhost:3000/todos/${id}`, { method: 'DELETE' }); // Suppression via API
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id)); // Mise à jour de l'état local
  };

  // Fonction pour basculer l'état de "complété" d'une tâche
  const toggleCompleted = async (id, completed) => {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: 'PATCH', // Mise à jour partielle
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }), // Inversion de l'état
    });
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !completed } : todo
      )
    );
  };

  // Appeler fetchTodos une fois que le composant est monté
  useEffect(() => {
    fetchTodos();
  }, []);

  const [display, setDisplay] = useState(true)

  const handleClick = ()=>{
    setDisplay(!display)
  }


  return (
    <>
      <h2 onClick={handleClick}>Json DB</h2>
      {display && <div>
        <form onSubmit={addTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)} // Mise à jour de la valeur de l'input
            placeholder="Ajouter une tâche"
          />
          <button type="submit">Ajouter</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed} // Case cochée si la tâche est complétée
                  onChange={() => toggleCompleted(todo.id, todo.completed)} // Basculer l'état
                />
                <span
                  style={{
                    textDecoration: todo.completed ? 'line-through' : 'none', // Texte barré si complété
                  }}
                >
                  {todo.content}
                </span>
              </label>
              <button onClick={() => deleteTodo(todo.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>}
      
    </>
  );
}

export default todoJson;

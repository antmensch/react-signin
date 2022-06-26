import React, {useState, useRef} from "react";
import './App.css';
import LoginForm from './components/loginForm/LoginForm';

function App() {
  const adminUser = {
      email: "admin@admin.com",
      password: "admin123"
  }

  const [user, setUser] = useState({
      email: "",
      name: "",
      birthDate: "",
      gender: "",
      password: ""
  });

  const [error, setError] = useState("");

  function signup(details) {
      setUser(prev => ({
        ...prev,
        email: details.email,
        name: details.name,
        birthDate: details.birthDate,
        gender: details.gender,
        password: details.password,
      }));
  }

  function logout() {
    setUser({
      email: "",
      name: "",
      birthDate: "",
      gender: "",
      password: ""
  })
  }
  return (
    <main className='App'>
      {(user.email != "") ? (
        <div className="welcome">
          <h2 className="welcome--heading">Hi there, <span className="welcome--userName">{user.name}</span>! Thanks for signing up!</h2>
          <button className="welcome--button" onClick={logout}>Back</button>
        </div>
      ) : (
        <LoginForm signup={signup} error={error} />
      )}
      
    </main>
    
  );
}

export default App;

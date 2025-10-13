import React from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm.js'
import './components/forms.css'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#333' }}>
        Form Handling in React
      </h1>
      <div className="forms-container">
        <RegistrationForm />
        <FormikForm />
      </div>
    </div>
  )
}

export default App

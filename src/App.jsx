import './App.css'
const testKey = import.meta.env.VITE_TEST_KEY;//process.env.REACT_APP_TEST_KEY;

function App() {
  return (
    <>
      <div class="container d-flex align-items-center justify-content-center min-vh-100">
        <h1>Coming soon...{testKey}</h1>
      </div>
    </>
  )
}

export default App

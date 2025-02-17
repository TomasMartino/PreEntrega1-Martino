
import NavBar from './components/NavBar'
import './App.css'
import './components/NavBar.jsx'
import ItemListContainer from'./components/ItemListContainer.jsx'


function App() {
  let title = "Voga";

  return (
    <>

     <NavBar/>
     <ItemListContainer title={title}/>
    </>
  )
}

export default App

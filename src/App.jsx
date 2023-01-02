
import './App.css'
import Header from './components/Header'
import Images from './components/Images'
import Info from './components/Info'


function App() {

  return (
      <>
          <Header/>
          <div className="main-column">
              <Images />
              <Info />
          </div>

      </>

  )
}

export default App

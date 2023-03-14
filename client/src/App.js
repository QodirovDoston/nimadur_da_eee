import React, { useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/header'
import MainPage from './components/main/Pages'
import Footer from './components/footer/footer'
import ScrollToTop from './ScrollToTop'
import { GlobalState } from './GlobalState'

function App() {

  const state = useContext(GlobalState)
  const [colors] = state.postAPI.colors

  const bagckroungs = {
    background: colors ? "#FFF" : "#2A2A2A"
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="Heade" style={bagckroungs}>
        <div className="App">
          <Header />
          <MainPage />
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
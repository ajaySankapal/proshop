import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

// to connect front to backend we have to set the proxy, because for front end there is diff url and for backend there is different url.. so we set the url of the backend from which we want to access the data in proxy ,,, for local host "proxy":"http://127.0.0.1:5000",
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Routes>
          {/* <Container> */}
          <Route path='/' element={<HomeScreen />} exact />
          {/* </Container> */}
          <Route path='/product/:id' element={<ProductScreen />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App

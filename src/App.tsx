import { Routes, Route, Link } from 'react-router-dom'
import Home from '@/components/Home'

const App = () => {
  return <Routes>
    <Route path='/' element={<Home />}></Route>

  </Routes>
}

export default App

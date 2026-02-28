
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import { useEffect, useState } from 'react';

function App() {

  const [isChecked, setIsChecked] = useState(() => localStorage.getItem('isChecked') === 'true');

  useEffect(() => {
    localStorage.setItem('isChecked', isChecked)
  }, [isChecked])


  return (
    <div data-theme={isChecked ? 'dark' : 'winter'}>
      <Routes>
        <Route path='/' element={<Home setIsChecked={setIsChecked} isChecked={isChecked} />}></Route>
      </Routes>
    </div>
  )
}

export default App

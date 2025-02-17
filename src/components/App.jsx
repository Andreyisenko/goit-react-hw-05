// import { useEffect } from 'react';
// import  fetchArticles  from '../services/api'
import './App.css'
import { Route, Routes } from 'react-router-dom';



function App() {


  // useEffect(() => {
  //   const getData = async () => {
  //     const data = await fetchArticles();
  //     console.log(data);
  //   };
  //   getData()
    
  // }, []);



  
  return (
    <main>
     <h1>goit-react-hw-05</h1>
<Routes>
  <Route path='/' element={<h2>Hello</h2>} />
  <Route path='/about' element={<h2>Hello World</h2>} />
  <Route path='/about/aim' element={<h2>Hello World goo</h2>} />
</Routes>

     
    </main>
  )
}

export default App

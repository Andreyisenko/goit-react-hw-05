import { useEffect } from 'react';
import  fetchArticles  from '../services/api'
import './App.css'



function App() {


  useEffect(() => {
    const getData = async () => {
      const data = await fetchArticles();
      console.log(data);
    };
    getData()
    
  }, []);



  
  return (
    <>
     <h1>goit-react-hw-05</h1>
     
    </>
  )
}

export default App

import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [lista, setLista] = useState([]);

  useEffect(()=>{
    let url = "http://localhost:3000/equipamentos";

    let fetchData = async () =>{
      
      try{

       let requisicao = await fetch(url);
       let json = await requisicao.json();
       setLista(json);

      }catch(e){
      console.error(e);
      }
    }

    fetchData();
  }, []);


  return (
    
      <main>

        <div id="btn">
          <Link>listagem(Cards)"</Link>
          <Link>Listagem(tabela)</Link>
        </div>

      
      </main>
    
  )
}

export default App
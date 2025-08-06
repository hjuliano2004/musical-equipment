import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'

function App() {

  const [lista, setLista] = useState([]);

  useEffect(()=>{
    let url = "localhost:3000/equipamentos";

    async function fetchData(){
      
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


      <Routes>
        
      </Routes>
      </main>
    
  )
}

export default App
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { useEffect, useState } from 'react'
import { Tabela } from './componentes/tabela/Tabela';

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
  }, [lista]);


  return (
    
      <main>

        <div id="btn">
          <Link>listagem(Cards)</Link>
          <Link to="/tabela">Listagem(tabela)</Link>
        </div>

        <Routes>
          <Route path="/tabela" element={<Tabela lista={lista} />} />
        </Routes>
        
      </main>
    
  )
}

export default App
import { useState } from 'react'
import './services/api'
import{FiSearch} from 'react-icons/fi'
import './styles.css'

export default function App() {
  const [input, setInput] = useState('');
  const[cep, setCep] = useState({});



async function handleSearch(){
  if (input === ''){
    alert("preencha com algum Cep!!!");
    return;
  }

  try{
    const response = await api.get(`${input}/json`);
    console.log(response.data)
    setInput("");

  }catch{
    alert("Ops, algo deu errado!!!")
    setInput("")
  }
 
 }

  return (
    <div className='container'>

      <h1 className='title'>Buscar Cep:</h1>


      <div className='containerInput'>
        <input type='text' placeholder='Digite seu Cep...' value={input}
        onChange={(e)=> setInput(e.target.value)}
        />

       <button className='buttonSearch' onClick={handleSearch}>
        <FiSearch size={25} color='#231942' />
       </button>

      </div>

{Object.keys(cep).length > 0 && (
  <main>
  <h2>CEP: {cep.cep}</h2>

  <span>{cep.logradouro}</span>
  <span>Complemento:{cep.complemento}</span>
  <span>{cep.bairro}</span>
  <span>{cep.localidade}</span>

</main>
)}

    </div>
  )
}



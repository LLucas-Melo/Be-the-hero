import React,{useState} from 'react';
import {Link, useHistory}  from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi'


import api from '../../services/api'

 import './style.css'

 import logoImg  from  '../../assets/logo.svg';

export default function NewIncident (){
      const [title,setTitle] = useState ('');
      const [description,setDescriptio] = useState('');
      const [value,setValue] = useState ('');

       const ongId = localStorage.getItem('ongId')
       
       const history = useHistory();

      async function handleNewIncident(e){
        e.preventDefault();
        const data = ({
          title,
          description,
          value

        })
        try {
          await api.post('incidents', data,{
            headers:{
              Authorization: ongId

            }
            
          });
          history.push('/profile')
          alert('postado com sucesso ')
          
        }catch (err) {
          alert('nao foi possivel completar a  postagem')

        }
      }
    return (  <div className ="new-incident-container">


    <div  className="content">
        
        <section>
            <img src ={logoImg} alt =" Be the Hero"/>
        <h1>Cadastrar novo caso</h1>

        <p>Decreva o caso detalhadamente para encontrar um heroi para resolver isso</p>
              
      <Link className ="back-link" to="/profile" >
         <FiArrowLeft size={16} color ="#e02041"/>
        voltar para home
         </Link>
        </section>
        <form onSubmit ={handleNewIncident}>
        <input 
        placeholder="Titulo do caso "
        value ={title}
        onChange={e=>setTitle(e.target.value)}
        />
        <textarea 
         placeholder ="Descrição"
         value={description}
         onChange={e=>setDescriptio(e.target.value)}
         />
        <input 
        placeholder ="valor em Reais"
        value={value} 
        onChange ={e=>setValue(e.target.value)}
        />
        
          <div>  
                 
        <button className ="button">Cadastrar</button>

        </div>
        </form>
    </div>
</div>)
}
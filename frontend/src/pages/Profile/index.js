import React,{ useEffect , useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api'


import logoImg  from  '../../assets/logo.svg';

import './styles.css'

export default function Profile (){

    const[incidents, setIncidents]=useState([])


    const ongId = localStorage.getItem('ongId')
   const ongName = localStorage.getItem('ongName')
   const history = useHistory()

        useEffect(()=>{
            api.get('profile',{
               headers: {
                Authorization: ongId,
               }

            }).then(response => {
                setIncidents(response.data)
            })

        },[ongId])

        async function handleDeletIncident(id){
            try{
                await api.delete (`incidents/${id}`,{
                    headers:{
                        Authorization: ongId,
                    }
                });
                setIncidents(incidents.filter(incidents=> incidents.id !==id  ))
            }catch (err){
                alert('erro ao deletar o caso')
            }
        }
        function handleLogout(){
            localStorage.clear();

            history.push('/');
          }
  
    return (
        <div className ="profile-conterner">
            <header>
                <img src ={logoImg} alt=" be the hero"/>
                <span>Bem vinda, {ongName} </span>
                <Link className="button" to="/incidents/new"> Cadastar Novo Caso</Link>
                <button onClick ={handleLogout} type="button">
                   <FiPower sizer ={18} color ="#e02041"/>
                    </button>
            </header>

            <h1> Casos Listados</h1>
            <ul>
               {incidents.map(incident=> ( 
               <li key ={incident.id}>
                    <strong>CASOS:</strong>
                     <p>{incident.title}</p>

                    <strong>DESCRIÇÂO:</strong>
                     <p>{incident.description}</p>

                    <strong>VALOR:</strong>
                    <p> {Intl.NumberFormat('pt-BR',{  style: 'currency', currency:'BRL'}).format(incident.value)}</p>
                    <button onClick ={()=>handleDeletIncident(incident.id)} type="button">
                        <FiTrash2 size ={20 }color="#a8a8b3" />
                    </button>
                </li>))}
               
            </ul>

        </div>
    )
}
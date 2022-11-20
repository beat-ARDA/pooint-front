
import './SubGrupo.css';
import { useState, useRef, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import axios from "axios";
import { useParams } from 'react-router-dom';

import { ObtenerSGrupos, ObtenerSubGrupByGrupId, ObtenerSubGrupBySGId} from '../../Services/SubGrupo_services';
import {ObtenerAvisosSGyGrupId, InsertarAviso} from '../../Services/Avisos_services';
import {ObtenerTareaByGrupId, InsertarTarea} from '../../Services/Tarea_service';
import {ObtenerTareasbyGrupId, InsertarTareas} from '../../Services/Tareas_services';

const SubGrupos = () => {
    const baseUrlObtenerChatUsuario = 'https://localhost:44349/api/ChatMessage/GetChatsMessages';
   
    const [AvisoText, setMessage] = useState('');
    const [TituloText, setTitulo] = useState('');
    const [DescText, setDesc] = useState('');

    const [connection, setConnection] = useState();
    const [messages, setMessages] = useState([]);
    const [messagesDb, setMessageDb] = useState([]);
    const [SubGrupDB, GetSubGrupIdSG] = useState([]);

    const {idSubGrupo} = useParams();

    const [dataAviso, setDataAvisos] = useState([]);
    const [dataTarea, setDataTarea] = useState([]);
    const [dataTareas, setDataTareas] = useState([]);

    const closeConnection = async () => {
        try {
            await connection.stop();
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        ObtenerSubGrupBySGId(idSubGrupo)
            .then((response) => {
                GetSubGrupIdSG(response);
                //closeConnection();
            })
            .catch((error) => {
                console.log(error);
            });

            ObtenerAvisosSGyGrupId(idSubGrupo)
            .then((response) => {
                setDataAvisos(response);
                closeConnection();
            })
            .catch((error) => {
                console.log(error);
            });    

            ObtenerTareaByGrupId(idSubGrupo)
            .then((response) => {
                setDataTarea(response);
                closeConnection();
            })
            .catch((error) => {
                console.log(error);
            });  

            ObtenerTareasbyGrupId(idSubGrupo)
            .then((response) => {
                setDataTareas(response);
                closeConnection();
            })
            .catch((error) => {
                console.log(error);
            });  
                
    }, [idSubGrupo,dataAviso,dataTarea,dataTareas]);

    return (
        <div className='chats container-fluid d-flex p-0'>
            <div className='row w-100 m-0 '>
                
                   <div className='col-3 text-center'> 
                   {
                    
                    SubGrupDB.map((grupos, index) =>
                    <div key={index}
                        onClick={() => {
                            
                        }}
                        className="div">
                        <div className="row align-items-center p-0">
                            <img src="FCFM.png" className="img-tarjeta-SG ms-2 mt-1 mb-1" />
                        </div>
                        <div className="row  align-items-center justify-content-center p-0">
                            <h2> {grupos.nombre}</h2>
                        </div>
                        <div className="row  align-items-center justify-content-end p-0">
                            <label className="pe-2">{grupos.fecha}</label>
                        </div>
                    </div>
                ) 
                   
                    
                    
                }
                    </div> 
                
                    
                    <div className='col-9 zona_Actividad'>
                      
                      <div className="row  mt-2">
                        <nav>
                            <div class="nav nav-tabs flex-column flex-sm-row navSubGrup" id="nav-tab" role="tablist">
                                <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                                    Avisos</button>
                                <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                                    Tareas</button>
                                <button class="nav-link" id="nav-Cusro-tab" data-bs-toggle="tab" data-bs-target="#nav-Cusro" type="button" role="tab" aria-controls="nav-Cusro" aria-selected="false">
                                    Tareas Entregadas</button>
                                <button class="nav-link" id="nav-Historial-tab" data-bs-toggle="tab" data-bs-target="#nav-Historial" type="button" role="tab" aria-controls="nav-Historial" aria-selected="false">
                                    4</button>
                            </div>
                        </nav>
                      </div>
                      <div className="row">
                            <div class="tab-content" id="nav-tabContent">

                                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                
                                <div class="pre-scrollable mt-2">
   
                                
                                    <div class="row">
                                        <div class="col-md-12">
                                        
                                            {
                                                dataAviso.map((Aviso, index) =>
                                                    <div key={index}
                                                        onClick={() => {
                                                            
                                                        }}
                                                        className="row w-100 m-0 tarjeta-chat py-2 mt-2 mb-1">
                                                        <div className="col-2 d-flex align-items-center p-0">
                                                            <img src="FCFM.png" className="img-tarjeta-chat ms-2" />
                                                            
                                                        </div>
                                                        <div className="col-2"><p> user:{Aviso.username}</p></div>
                                                        <div className="col-6 d-flex align-items-center justify-content-center p-0">
                                                            <label>{Aviso.texto}  </label>
                                                        </div>
                                                        <div className="col-2 d-flex align-items-center justify-content-end p-0">
                                                            <label className="pe-2">{Aviso.fecha}</label>
                                                        </div>
                                                    </div>
                                                    
                                                ) 
                                                    
                                            }

                                        </div>
                                    </div>
                                </div>

                                <div className="row text_aviso mt-4">
                                    <div class="input-group mb-3">
                                        <div className="col-2">Envia Aviso</div>
                                        <div className="col-7 p-0 d-flex align-items-center">
                                                <input onChange={e => setMessage(e.target.value)} value={AvisoText} type="text" className="form-control" placeholder="Message..."
                                                    aria-label="Message" aria-describedby="basic-addon1" />
                                        </div>
                                        <div className="col-2">
                                            <div class="buttonml input-group-append">
                                                <a onClick={() => {
                                                    
                                             
                                            InsertarAviso(localStorage.getItem("UserId"),idSubGrupo,AvisoText);
                                                                                               
                                            }} class="btn btn-primary" >Button</a>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                                
                            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">

                                <div className="row mt-2">
                                    <div className="col-4">
                                    <input onChange={t => setTitulo(t.target.value)} value={TituloText} type="text" className="form-control" placeholder="Titulo"
                                                    aria-label="Message" aria-describedby="basic-addon1" />
                                        
                                    <input onChange={d => setDesc(d.target.value)} value={DescText} type="text" className="form-control" placeholder="Descripcion"
                                                    aria-label="Message" aria-describedby="basic-addon1" />
                                         <button onClick={() => {
                                                    
                                                    alert(TituloText);    
                                                    alert(DescText);  
                                                    InsertarTarea(TituloText,DescText,idSubGrupo);
                                                    //setMessage('');                                                    
                                                    }} class="" type="button">Crear tarea</button>
                                    </div>
                                </div>                       

                                 <table class="table table-hover mt-1">
                                        <thead>
                                        <tr>
                                            <th class="table-secondary" scope="col">Tarea</th>
                                            <th class="table-secondary" scope="col">puntos_max</th>
                                            <th class="table-secondary" scope="col">Descripcion</th>
                                            <th class="table-secondary" scope="col">Fecha</th>
                                            <th class="table-secondary" scope="col">Entregar</th>
                                        </tr>
                                        </thead>
                                        <tbody class="overflow-auto table-light" >

                                            
                                        {
                                                dataTarea.map((Tarea, index) =>
                                                    <tr key={index}
                                                        onClick={() => {
                                                            
                                                        }}
                                                        >   
                                                            <th scope="col">{Tarea.titulo}</th>
                                                            <td scope="col">{Tarea.puntos_max}</td>
                                                            <td scope="col">{Tarea.descripcion}</td>
                                                            <th scope="col">{Tarea.fecha}</th>
                                                            <td scope="col"> <button onClick={() => {
                                                    
                                                    alert(Tarea.titulo);     
                                                    InsertarTareas(parseInt(localStorage.getItem("UserId").toString()),Tarea.id_Tarea,idSubGrupo);
                                                    //setMessage('');                                                    
                                                    }} >Entregar</button></td>
                                                        
                                                    </tr>
                                                    
                                                ) 
                                                    
                                            }

                                            

                                        </tbody>
                                 </table>

                                           

                            </div>
                            <div class="tab-pane fade" id="nav-Cusro" role="tabpanel" aria-labelledby="nav-contact-tab">


                                <table class="table table-hover ">
                                        <thead>
                                        <tr>
                                            <th class="table-secondary" scope="col">#</th>
                                            <th class="table-secondary" scope="col">Tarea</th>
                                            <th class="table-secondary" scope="col">fecha</th>
                                            <th class="table-secondary" scope="col">puntos_max</th>
                                        </tr>
                                        </thead>
                                        <tbody class="overflow-auto table-light" >


                                            {
                                                dataTareas.map((Tareas, index) =>
                                                    <tr key={index}
                                                        onClick={() => {
                                                            
                                                        }}
                                                        >
                                                        <th scope="col">{Tareas.titulo}</th>
                                                        <td scope="col">{Tareas.username}</td>
                                                        <td scope="col">{Tareas.puntos_max}</td>
                                                        <td scope="col">{Tareas.fecha}</td>   
                                                        
                                                    </tr>
                                                    
                                                ) 
                                                    
                                            }
                    
                                        </tbody>
                                </table> 

                               

                            </div>
                            <div class="tab-pane fade" id="nav-Historial" role="tabpanel" aria-labelledby="nav-contact-tab">
                                <p>...4</p>
                                    
                            </div>

                        </div>
                      </div>

                      
                    </div> 
                
            </div>
        </div>
    );
}

export default SubGrupos;
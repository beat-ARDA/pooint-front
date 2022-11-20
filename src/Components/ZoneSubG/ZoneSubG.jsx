import { useState, useRef, useEffect } from "react";
import './ZoneSubG.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip, faPaperPlane, faVideoCamera, faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { ObtenerSubGrupByGrupId, ObtenerSubGrupBySGId, InsertarSGrup } from '../../Services/SubGrupo_services';

import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const ZoneSubG = ({
  idGrup}) => {
    const baseUrlInsertarMessage = 'https://localhost:44349/api/ChatMessage'; 
    
    const [nombreISG, setMessage] = useState('');
    const [dataUsers, setDataUsers] = useState([]);

    const [dataGrupos, setDataSGrupos] = useState([]);
    
    const navigate = useNavigate()

    useEffect(() => {
      ObtenerSubGrupByGrupId(idGrup)
            .then((response) => {
                setDataSGrupos(response);
                closeConnection();
            })
            .catch((error) => {
                console.log(error);
            });
                
    }, [dataGrupos]);

    return (
        
            
              
           
               <div class="container text-center">
                 
                <div class="row ZonG" >

                    <div class="col-3 ">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Agregar SubGrupo</h5>
                            <input onChange={e => setMessage(e.target.value)} value={nombreISG}  type="text" className="form-control" placeholder="Message..."
                                                    aria-label="Message" aria-describedby="basic-addon1" />
                            <p class="card-text">de grupo <p>{idGrup}</p></p>
                            <a href="#" onClick={() => {
                              //alert(nombreISG);
                              InsertarSGrup(nombreISG,idGrup);
                              setMessage('');                                                    
                            }} class="btn btn-primary">Agregar</a>
                          </div>
                        </div>
                    </div>
           

                    {
                      
                      dataGrupos.map((grupos, index) =>
                      <div key={index}
                          onClick={() => {
                              alert(grupos.id_SubGrupo);
                              navigate(`/SubGrupo${grupos.id_SubGrupo}`);
                              
                            }}
                          className="col-3 ">
                            
                              <div class="card">
                                <div class="card-body">
                                  <h5 class="card-title">{grupos.nombre}</h5>
                                  <p class="card-text">de grupo <p>{grupos.id_SubGrupo}</p></p>
                                  <p>{index}</p>
                                </div>
                              </div>
                          
                      </div>
                    ) 
                    }

                    </div>

               </div>


              
                
            
            
        
    );
}

export default ZoneSubG;



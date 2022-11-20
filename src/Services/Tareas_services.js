import axios from 'axios';
import {
    baseUrlGetTaerasbyIDSG,
    baseUrlPostTareas
} from './constantes';




const ObtenerTareasbyGrupId = async (id_SubGrupo) => {
    let response;
    try {
        response = await axios.get(baseUrlGetTaerasbyIDSG, { params: { id_SubGrupo: id_SubGrupo } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}



const InsertarTareas= async (id_user,id_Tarea,id_SubGrupo) => {
    let response;
    try {
        id_user = parseInt(id_user)
        id_Tarea = parseInt(id_Tarea)
        id_SubGrupo = parseInt(id_SubGrupo)
        //console.log(typeof(id_user))
        //console.log(id_user)
        response = await axios.post(baseUrlPostTareas, { id_user,id_Tarea,id_SubGrupo });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

export { ObtenerTareasbyGrupId, InsertarTareas }
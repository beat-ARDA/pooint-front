import axios from 'axios';
import {
    baseUrlGetTareabyIDSG,
    baseUrlPostTarea
} from './constantes';


const ObtenerTareaByGrupId = async (id_SubGrupo) => {
    let response;
    try {
        response = await axios.get(baseUrlGetTareabyIDSG, { params: { id_SubGrupo: id_SubGrupo } });
    } catch (e) {
        throw new Error(e.message)
    }
    return response?.data ? response?.data : null
}


const InsertarTarea = async (Titulo,Descripcion,id_SubGrupo) => {
    let response;
    try {
        id_SubGrupo = parseInt(id_SubGrupo)
        //console.log(typeof(id_user))
        //console.log(id_user)
        response = await axios.post(baseUrlPostTarea, { Titulo, Descripcion, id_SubGrupo });
    } catch (e) {
        throw new Error(e.message)
    }

    return response?.data ? response?.data : null
}

export { ObtenerTareaByGrupId, InsertarTarea}
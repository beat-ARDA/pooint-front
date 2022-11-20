const baseUrlGetAllUsers = 'https://localhost:44349/api/User/GetAllUsers';
const baseUrlPostChat = 'https://localhost:44349/api/Chats/InsertChat';
const baseUrlEliminarChatPorId = 'https://localhost:44349/api/Chats/DeleteChatById';
const baseUrlObtenerChatsPorUsuario = 'https://localhost:44349/api/Chats/GetChatsByUserId';
const baseUrlObtenerChatExistente = 'https://localhost:44349/api/Chats/GetChatByIds';
const baseUrlPostChatTeam = 'https://localhost:44349/api/ChatsTeams/InsertChatTeam';
const baseUrlObtenerChatTeamId = 'https://localhost:44349/api/ChatsTeams/GetChatTeamId';
const baseUrlObtenerChatTeamById = 'https://localhost:44349/api/ChatsTeams/GetChatTeamById';
const baseUrlPostChatTeamsUsers = 'https://localhost:44349/api/ChatsTeamsUsers/InsertChatTeamUser';
const baseUrlObtenerChatTeamsUsersByUserId = 'https://localhost:44349/api/ChatsTeamsUsers/GetChatsTeamsUserByUserId';
const baseUrlObtenerChatTeamsMessages = 'https://localhost:44349/api/ChatTeamsMessages/GetChatsTeamsMessages';
const baseUrlPostChatTeamsMessages = 'https://localhost:44349/api/ChatTeamsMessages';
const baseUrlGetallGrups = 'https://localhost:44349/api/grupos/GetAllGrups';
const baseUrlGetallSGrups = 'https://localhost:44349/api/SubGrupos';
const baseUrlPostSubGrp = 'https://localhost:44349/api/SubGrupos';
const baseUrlSGrupsIDGrp = 'https://localhost:44349/api/SubGrupos/GetSubGrupByGrupoId';
const baseUrlSGrupsID = 'https://localhost:44349/api/SubGrupos/GetSubGrupBySGId';
const baseUrlPostAvisos = 'https://localhost:44349/api/Avisos';
const baseUrlGetAvisosSubID = "https://localhost:44349/api/Avisos/GetAvisoByGrupoId";
const baseUrlGetTareabyIDSG = "https://localhost:44349/api/Tarea/GetSubGrupByGrupoId";
const baseUrlGetTaerasbyIDSG = "https://localhost:44349/api/Tareas/GetTareasBySGrupoId";
const baseUrlPostTarea = 'https://localhost:44349/api/Tarea'; 
const baseUrlPostTareas = 'https://localhost:44349/api/Tareas';

export {
    baseUrlGetAllUsers,
    baseUrlPostChat,
    baseUrlPostChatTeam,
    baseUrlObtenerChatsPorUsuario,
    baseUrlEliminarChatPorId,
    baseUrlObtenerChatExistente,
    baseUrlPostChatTeamsUsers,
    baseUrlObtenerChatTeamId,
    baseUrlObtenerChatTeamById,
    baseUrlObtenerChatTeamsUsersByUserId,
    baseUrlObtenerChatTeamsMessages,
    baseUrlPostChatTeamsMessages,
    baseUrlGetallGrups,
    baseUrlGetallSGrups,
    baseUrlSGrupsIDGrp,
    baseUrlSGrupsID,
    baseUrlPostSubGrp,
    baseUrlGetAvisosSubID,
    baseUrlGetTareabyIDSG,
    baseUrlGetTaerasbyIDSG,
    baseUrlPostAvisos,
    baseUrlPostTarea,
    baseUrlPostTareas
}
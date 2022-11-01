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
    baseUrlObtenerChatTeamsUsersByUserId
}
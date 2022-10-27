const baseUrlGetAllUsers = 'https://localhost:44349/api/User/GetAllUsers';
const baseUrlPostChat = 'https://localhost:44349/api/Chats/InsertChat';
const baseUrlPostChatTeam = 'https://localhost:44349/api/ChatsTeams/InsertChatTeam';
const baseUrlObtenerChatsPorUsuario = 'https://localhost:44349/api/Chats/GetChatsByUserId';
const baseUrlEliminarChatPorId = 'https://localhost:44349/api/Chats/DeleteChatById';
const baseUrlObtenerChatExistente = 'https://localhost:44349/api/Chats/GetChatByIds';

export {
    baseUrlGetAllUsers,
    baseUrlPostChat,
    baseUrlPostChatTeam,
    baseUrlObtenerChatsPorUsuario,
    baseUrlEliminarChatPorId,
    baseUrlObtenerChatExistente
}
import axios from 'axios';

 //Base url = https://api-proccessos-ufs.herokuapp.com
 
 //processos/ (TODOS OS PROCESSOS)

 //processos/123 (PROCESSOS com id 123)

 //Base url https://api-proccessos-ufs.herokuapp.com/processos/

 const api = axios.create({
     baseURL: 'https://api-proccessos-ufs.herokuapp.com'
 });

 export default api;
import axios from 'axios'


const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params:{
        api_key: '86806904ca81ea534876a2c497515096',
        lenguage: 'es-ES'
    }
})

export default movieDB;
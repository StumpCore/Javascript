import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () =>{
    return axios.get(baseURL)
}

const create = newObject =>{
    return axios.post(baseURL, newObject)
}

const update = (id,newObject) =>{
    return axios.put(`${baseURL}/${id}`, newObject)
}

const remove = (id) => {
    async function deleteEntry(id) {
        await axios.delete(`${baseURL}/${id}`)
        return axios.get(baseURL)
    }
    deleteEntry(id)
    return axios.get(baseURL)
}

export default {getAll, create, update,remove}
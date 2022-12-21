import { create } from 'apisauce'
import cache from '../utility/cache';
import authStorage from '../auth/storage';

const apiClient = create({
    baseURL: "http://192.168.0.101:9000/api"
})

// apiClient.get('/listings').then(response=>{
//     if(!response.ok){
//         response.problem
//     }
// })


//adding api token for every request
apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await authStorage.getToken()
    if (!authToken) return
    //add authToken to the headers
    request.headers['x-auth-token'] = authToken;
})


// Caching data from server
const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {
    // Before
    const response = await get(url, params, axiosConfig)
    if (response.ok) {
        cache.store(url, response.data);
        return response
    }
    const data = await cache.get(url)
    return data ? { ok: true, data } : response
}

export default apiClient;
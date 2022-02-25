import axios from "axios";

class AuthServices{

    async Register(user){
        const {data} = await axios.post('/register/',user,{validateStatus:false})
        return data
    }

    async Login(user){
        const {data} = await axios.post('/login/',user,{validateStatus:false})
        return data
    }
}

const auth_services = new AuthServices()
export default auth_services
import axios from "axios";


export default {
    getVendors: function(){
        return axios.get("/api/detail");
    }
}

import axios from "axios";


export default {
    getVendors: function(){
        return axios.get("/api/detail");
    },
    bookingHelper: function(send){
        return axios.put("/api/booking", send);
    }
}

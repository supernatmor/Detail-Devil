import axios from "axios";

export default {
  getVendors: function() {
    return axios.get("/api/detail");
  },
  bookingHelper: function(send) {
    return axios.put("/api/booking", send);
  },
  getBooking: function() {
    //ignore the man behind the curtain
    window.location.assign("http://localhost:3000/booking");
  }
};

const axios = require("axios");

module.exports = {
    createUser: function (data) {
        return axios.post("/api/user/create", data);
    }
}

// prob not needed
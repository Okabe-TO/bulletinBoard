import axios from "axios";

const instance = axios.create({
	baseURL: "https://virtserver.swaggerhub.com/INFO_3/BulletinBoardApplication/1.0.0"
})

export default instance
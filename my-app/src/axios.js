import axios from "axios";

const instance = axios.create({
	baseURL: "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com"
})

export default instance
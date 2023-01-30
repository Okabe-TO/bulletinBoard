import React from "react";
import axios from "./axios"
import { useState, useEffect } from 'react';
import requests from './Request';


function Thread() {
	/**
	 * とりあえず新着スレッドを取ってくる
	 */
	const [threads, setThreads] = useState([])
	useEffect(() => {
		async function fetchData() {
			await axios.get(requests)
			.then((response) => {
				//console.log(response.data)
				setThreads(response.data)
			})
		}
		fetchData()
	}, [])

	return(
		<div className='Thread'>
			{threads}
		</div>
	)
}

export default Thread
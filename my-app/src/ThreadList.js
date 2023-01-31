import React from "react";
import axios from "./axios"
import { useState, useEffect } from 'react';
import requests from "./Request";


function ThreadList() {
	/**
	 * スレッドをGET
	 */
	const [threads, setThreads] = useState([])
	useEffect(() => {
		async function fetchData() {
    	// fetchThread: `threads?offest=0`
			await axios.get(requests.fetchThread)
			.then((response) => {
				setThreads(response.data)
				console.log(response.data)
			})
			.catch((error) => {
				console.log("ThreadListでのエラー!")
			})
		}
		fetchData()
	}, [])

	/**
	 * スレッドをPOST
	 */
	
	const [newThreadName, setNewThreadName] = useState("")
	// イベント
	const handleChange = (e) => {
		setNewThreadName(e.target.value)
		console.log(newThreadName)
	}
	// POST
	async function postData() {
		// fetchThread: `threads/posts`
		await axios.post(requests.postNewThread, {
			string: newThreadName
		})
			.then((response) => {
				//setThreads([...threads, response.data])
			})
			.catch((error) => {
				console.log(error)
			})
	}

	return(
		<>
			<div className="ThreadTitle">
				スレッド一覧
			</div>
			<div className='ThreadList'>
				<ul>
					{
						threads.map((data, id) => (
							<li key={id} value={data.title}> 
								{ data.title } 
							</li>
						))
					}
				</ul>
			</div>
			<div className='MakeNewThread'>
				<input onChange={handleChange} />
				<button onClick={postData}> 新規スレッド作成 </button>
				<p>{newThreadName}</p>
			</div>
		</>
	)
}

export default ThreadList
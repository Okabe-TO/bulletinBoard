import React from "react";
import axios from "./axios";
import { useState, useEffect } from 'react';
import requests from "./Request";
import { Link, useLocation } from "react-router-dom";


function Home() {
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
				console.log(error)
			})
		}
		fetchData()
	}, [])

	return(
		<div className="Home">
			<div className="ThreadTitle">
				スレッド一覧
			</div>
			<div className='ThreadList'>
				<ul >
					{
						threads.map((data, id) => (
							<li key={id} value={data.title} > 
								{ data.title } <Link to={`/thread/:${id}`}>→</Link>
							</li>
						))
					}
				</ul>
			</div>
			<div className='MakeNewThread'>
				<Link to="/thread/new" >
          新規スレッド作成
        </Link>
			</div>
		</div>
	)
}

export default Home
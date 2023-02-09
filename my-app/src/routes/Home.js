import React from "react";
import axios from "./axios";
import { useState, useEffect } from 'react';
import requests from "./Request";
import { Link } from "react-router-dom";


function Home() {
	/**
	 * スレッドをGET
	 */
	const [threads, setThreads] = useState([])
	useEffect(() => {
		async function fetchData() {
    	// fetchThread: `threads?offest=0`
			try {
				const res = await axios.get(requests.fetchThread)
				setThreads(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchData()
	}, [])

	return(
		<div className="Home">
			<div className="ThreadTitle">
				スレッド一覧
			</div>
			<div className='ThreadList'>
				<ul className="Home-ul">
					{
						threads.map((data, index) => (
							<li key={index} value={data.title} className="Home-li">
								{ data.title } <Link to={`/thread/${data.id}`}>→</Link>
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
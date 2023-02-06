import React from "react";
import axios from "../axios";
import { useState, useEffect } from 'react';
import requests from "../Request";
import { Link, useParams } from "react-router-dom";

function Thread() {
  /**
   * スレッドのid取得
   */
  let {id} = useParams();

  /**
	 * ある掲示板のスレッドの内容をGET
	 */
	const [threadContent, setThreadContent] = useState([])
	useEffect(() => {
		async function fetchData() {
    	// fetchThread: `threads?offest=0`
			await axios.get(requests.fetchThread)
			.then((response) => {
				setThreadContent(response.data)
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
		}
		fetchData()
	}, [])

  /**
   * スレッド内で発言を行う（POST）
   */
	const [content, setContent] = useState("")
	// イベント
	const handleChange = (e) => {
		setContent(e.target.value)
		console.log(content)
	}
	// POST
	async function postData() {
		await axios.post(requests.postNewThread, {
        string: content
      })
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
    }


  return(
    <div className="Home">
      <Link to="/" className='Link-to-Home'>
        Link to Home
      </Link>
      <div className="Content-wrapper">
        <p>{content}</p>
        <div className="input">
          <textarea value={content} onChange={handleChange} />
        </div>
        <button className="ThreadButton">送信</button>
      </div>
    </div>
  )
}

export default Thread
import React from "react";
import axios from "../axios";
import { useState, useEffect } from 'react';
//import requests from "../Request";
import { Link, useParams } from "react-router-dom";

function Thread() {
  /**
   * スレッドのid取得
   */
  let {id} = useParams()

  /**
	 * ある掲示板のスレッドの内容をGET
	 */
	const [threadContent, setThreadContent] = useState( {id: '', posts: [{id: '', post: ''}]} )
	async function fetchData() {
		try {
			const res = await axios.get(`threads/${id}/posts?offest=0`)
			setThreadContent(res.data)
			console.log("<<< res.data >>>")
			console.log(res.data)
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		fetchData()
		// eslint-disable-next-line
	}, [])

  /**
   * スレッド内で発言を行う（POST）
   */
	const [content, setContent] = useState("")
	// イベント
	const handleChange = (e) => {
		setContent(e.target.value)
	}
	// POST
	async function postData() {
		try {
			const res = await axios.post(`threads/${id}/posts`, { post: content })
			console.log(res.data)
			fetchData()
		} catch (error) {
			console.log(error)
		}
  }


  return(
    <div className="Home">
      <Link to="/" className='Link-to-Home'>
        Link to Home
      </Link>

			<div className="Thread-Content-List">
				<ul className="Thread-ul">
					{
						// useEffectより先にmapが実行されるため，
						// 三項演算子"?"を使い，postsがnullの時.map以降を実行しない
						(threadContent.posts)?.map((data, index) => (
							<li key={index} value={data.post} className="Thread-li">
								{data.post}
							</li>
						))
					}
				</ul>
			</div>
			<div className="Content-input-wrapper">
				<div className="input">
					<textarea value={content} onChange={handleChange} />
				</div>
				<button className="ThreadButton" onClick={postData}>送信</button>
			</div>
    </div>
  )
}

export default Thread

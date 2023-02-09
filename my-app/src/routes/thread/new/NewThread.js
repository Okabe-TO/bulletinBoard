import { useState } from 'react';
import requests from '../../Request';
import axios from "../../axios"
import { Link } from "react-router-dom"

function NewThread() {
  /**
	 * スレッドをPOST
	 */
	const [newThreadName, setNewThreadName] = useState("")
	// イベント
	const handleChange = (e) => {
		setNewThreadName(e.target.value)
	}
	// POST
	async function postData() {
		await axios.post(requests.postNewThread, {
			title: newThreadName
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
      <div className='NewThreadContent'>
        <p className='ThreadTitle'>スレッド新規作成</p>
        <input value={newThreadName} onChange={handleChange} />
        <button className='newbotton' onClick={ postData }>作成</button>
        <button className='newbotton' onClick={ () => setNewThreadName('') }>クリア</button>
      </div>
    </div>
  )
}

export default NewThread
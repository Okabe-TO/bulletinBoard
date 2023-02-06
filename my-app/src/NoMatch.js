import { Link } from "react-router-dom";
function NoMatch() {
  return (
    <>
      <h2>このぺーじはそんざいしません。</h2>
      <Link to="/" className='Link-to-Home'>
        Link to Home
      </Link></>
  )
}

export default NoMatch;
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <>
      Sorry, cannot Foud a page
      <div>
        <Link to={'/'}>Go Back To homepage</Link>
      </div>
    </>
  )
}

export default Notfound

import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch'
import { Link } from 'react-router-dom'

const Blogdetail = () => {
  const { id } = useParams()
  const history = useHistory()

  const { data, isLoading, error } = useFetch(
    'http://localhost:9000/blogs/' + id,
  )

  console.log(data)

  const deleteHandler = () => {
    fetch('http://localhost:9000/blogs/' + data.id, { method: 'DELETE' }).then(
      () => {
        history.push('/')
      },
    )
  }

  return (
    <div className="blog-details">
      {error && <div> {error} </div>}
      {isLoading && <div>Loading.........</div>}
      {data && (
        <article>
          <h2>{data.title}</h2>
          <p>Written By : {data.author}</p>
          <div>{data.body}</div>
          <Link to={`/update/blogs/${id}`}>
            <button>Edit</button>
          </Link>
          <button onClick={deleteHandler}>Delete</button>
        </article>
      )}
    </div>
  )
}

export default Blogdetail

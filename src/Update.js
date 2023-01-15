import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import useFetch from './useFetch'

const Update = () => {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('Mario')
  const [isAdding, setisAdding] = useState(false)
  const history = useHistory()
  const { data } = useFetch('http://localhost:9000/blogs/' + id)
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(title,body,author)
    const blog = { title, body, author }
    console.log(blog)

    setisAdding(true)

    setTimeout(() => {
      // fetch('http://localhost:9000/blogs/' + data.id, {
      //   method: 'DELETE',
      // }).then(() => {
      //   console.log('Post deleted')
      // })

      fetch('http://localhost:9000/blogs/' + data.id, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      }).then(() => {
        setisAdding(false)
        console.log('Post added')
        history.push('/')
      })
    }, 1000)
  }

  console.log(title, body, author)
  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <label>Blog Title : </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        ></input>
        <label>Blog body : </label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value)
          }}
        ></textarea>
        <label>Blog author : </label>
        <select
          required
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value)
          }}
        >
          <option>Mario</option>
          <option>Jesus</option>
        </select>
        {!isAdding && <button>Update a Blog</button>}
        {isAdding && <button>Updating a Blog...</button>}
      </form>
    </div>
  )
}

export default Update

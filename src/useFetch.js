import { useEffect, useState } from 'react'
const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isLoading, setisLoding] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Error 404')
          }
          return res.json()
        })
        .then((data) => {
          setError(null)
          setData(data)
          setisLoding(false)
        })
        .catch((err) => {
          setError(err.message)
          setisLoding(false)
        })
    }, 1000)
  }, [url])

  return { data, isLoading, error }
}

export default useFetch

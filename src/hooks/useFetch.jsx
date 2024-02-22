import { useState, useEffect } from 'react'

import axios from 'axios'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = () => {
        const controller = new AbortController();

        axios.get(url, {
            signal: controller.signal
        })
        .then((data) => {
            if (!data) {
                setLoading(false)
                setData(null)
                throw Error ("We couldn't fetch data")
            }
            setData(data.data.results)
            setLoading(false)
        })
        .catch((err) => {
            
            setError(err.message)
            console.error(error)

            setLoading(false)
        })

        return () => {
            controller.abort()
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])

    return { data, loading, error }
}
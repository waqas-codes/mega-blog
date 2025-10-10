import React, {useState, useEffect} from 'react'
import { Link, useNavigate, useParams  } from 'react-router-dom'
import AppwriteService from '../appwrite/config'
import { Button, Container } from '../components'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
s
function Post() {
    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    const userData = useSelector((state) => state.auth.userData)

    const isAutor = 

  return (
    <div>Post</div>
  )
}

export default Post
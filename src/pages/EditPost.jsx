import React, {useState, useEffect, use}from 'react'
import { useNavigate, useParams  } from 'react-router-dom'
import AppwriteService from '../appwrite/config'
import { Container, PostCard } from '../components'

function EditPost() {

    const [post, setPost] = useState(null)
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug) {
            AppwriteService.getPost(slug).then((post) =>{
                if(post) setPost(post)
            })
        } else  navigate("/")
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost
import React, { use } from 'react'
import {useForm} from 'react-hook-form'
import {Button, input, RTE, Select } from '../index'
import AppwriteService from '../../appwrite/config'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function PostForm({post}) {

    const {register, handleSubmit, setValue, watch, control, getValues,} = useForm({
        defaultValues: {
            title: post?.title || '',
            content: post?.content || '',
            slug: post?.$id || '',
            status: post?.status || 'active',
        },
    })

    const navigate = useNavigate()
    const userData = useSelector((state) => state.auth.userData)

    const submit = async (data) => {
        if(post) {
            const file = data.image[0] ? await AppwriteService.uploadFile(data.image[0]) : null;

            if(file) {
                AppwriteService.deleteFile(post.featuredImageId);
            }

            const dbPost = AppwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined
            });

            if(dbPost) {
                navigate(`/post/${post.$id}`)
            }
        }else{
            const file = AppwriteService.uploadFile(data.image[0]);

            if(file) {
                const fieldId = file.$id;
                data.featuredImageId = fieldId;
                const dbPost = await AppwriteService.createPost({
                    ...data,
                    userId: userData.$id
                })
                if(dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                }
            }
        }
    }

  return (
    <div>PostForm</div>
  )
}


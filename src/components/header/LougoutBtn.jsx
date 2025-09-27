import React from 'react'
import AuthService from '../../appwrite/auth'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'

function LougoutBtn() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        AuthService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
            onClick={logoutHandler}>LougoutBtn</button>
    )
}

export default LougoutBtn
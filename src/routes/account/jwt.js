import React, { useEffect } from 'react'
import t from '~t'
import { Redirect, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { errorReason } from '~data/selectors/user'
import { loginWithJWT } from '~data/actions/user'

import { Error } from '~co/overlay/dialog'
import Preloader from '~co/common/preloader'
import Button from '~co/common/button'

function JWT({ location: { search } }) {
    const dispatch = useDispatch()
    const error = useSelector(state=>errorReason(state).jwt)

    useEffect(()=>{
        const { token } = Object.fromEntries(new URLSearchParams(search))||{}
        dispatch(loginWithJWT(token))
    }, [search])

    useEffect(()=>{
        if (error)
            Error(error)
    }, [error])

    if (error)
        return <Redirect to='/' />

    return (
        <Button 
            data-block
            disabled>
            <Preloader />
            {t.s('signIn')}…
        </Button>
    )
}

export default withRouter(JWT)
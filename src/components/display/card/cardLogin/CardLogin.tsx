import React from 'react'
import { TextField } from '@mui/material'
import Button from '../../../general/button/Button'
import Text from '../../../general/text/Text'
import IconGoogle from '../../../icon/IconGoogle'
import logSing from '../../../../assets/img/logSing.png'
import './cardLogin.scss'

type Props = {
    textLS: string
}

const CardLogin = ({ textLS }: Props) => {
    return (
        <div className='container_login'>
            <div className="card_login">
                <img src={logSing} alt="" />
                <div className='wrap_textLog'>
                    <Text tag='h1' text={textLS} className='title_LS' />
                    <div className='log_google'>
                        <IconGoogle />
                        <Text tag='p' text='Connect with Google' className='text_login' />
                    </div>
                    <div>
                        <Text tag='p' text='Or' className='text_login or' />
                    </div>
                    <div className='input-log'>
                        <TextField fullWidth label="E-mail" variant="standard" type='email' />
                        <TextField label="Password" variant="standard" type='password' />
                    </div>
                    <Text tag='p' text='Forget password?' className='forget' />
                    <Button className="btn_sing btn--orange " text="Login" />
                    <div className="account">
                        <Text tag='p' text='Dont have an account? ' className='forget' />
                        <Text tag='p' text='Sign up ' className='forget green' />
                    </div>
                </div>
            </div>


        </div>

    )
}

export default CardLogin
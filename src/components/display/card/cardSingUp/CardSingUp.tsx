import React, { useState } from 'react'
import { TextField } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from '../../../general/button/Button'
import Text from '../../../general/text/Text'
import IconGoogle from '../../../icon/IconGoogle'
import logSing from '../../../../assets/img/logSing.png'
import './cardSingUp.scss'
type Props = {
    textLS: string
}

const CardSingUp = ({ textLS }: Props) => {
    const [user, setUser] = useState({})
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const postUser = async () => {
        try {
            const data = await axios.post("http://localhost:4400/api/user", user, {
                headers: {
                    "Content-Type": "application/json"
                },
            })
            console.log(data);
            localStorage.setItem('token', data.data.token)
        }
        catch (error: any) {
            console.error(`${error.message}`);
        }


    }
    return (
        <div className='container_singUp'>
            <div className="card_singUp">
                <img src={logSing} alt="" />
                <div className="wrap_textSingUp">
                    <Text tag='h1' text={textLS} className='title_LS' />
                    <div className='log_google'>
                        <IconGoogle />
                        <Text tag='p' text='Connect with Google' className='text_login' />
                    </div>
                    <div>
                        <Text tag='p' text='Or' className='text_login or' />
                    </div>
                    <div className='input-sing'>
                        <TextField onChange={handleChange} label="user Name" variant="standard" name='username' type='text' />

                        <TextField onChange={handleChange} label="E-mail" variant="standard" name='email' type='email' />
                        <TextField onChange={handleChange} label="Password" variant="standard" name='password' type='password' />
                    </div>
                    <Text tag='p' text='By creating an account, you agree to our  Terms of use and Privacy policy' className='forget' />
                    <Button onClick={postUser} className="btn_sing btn--orange " text="Sign up" />
                    <div className="account">
                        <Text tag='p' text='Already have an account? ' className='forget' />
                        <Link to='/login'>
                            <Text tag='p' text='Log in  ' className='forget green' />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CardSingUp
import React, {useEffect} from 'react';
import useInput from "../../hooks/useInput";
import styled from "styled-components";
import Button from '../../components/UI/Button'
import Form from './../../components/UI/Form'
import Input from "../../components/UI/Input";
import {useDispatch, useSelector} from "react-redux";
import {fetchLoginData} from "../../redux/actions";
import {StateModel} from "../../models";

const Display = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
`
const Title = styled.p`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.fg};
  font-weight: 600;
  margin-bottom: 60px;
`

const Login = () => {
    const emailInput = useInput('');
    const passwordInput = useInput('');
    const dispatch = useDispatch()
    const authData = useSelector((state: StateModel) => state.app.authData)

    const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchLoginData({email: emailInput.value, password: passwordInput.value}))
    }

    useEffect(() => {
        if (authData.success) {
            localStorage.setItem('token', authData.token)
        }
    }, [authData])

    return (
        <Display>
            <Form onSubmit={formHandler}>
                <Title>Login</Title>
                <Input placeholder="Your email" type="email" name="email" {...emailInput}/>
                <Input placeholder="Your password" type="password" name="password" {...passwordInput}/>
                <Button style={{marginTop: '40px'}} type="submit" >Отправить</Button>
            </Form>
        </Display>

    );
};

export default Login;
import React from 'react';
import useInput from "../../hooks/useInput";
import Button from '../../components/UI/Button'
import Form from './../../components/UI/Form'
import Input from "../../components/UI/Input";
import styled from "styled-components";
import {fetchLoginData, fetchRegistrationData} from "../../redux/actions";
import {useDispatch} from "react-redux";

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

const Registration = () => {
    const nameInput = useInput('');
    const loginInput = useInput('');
    const emailInput = useInput('');
    const passwordInput = useInput('');
    const repeatPasswordInput = useInput('');

    const dispatch = useDispatch()

    const formHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        dispatch(fetchRegistrationData({name: nameInput.value, login: loginInput.value,
            repeatPassword: repeatPasswordInput.value, email: emailInput.value, password: passwordInput.value}))
    }

    return (
        <Display>

            <Form onSubmit={formHandler}>
                <Title>Registration</Title>
                <Input placeholder="Your nickname" type="text" name="name" {...nameInput} />
                <Input placeholder="Your login" type="text" name="login" {...loginInput} />
                <Input placeholder="Your email" type="email" name="email" {...emailInput}/>
                <Input placeholder="Your password" type="password" name="password" {...passwordInput}/>
                <Input placeholder="Repeat password" type="password" name="repeatPassword" {...repeatPasswordInput}/>
                <Button style={{marginTop: '40px'}} type="submit" >Отправить</Button>
            </Form>
        </Display>
    );
};

export default Registration;
import React from 'react';
import {Divider, IconButton, Stack} from "@mui/material";
import styled, {useTheme} from "styled-components";

const Form = styled.form`
  width: 100%;
`

const MyChat = styled(Stack)`
  margin-top: 1.5rem;
  padding: 10px 5px;
  width: 100%;
  background: ${props => props.theme.colors.primaryBg};
  align-items: center;
`

const ChatInput = styled.input`
  width: 90%;
  background: none;
  font-size: 1.2rem;
  border: none;
  outline: none;
  color: ${props => props.theme.colors.fg};
`
const Icon = styled.svg`
  width: 1.3rem;
  height: 1.3rem;
`

const Chat = () => {
    const theme = useTheme()
    return (
        <Form>
            <MyChat direction='row'>

                <ChatInput type='text' placeholder='Type something...' />

                <IconButton>
                    <Icon width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={theme.colors.fg} d="M10.6257 9.77578C10.3048 10.1605 9.90331 10.4701 9.44958 10.6825C8.99585 10.8949 8.50099 11.005 8 11.005C7.49902 11.005 7.00415 10.8949 6.55042 10.6825C6.0967 10.4701 5.6952 10.1605 5.37433 9.77578C5.31145 9.70019 5.2343 9.63773 5.14728 9.59197C5.06026 9.5462 4.96507 9.51802 4.86716 9.50904C4.76925 9.50005 4.67053 9.51044 4.57663 9.53961C4.48274 9.56878 4.3955 9.61616 4.31992 9.67904C4.24433 9.74193 4.18187 9.81908 4.13611 9.9061C4.09034 9.99312 4.06216 10.0883 4.05318 10.1862C4.03503 10.384 4.09619 10.5808 4.22318 10.7335C4.68449 11.2875 5.26202 11.7333 5.91483 12.0392C6.56764 12.3451 7.27975 12.5037 8.00069 12.5037C8.72163 12.5037 9.43374 12.3451 10.0866 12.0392C10.7394 11.7333 11.3169 11.2875 11.7782 10.7335C11.8458 10.6584 11.8975 10.5705 11.9303 10.475C11.963 10.3795 11.9761 10.2783 11.9688 10.1776C11.9614 10.0769 11.9338 9.97875 11.8875 9.88899C11.8413 9.79923 11.7774 9.71975 11.6996 9.65533C11.6219 9.59091 11.5319 9.54287 11.4351 9.51411C11.3383 9.48535 11.2367 9.47646 11.1364 9.48797C11.0361 9.49948 10.9391 9.53115 10.8513 9.58109C10.7636 9.63102 10.6868 9.69819 10.6257 9.77854V9.77578ZM5.47245 7.49974C5.67022 7.50001 5.86363 7.44167 6.02825 7.33208C6.19287 7.22249 6.32133 7.06657 6.39739 6.88401C6.47345 6.70146 6.4937 6.50046 6.45558 6.3064C6.41747 6.11234 6.3227 5.93393 6.18325 5.7937C6.04379 5.65348 5.86591 5.55772 5.67206 5.51854C5.47822 5.47936 5.27711 5.4985 5.09413 5.57355C4.91116 5.6486 4.75454 5.77619 4.64404 5.94021C4.53354 6.10423 4.47413 6.29731 4.47331 6.49508C4.47616 6.75969 4.58217 7.01275 4.76877 7.20039C4.95538 7.38803 5.20785 7.49543 5.47245 7.49974ZM10.5027 5.6286C10.0894 5.61094 9.68181 5.73056 9.3436 5.96878C9.00538 6.20701 8.7555 6.55046 8.63293 6.94558C8.62128 7.02143 8.6333 7.09902 8.66735 7.16779C8.7014 7.23655 8.75583 7.29315 8.82321 7.32986C8.89059 7.36657 8.96765 7.38162 9.0439 7.37294C9.12014 7.36427 9.19185 7.3323 9.24927 7.28139L9.54776 7.01606C9.82551 6.81612 10.1591 6.70854 10.5013 6.70854C10.8435 6.70854 11.1771 6.81612 11.4548 7.01606L11.7478 7.27863C11.8053 7.33045 11.8774 7.3633 11.9543 7.37273C12.0312 7.38216 12.1091 7.36771 12.1774 7.33134C12.2458 7.29496 12.3013 7.23844 12.3365 7.16943C12.3716 7.10041 12.3846 7.02226 12.3738 6.94558C12.2559 6.54739 12.0069 6.20069 11.6673 5.96166C11.3277 5.72263 10.9173 5.60527 10.5027 5.6286ZM8 0C6.41775 0 4.87103 0.469192 3.55544 1.34824C2.23985 2.22729 1.21447 3.47672 0.608967 4.93853C0.00346627 6.40034 -0.15496 8.00887 0.153721 9.56072C0.462403 11.1126 1.22433 12.538 2.34315 13.6569C3.46197 14.7757 4.88743 15.5376 6.43928 15.8463C7.99113 16.155 9.59966 15.9965 11.0615 15.391C12.5233 14.7855 13.7727 13.7602 14.6518 12.4446C15.5308 11.129 16 9.58225 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842854 10.1217 0 8 0ZM8 14.5006C6.7154 14.5006 5.45964 14.1197 4.39153 13.406C3.32342 12.6923 2.49093 11.6779 1.99933 10.4911C1.50774 9.30426 1.37911 7.99832 1.62973 6.7384C1.88034 5.47848 2.49894 4.32117 3.40729 3.41281C4.31564 2.50446 5.47295 1.88587 6.73288 1.63525C7.9928 1.38464 9.29874 1.51326 10.4856 2.00486C11.6724 2.49646 12.6868 3.32895 13.4005 4.39706C14.1141 5.46517 14.4951 6.72092 14.4951 8.00553C14.4918 9.72712 13.8064 11.3773 12.5891 12.5946C11.3717 13.812 9.72159 14.4973 8 14.5006Z"/>
                    </Icon>
                </IconButton>
                <IconButton>
                    <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={theme.colors.fg} d="M3 2.66667C3 1.19391 4.34315 0 6 0C7.65685 0 9 1.19391 9 2.66667V8C9 9.47276 7.65685 10.6667 6 10.6667C4.34315 10.6667 3 9.47276 3 8V2.66667Z"/>
                        <path fill={theme.colors.fg} d="M1.5 7.68251C1.5 7.31432 1.16421 7.01584 0.75 7.01584C0.335786 7.01584 0 7.31432 0 7.68251V7.99997C0 10.7197 2.29027 12.964 5.25 13.292V14.6667H3.75C3.33579 14.6667 3 14.9651 3 15.3333C3 15.7015 3.33579 16 3.75 16H8.25C8.66421 16 9 15.7015 9 15.3333C9 14.9651 8.66421 14.6667 8.25 14.6667H6.75V13.292C9.70973 12.964 12 10.7197 12 7.99997V7.68251C12 7.31432 11.6642 7.01584 11.25 7.01584C10.8358 7.01584 10.5 7.31432 10.5 7.68251V7.99997C10.5 10.2091 8.48528 12 6 12C3.51472 12 1.5 10.2091 1.5 7.99997V7.68251Z"/>
                    </svg>

                </IconButton>
                <IconButton>
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={theme.colors.fg} d="M14.4409 8.17301L11.1589 14.0691C10.5786 15.1117 9.54947 15.8285 8.29794 16.0619C7.04642 16.2954 5.675 16.0263 4.48539 15.3139C3.29577 14.6016 2.38541 13.5042 1.95457 12.2633C1.52372 11.0224 1.60769 9.73954 2.188 8.69701L4.15748 5.15882C4.22045 5.06384 4.32282 5.00078 4.44385 4.98241C4.56489 4.96404 4.69554 4.99174 4.80934 5.05989C4.92315 5.12804 5.0116 5.23156 5.05678 5.34946C5.10196 5.46736 5.1005 5.59085 5.05268 5.6949L3.0832 9.23309C2.84296 9.6457 2.69915 10.1123 2.66015 10.6058C2.62116 11.0993 2.68777 11.6097 2.8561 12.1073C3.02443 12.6049 3.29111 13.0798 3.64059 13.5042C3.99007 13.9286 4.41536 14.2941 4.89167 14.5793C5.36798 14.8645 5.88578 15.0638 6.41488 15.1655C6.94398 15.2672 7.47379 15.2694 7.97344 15.1718C8.47308 15.0742 8.93256 14.8788 9.32508 14.597C9.71761 14.3153 10.0353 13.9528 10.2597 13.5307L13.5417 7.63455C13.6936 7.37675 13.785 7.08477 13.8105 6.77572C13.836 6.46667 13.7952 6.14677 13.6904 5.83477C13.5856 5.52277 13.4189 5.22495 13.2001 4.95877C12.9814 4.69258 12.7149 4.46338 12.4164 4.28462C12.1179 4.10585 11.7933 3.9811 11.4617 3.91769C11.13 3.85428 10.798 3.85348 10.4851 3.91534C10.1722 3.9772 9.88469 4.10047 9.63942 4.27793C9.39414 4.45539 9.19605 4.68347 9.05674 4.94879L6.21243 10.0586C6.09661 10.2667 6.07985 10.5227 6.16584 10.7704C6.25183 11.018 6.43352 11.2371 6.67094 11.3792C6.90836 11.5214 7.18206 11.5751 7.43184 11.5285C7.68162 11.4819 7.88701 11.3389 8.00283 11.1308L10.41 6.80634C10.4358 6.75018 10.4743 6.70142 10.5232 6.66308C10.572 6.62474 10.6302 6.59765 10.694 6.58347C10.7579 6.56928 10.8261 6.56832 10.8943 6.58064C10.9626 6.59296 11.0295 6.6183 11.091 6.65508C11.1524 6.69187 11.207 6.73931 11.2514 6.79448C11.2958 6.84965 11.3291 6.91137 11.3492 6.97581C11.3693 7.04025 11.3758 7.10604 11.3682 7.1691C11.3606 7.23217 11.3391 7.29116 11.3052 7.34242L8.89851 11.666C8.66636 12.0831 8.25467 12.3698 7.754 12.4632C7.25334 12.5566 6.70471 12.449 6.22881 12.164C5.75291 11.879 5.38873 11.44 5.21637 10.9436C5.04402 10.4472 5.07761 9.93398 5.30976 9.51692L8.15358 4.40795C8.34958 4.03805 8.62742 3.72031 8.97086 3.47328C9.3143 3.22624 9.71646 3.05487 10.1539 2.96915C10.5913 2.88344 11.0552 2.8851 11.5185 2.97404C11.9818 3.06299 12.4352 3.23743 12.8523 3.48719C13.2694 3.73695 13.6418 4.05702 13.9477 4.42872C14.2536 4.80042 14.4869 5.21629 14.6341 5.65206C14.7812 6.08784 14.8392 6.53477 14.8047 6.96679C14.7701 7.3988 14.6438 7.80724 14.4329 8.16824L14.4409 8.17301Z"/>
                    </svg>
                </IconButton>
                <Divider variant='middle' orientation='vertical' sx={{backgroundColor: theme.colors.fg}} />
                <IconButton>
                    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill={theme.colors.fg} d="M17.4912 6.86677L15.9919 16.5946C15.9749 16.7078 15.9323 16.8157 15.8672 16.9099C15.8022 17.004 15.7164 17.0821 15.6165 17.1379C15.5166 17.1938 15.4052 17.226 15.2909 17.2321C15.1766 17.2382 15.0624 17.218 14.9571 17.1731L12.0898 15.9747L10.8978 17.762C10.8573 17.8345 10.7981 17.8948 10.7264 17.9366C10.6547 17.9785 10.5731 18.0004 10.4901 18C10.3608 18 10.2368 17.9486 10.1454 17.8572C10.054 17.7658 10.0027 17.6418 10.0027 17.5126V15.2596C10.0021 15.093 10.0571 14.931 10.1589 14.7991L15.2499 8.25247L8.36881 14.4462L5.96508 13.4465C5.8319 13.391 5.71748 13.2984 5.63547 13.1797C5.55346 13.061 5.50732 12.9212 5.50254 12.777C5.49076 12.6367 5.52011 12.496 5.587 12.3721C5.6539 12.2482 5.75543 12.1465 5.87919 12.0795L16.3789 6.09889C16.5012 6.02887 16.6409 5.99481 16.7818 6.00064C16.9227 6.00647 17.059 6.05193 17.1752 6.13182C17.2914 6.21171 17.3827 6.32276 17.4386 6.45223C17.4945 6.58169 17.5127 6.7243 17.4912 6.86366V6.86677Z"/>
                    </svg>

                </IconButton>


            </MyChat>
        </Form>
    );
};

export default Chat;
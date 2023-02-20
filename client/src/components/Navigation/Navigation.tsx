import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

import MessageSvg from './img/Message.svg'
import CategorySvg from './img/Cattegory.svg'
import AddSvg from './img/Add.svg'
import TvSvg from './img/TV.svg'
import Notification from './img/Notification.svg'
import Profile from './img/Profile.svg'
import Settings from './img/Settings.svg'



const Navigation = () => {
    const Logo = styled.img`
      width: 1.45rem;
    `
    const Links = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 4rem;
    `

    const LinkGroup = styled.div`
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `

    const LinkGroupCenter = styled(LinkGroup)`
      margin-top: 130px;
      height: 35%;
    `

    const LinkGroupBottom = styled(LinkGroup)`
      bottom: 20px;
      height: 18%;
    `
    return (
        <Links>
            <LinkGroupCenter>
                <Link to={''}>
                    <Logo src={MessageSvg} alt=""/>
                </Link>

                <Link to={''} >
                    <Logo src={CategorySvg} alt=""/>
                </Link>

                <Link to={''} >
                    <Logo src={TvSvg} alt=""/>
                </Link>

                <Link to={''} >
                    <Logo src={AddSvg} alt=""/>
                </Link>
            </LinkGroupCenter>

            <LinkGroupBottom>
                <Link to={''} >
                    <Logo src={Notification} alt=""/>
                </Link>

                <Link to={''} >
                    <Logo src={Settings} alt=""/>
                </Link>

                <Link to={''} >
                    <Logo src={Profile} alt=""/>
                </Link>
            </LinkGroupBottom>

        </Links>
    );
};

export default Navigation;
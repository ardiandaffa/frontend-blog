import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Header = (props) => {


    return (
        <div>
            <HeaderContainer>
        <HeaderText>{props.title}</HeaderText>
            </HeaderContainer>
            <HeaderContainer1>
                <nav>
                    <RowList>
                        <RowListList><HeaderTextSmall><Link to="/">HOME</Link></HeaderTextSmall></RowListList>
                        <RowListList><HeaderTextSmall>ABOUT</HeaderTextSmall></RowListList>
                    </RowList>
                </nav>
            </HeaderContainer1>
        </div>
    )
}

export default Header



const HeaderContainer = styled.div`
    display: flex;
    margin-top: 0px;
    width: 100%;
    background-color: white;
    height: 50px;
    justify-content: center;
    align-items: center;
`

const HeaderText = styled.a`
    margin-top: 0px;
    font-size: 25px;
    color: black;
`

const HeaderTextSmall = styled.a`
    font-size: 12px;
    color: black;
    margin-left: 1rem;
    margin-right: 1rem;
`

const HeaderContainer1 = styled.div`
    font-family: 'PT Serif', serif;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0px;
    width: 100%;
    background-color: white;
    text-align: center;
    line-height: 50px;
    height: 50px;
    box-shadow: 0 2px 3px rgba(0,0,0,0.12), 0 1px 0px rgba(0,0,0,0.24);
    vertical-align: center;`


const RowList = styled.ul`
    display: inline;
    margin: 0;
    padding-inline-start: 0;
`

const RowListList = styled.li`
    display: inline;
    margin: 0;
`
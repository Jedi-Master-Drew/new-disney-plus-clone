import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
             
        <Logo src="/images/logo.svg" alt="Disney Plus" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" alt="Disney Plus" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" alt="Disney Plus" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" alt="Watch List" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" alt="Originals" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" alt="Movies" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" alt="Series" />
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImg src="https://media-exp1.licdn.com/dms/image/C5603AQFaLhSNToKYTQ/profile-displayphoto-shrink_400_400/0/1579915469695?e=1626912000&v=beta&t=bxiSuUIlUhJj_0n9JO9ReBDosI34tdFgOa6AQI5rTNs"/>
            
        </Nav>
    )
}

export default Header

const Nav = styled.nav `
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    `
const Logo = styled.img `
    width: 80px;
`

const NavMenu = styled.div `
display: flex;
flex: 1;
margin-left: 25px;
align-items: center;
a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
        height: 20px;
    }

    span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative; // parent

        &:after {
            content: ""; // this makes the line under the top menu
            height: 2px;
            background: white;
            position: absolute; // child
            left: 0;
            right: 0;
            bottom: -6px;
            opacity: 0;
            transform-origin: left center;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
            transform: scaleX(0.5);

        }
    }

    &:hover {
        span:after {
            transform: scaleX(1);
            opacity: 1;
        }
    }
}

`

const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`


import styled from "@emotion/styled";

export const ClickMeButton = styled.button`
    font-size: 17px;
    padding: 0.5em 2em;
    border: transparent;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
    background: dodgerblue;
    color: white;
    border-radius: 4px;
    margin-top: 1%;
    margin-left: 1%;
    &:hover,
    &active{
        background: rgb(2,0,36);
        background: linear-gradient(90deg, rgba(30,144,255,1) 0%, rgba(0,212,255,1) 100%);
        transform: translate(0em, 0.2em);
    }
`
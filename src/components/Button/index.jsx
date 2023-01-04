import React from 'react';
import { ClickMeButton } from "./styles";

const Button = ({onClick}) =>{
    return (
        <div>
            <ClickMeButton onClick={onClick}>Click me</ClickMeButton>
        </div>
    )
}

export default Button
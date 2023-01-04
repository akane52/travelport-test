import React from "react";
import {  Container, CardLastName, CardFirstName, CardEmail, CardImage} from "./styles";

const PersonalCards = ({picture, firstName, secondName, email}) =>{
    return (
        <div>
            <Container>
                <CardImage src={picture}/>
                <CardFirstName>{firstName}</CardFirstName>
                <CardLastName>{secondName}</CardLastName>
                <CardEmail>{email}</CardEmail>
            </Container>
        </div>
    )
}
export default PersonalCards
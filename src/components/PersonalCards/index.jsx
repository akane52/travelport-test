import React from "react";
import {  Container, CardLastName, CardFirstName, CardEmail, CardImage, InformationContainer, NameSurnameContainer, EmailContainer} from "./styles";
const PersonalCards = ({picture, firstName, secondName, email}) =>{
    return (
        <div>
            <Container>
                <CardImage src={picture}/>
                <InformationContainer>
                    <NameSurnameContainer> 
                        <CardFirstName>{firstName}</CardFirstName>
                        <CardLastName>{secondName}</CardLastName>
                    </NameSurnameContainer>
                    <EmailContainer>
                    <CardEmail>{email}</CardEmail>
                    </EmailContainer>
                </InformationContainer>
                
            </Container>
        </div>
    )
}
export default PersonalCards
import React from "react";
import {  Container, CardLastName, CardFirstName, CardEmail, CardImage, InformationContainer, NameSurnameContainer, EmailContainer} from "./styles";
import { data } from '../../dataSamples/personalData';

const PersonalCards = () =>{
    return (
        <div>
        {data.map(item => {
            return(
                <Container>
                    <CardImage src={item.picture.medium}/>
                    <InformationContainer>
                        <NameSurnameContainer>
                            <CardFirstName>{item.name.first}</CardFirstName>
                            <CardLastName>{item.name.last}</CardLastName>
                        </NameSurnameContainer>
                        <EmailContainer>
                            <CardEmail>{item.email}</CardEmail>
                        </EmailContainer>
                    </InformationContainer>
                </Container>
            )
        })}
      </div>
    )
}
export default PersonalCards
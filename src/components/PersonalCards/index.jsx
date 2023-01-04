import React from "react";
import {  Container, CardLastName, CardFirstName, CardEmail, CardImage} from "./styles";
import { data } from '../../dataSamples/personalData';

const PersonalCards = () =>{
    return (
        <div>
        {data.map(item => {
            return(
                <Container>
                    <CardImage src={item.picture.medium}/>
                        <CardFirstName>{item.name.first}</CardFirstName>
                        <CardLastName>{item.name.last}</CardLastName>
                    <CardEmail>{item.email}</CardEmail>
                </Container>
            )
        })}
      </div>
    )
}
export default PersonalCards
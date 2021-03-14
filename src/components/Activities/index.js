import React from 'react';
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
    Container, 
    Header, 
    Title, 
    Card, 
    CardHeader, 
    Avatar, 
    Description, 
    Bold, 
    CardBody, 
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    DateLabel,
    Actions,
    Option,
    OptionLabel,
    SubTitle
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activities() {
    return (
        <Container>
            <Header>
                <Title>Atividades</Title>
                <SubTitle>Ver todas</SubTitle>
            </Header>

            <Card>
                <CardHeader>
                    <Avatar source={avatar} />
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@ismael_veras</Bold>
                    </Description>
                </CardHeader>

                <CardBody>
                    <UserName>Isaque Veras</UserName>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$ 24,99</Value>

                        <Divider />

                        <Date>
                            <Feather name="lock" color="#fff" />
                            <DateLabel>há 4 horas</DateLabel>
                        </Date>
                    </Details>

                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" size={14} color="#fff" />
                            <OptionLabel>0</OptionLabel>    
                        </Option>

                        <Option>
                            <AntDesign name="hearto" size={14} color="#fff" />
                            <OptionLabel>2</OptionLabel>    
                        </Option>

                    </Actions>
                </CardFooter>
            </Card>
            
        </Container>
    );
}
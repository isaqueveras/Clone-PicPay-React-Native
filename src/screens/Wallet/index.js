import React, { useState } from 'react';
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign } from '@expo/vector-icons';
import { Switch } from 'react-native';

import { 
    Wrapper, 
    Header, 
    HeaderContainer, 
    Title,
    BalanceContainer,
    Value,
    Bold,
    EyeButton,
    Info,
    Actions,
    Action,
    ActionLabel,
    UseBalance,
    UseBalanceTitle,
    PaymentMethods,
    PaymentMethodsTitle,
    Card,
    CardBody,
    CardDetails,
    CardTitle,
    CardInfo,
    Img,
    AddButton,
    AddLabel,
    UseTicketButton,
    TicketLabel
} from './styles';

import creditCard from '../../images/credit-card.png';

export default function Wallet() {
    const [isVisible, setIsVisible] = useState(true);
    const [isBalance, setUseBalance] = useState(true);
     
    function handleToggleVisibility() {
        setIsVisible((prevState) => !prevState);
    }

    function handleToggleUseBalance() {
        setUseBalance((prevState) => !prevState);
    }

    return (
        <Wrapper>
            <Header 
                colors = {
                    isBalance 
                        ? ['#52E78C', '#1AB563']
                        : ['#D3D3D3', '#868686']
                }
            >
                <HeaderContainer>
                    <Title>Saldo PicPay</Title>
                    <BalanceContainer>
                        <Value>
                            <Bold>{ isVisible ? 'R$ 00,00' : '********'}</Bold>
                        </Value>

                        <EyeButton onPress={handleToggleVisibility}>
                            <Feather name={isVisible ? 'eye' : 'eye-off'} size={28} color="#fff" />
                        </EyeButton>

                    </BalanceContainer>

                    <Info>Seu saldo esta rendendo 100% do CDI</Info>
                
                    <Actions>
                        <Action>
                            <MaterialCommunityIcons name="cash" size={28} color="#fff" />
                            <ActionLabel>Adicionar</ActionLabel>
                        </Action>

                        <Action>
                            <FontAwesome name="bank" size={28} color="#fff" />
                            <ActionLabel>Retirar</ActionLabel>
                        </Action>

                    </Actions>
                </HeaderContainer>
            </Header>

            <UseBalance>
                <UseBalanceTitle>
                    Usar saldo ao pagar
                </UseBalanceTitle>
                <Switch
                    value={isBalance}
                    onValueChange={handleToggleUseBalance} 
                />

            </UseBalance>

            <PaymentMethods>
                <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

                <Card>
                    <CardBody>
                        <CardDetails>
                            <CardTitle>
                                Cadastre seu cartão
                            </CardTitle>
                            <CardInfo>
                                Cadastre seu cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay.
                            </CardInfo>
                        </CardDetails>

                        <Img source={creditCard} resizeMode="contain" />
                    </CardBody>

                    <AddButton>
                        <AntDesign name="pluscircleo" size={30} color="#0db060" />
                        <AddLabel>Adicionar cartão de crédito</AddLabel>
                    </AddButton>
                </Card>

                <UseTicketButton>
                    <MaterialCommunityIcons name="ticket-outline" size={20} color="#0db060" />
                    <TicketLabel>Usar código promocional</TicketLabel>
                </UseTicketButton>
            
            </PaymentMethods>

        </Wrapper>
    );
}

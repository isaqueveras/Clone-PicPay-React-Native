import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Header = styled(LinearGradient)`
    height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;


export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const BalanceContainer = styled.View`
    margin: 10px 0;
    flex-direction: row;
    align-items: center;
`;

export const Value = styled.Text`
    color: #fff;
    font-weight: 200;
    font-size: 38px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

export const Info = styled.Text`
    color: #fff;
    font-size: 15px;
`;

export const Actions = styled.View`
    flex-direction: row;
    margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
    border: 1px solid rgba(255,255,255,0.6);
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px;
    width: 150px;
    height: 50px;
    border-radius: 25px;
    margin: 0 10px;
`;
    
export const ActionLabel = styled.Text`
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
`;

export const UseBalance = styled.View`
    background: #1c1c1e;
    height: 60px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
`;

export const UseBalanceTitle = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 500;
`;

export const PaymentMethods = styled.View`
    padding: 0 16px;
    margin-top: 25px;
`;

export const PaymentMethodsTitle = styled.Text`
    color: rgba(255,255,255,0.5);

    text-transform: uppercase;
`;

export const Card = styled.View`
    background: #1e232a;
    padding: 20px;
    margin-top: 10px;
    border-radius: 8px;
`;

export const CardBody = styled.View`
    flex-direction: row;
`;

export const CardDetails = styled.View`
    flex: 1;
    margin-right: 15px;
`;

export const CardTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
`;

export const CardInfo = styled.Text`
    font-size: 16px;
    margin-top: 10px;
    color: rgba(255,255,255,0.5);
`;

export const Img = styled.Image`
    width: 70px;
`;

export const AddButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
`;

export const AddLabel = styled.Text`
    color: #0db060;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
`;

export const UseTicketButton = styled.TouchableOpacity`
    flex-direction: row;
    margin-top: 25px;
    justify-content: center;
    align-items: center;
`;

export const TicketLabel = styled.Text`
    color: #0db060;
    text-decoration: underline; 
    margin-left: 5px;
    font-size: 18px;
`;
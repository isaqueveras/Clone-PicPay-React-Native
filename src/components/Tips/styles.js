import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {
        paddingLeft: 16,
    },
}))`
    margin-top: 25px;
`;

export const Option = styled.TouchableOpacity`
    width: 130px;
    height: 200px;
    padding: 15px;
    border-radius: 8px;
    background: ${({ bgColor }) => bgColor};
    justify-content: space-between;
    margin-right: 16px;
`; 
export const Title = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
`; 

export const Img = styled.Image`
    align-self: center;
`;
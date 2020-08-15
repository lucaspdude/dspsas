import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 30px;
  background-color: #715c8b;
`;

export const TabBarItem = styled.TouchableOpacity``;
export const TabBarItemWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5f5f5;
  padding: 5px 10px;
  border-radius: 30px;
  min-width: 100px;
`;

export const TabBarItemWrapperAlt = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px 10px;
  border-radius: 30px;
`;

export const TabBarItemText = styled.Text`
  color: #715c8b;
  font-size: 12px;
  padding-left: 10px;
  font-family: 'Kreon-Bold';
`;

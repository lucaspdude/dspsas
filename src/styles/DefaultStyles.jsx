import styled from 'styled-components/native';

export const AppContainer = styled.KeyboardAvoidingView`
  flex: 1;
  background-color: #f5f5f5;
`;

export const Container = styled.ScrollView`
  flex: 1;
  display: flex;
  margin: 5px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
  margin-bottom: 15px;
  width: 100%;
`;

export const Row = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.Text`
  text-align: center;
  font-family: 'Kreon-Bold';
  font-size: 18px;
  color: #715c8b;
`;

export const UserName = styled.Text`
  text-align: center;
  font-family: 'Kreon-Bold';
  font-size: 36px;
  color: #715c8b;
`;

export const ProfilePicture = styled.Image`
  width: 150px;
  height: 150px;
  margin: 30px;
`;

export const InputWrapper = styled.View`
  /* border-bottom: 1px solid #a28fba; */
  width: 100%;
  margin-top: 10px;
`;
export const InputLabel = styled.Text`
  color: #a28fba;
  font-family: 'Kreon-Light';
  font-size: 12px;
`;

export const InputItem = styled.TextInput`
  color: #715c8b;
  font-family: 'Kreon-Light';
  font-size: 18px;
  padding: 2px 0px;
`;

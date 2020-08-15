import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Container} from './styles';
import {TabBarItem} from './styles';
import {TabBarItemText} from './styles';
import {TabBarItemWrapper} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {TabBarItemWrapperAlt} from './styles';

// import { Container } from './styles';

const BottomNav = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Container>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const {tabBarIcon} = options;
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TabBarItem
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {isFocused ? (
              <TabBarItemWrapper>
                {isFocused ? (
                  <>
                    <Icon name={tabBarIcon} color="#715c8b" size={24} />
                    <TabBarItemText>{label}</TabBarItemText>
                  </>
                ) : null}
              </TabBarItemWrapper>
            ) : (
              <TabBarItemWrapperAlt>
                <Icon name={tabBarIcon} color="#fff" size={24} />
              </TabBarItemWrapperAlt>
            )}
          </TabBarItem>
        );
      })}
    </Container>
  );
};

export default BottomNav;

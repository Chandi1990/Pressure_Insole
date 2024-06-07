import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParameterList} from './type';
import Home from 'screens/home';
import Login from 'screens/login';
import Splash from 'screens/splash';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

// const AuthStack = createStackNavigator<StackParameterList>();
const AuthStack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer independent={true}>
      <StatusBar backgroundColor={'#ffff'} barStyle={'dark-content'} />
      <AuthStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'HOME' as keyof StackParameterList}>
        <AuthStack.Screen
          name={'HOME' as keyof StackParameterList}
          component={Home}
        />
        <AuthStack.Screen
          name={'LOGIN' as keyof StackParameterList}
          component={Login}
        />
        <AuthStack.Screen
          name={'SPLASH' as keyof StackParameterList}
          component={Splash}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;

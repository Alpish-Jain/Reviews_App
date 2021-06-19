import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({navigation}) => (
  <Navigator headerMode="float" screenOptions={
      {
          headerStyle:{
              backgroundColor:'#eee',
              height:100,
          },
          headerTintColor:'#444',
      }
  }>
    <Screen
     name="About"
      component={About} 
      options={{
          headerTitle:()=><Header navigation={navigation} title='About GameZone'/>
      }}
      />
  </Navigator>
);

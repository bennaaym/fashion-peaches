import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FeedScreen from './Feed'
import AddScreen from './main/Add'
const Tab = createBottomTabNavigator();
export default function Social() {
  return (
    <Tab.Navigator>
          <Tab.Screen name="Feed" component={FeedScreen}
              options={{
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="home" color='#a42fcd' size={26}/>
                  )
              }} />
    <Tab.Screen name="Add" component={AddScreen}  options={{
                  tabBarIcon: ({ color, size }) => (
                      <MaterialCommunityIcons name="plus-box" color='#a42fcd' size={26}/>
                  )
              }}/>
  </Tab.Navigator>
  )
}



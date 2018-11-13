import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AirPollutionDaily from '../screens/AirPollutionDaily';
import ListCityScreen from '../screens/ListCityScreen';
import MapView from '../screens/MapView';
import UVRadiation from '../screens/UVRadiation';
const Navigation = createStackNavigator({
Home: {
  screen: HomeScreen,
},
MainScreen: {
  screen: AirPollutionDaily
},
ListCityScreen: {
  screen: ListCityScreen
},
MapView: {
  screen: MapView
},
UVRadiation: {
  screen: UVRadiation
}
},
{
  headerMode: 'screen'
}
)


export default Navigation;

import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
  FlatList
} from 'react-native';
import { WebBrowser } from 'expo';
import { LinearGradient } from "expo";
import { MonoText } from '../components/StyledText';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import ListCity from '../components/AirPollutionDaily/ListCity'

export default class ListCityScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ListCity></ListCity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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
  Dimensions,
  FlatList
} from 'react-native';
import axios from 'react-native-axios';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import { WebBrowser } from 'expo';
import { LinearGradient } from "expo";
import Carousel from "react-native-snap-carousel";
const { height, width } = Dimensions.get('window');
import MainMapViewComponent from '../components/MapView/MainMapView'
export default class MapView extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
      super(props);
            this.state = {
            }
  }
  componentDidMount() {
  }


  render() {
    return (
        <View>
            <MainMapViewComponent></MainMapViewComponent>
            <View style={{position: 'absolute',top:30,left:10}}>
                <Button  onPress={() => this.props.navigation.navigate('MainScreen')} title="back"></Button>
             </View>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
});

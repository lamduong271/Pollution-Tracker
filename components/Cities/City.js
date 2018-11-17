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
  Dimensions
} from 'react-native';
import axios from 'react-native-axios';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as Animatable from "react-native-animatable";
import { WebBrowser } from 'expo';
import { LinearGradient } from "expo";
import Carousel from "react-native-snap-carousel";
const { height, width } = Dimensions.get('window');

export default class City extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
      super(props);
      this.state = {
          citiesList:[],
      }
  }

    componentDidMount() {
        // axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyAg0l9mTBFRBuvRirAk4WL2SZ8BtQGCJn4')
        //   .then(function (response) {
        //     alert(JSON.stringify(response.data.results[0].geometry.location));
        //   })
        //   .catch(function (error) {
        //     alert(error);
        //   });

    }

  render() {
    return (
      <View
        style={styles.container}>
        <Text>{this.props.name}</Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    height:50,
    width:width,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  }
});
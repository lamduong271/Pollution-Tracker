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
import City from './City';
export default class ListCity extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
      super(props);
            this.state = {
        cities:[
          {
            name:'Hanoi',
            id:'1',
            degree:30
          },
          {
            name:'Helsinki',
            id: '2',
            degree: 9
          },
          {
            name:'Vantaa',
            id: '3',
            degree: 10
          }
        ],
        currentCity:{},
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
      <LinearGradient
        colors = {
            // ["rgba(120, 192, 224,0.4)", "rgba(50, 147, 231,0.6)"]
             ["rgba(255, 255, 155,0.4)", "rgba(255, 255, 21,0.6)"]
        }
        style={styles.container}>

        <FlatList
            keyExtractor = {
                item => item.name
            }
            data={this.state.cities}
            renderItem={({item}) => <City name={item.name}></City>}
        />
      </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});

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
export default class SingleDayForecast extends React.Component {
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


  checkIcon = (airQuality) => {
    if(airQuality <= 35) {
      return require('../../assets/images/face/less35.png')
    }
    else if( airQuality >35 && airQuality <= 40) {
      return require('../../assets/images/face/less40.png')
    }
    else if( airQuality >40 && airQuality <= 50) {
      return require('../../assets/images/face/less50.png')
    }
    else if( airQuality >50 && airQuality <= 70) {
      return require('../../assets/images/face/less75.png')
    }
    return require('../../assets/images/face/less100.png')
  }

  renderForecast= ({item, index}) => {
    return (
       <View style={styles.carousel}>
        <Text style={[styles.centerContent]}>{item.datetime.substring(11,16)}</Text>
        <Image 
              style={[styles.forecastImage]} 
              source={this.checkIcon(item.breezometer_aqi)}>
        </Image>
        <Text 
              style={[styles.centerContent,{ color:item.breezometer_color}]}>
              {item.breezometer_aqi}
        </Text>
        </View>
        )
    }


  render() {
    const {forecastData} = this.props
    console.log(forecastData)
    return (
        <View
        style={styles.container}>
        {   forecastData ?
            
            <Carousel
            inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              firstItem={0}
              sliderWidth={width-40}
              itemWidth={width-width/1.3}
              activeSlideAlignment="start"
              data = {
                forecastData
              }
              renderItem={this.renderForecast}
              itemHeight={height/4}
          />
            :
            ''
        }
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  centerContent:{
    marginTop: 10,
    fontSize: 20,
    alignSelf: 'center',
  },
  forecastImage:{
    height:50, 
    width:50,
    marginTop:10,
    alignSelf: 'center',
  },
  carousel:{
    flexDirection: 'column',
    backgroundColor:'#fff',
    height:150,
    width:90,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent:'center',
    borderRadius: 10,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: '#5e73ff',
    shadowOpacity: 0.4,
  }
});

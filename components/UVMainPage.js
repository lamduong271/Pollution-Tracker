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
import { WebBrowser } from 'expo';
import { LinearGradient } from "expo";
import axios from 'react-native-axios';
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
const { height, width } = Dimensions.get('window');
import SpeedometerWrapper from './UVindex/SpeedometerWrapper';
import ForecastChart from './UVindex/ForecastChart';
export default class UVMainPage extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
        latitude: null,
        longitude: null,
        fetchUVDone:false,
        currentUVIndexData:null,
        forecastData:null,
        forecastFetchDone:false,
    }
}
componentDidMount() {
    this.getLocation();
}

getUVIndex=()=>{

axios.get(`http://api.openweathermap.org/data/2.5/uvi?appid=960a3201a350df128232bf4d9b60dd60&lat=${this.state.latitude}&lon=${this.state.longitude}`)
.then((response ) => {
  console.log("reactNativeDemo","response get details:"+JSON.stringify(response));
  this.setState({
    currentUVIndexData:response.data,
    fetchUVDone:true
  })
})
.catch((error) => {
  console.log("axios error:",JSON.stringify(error));
});
}

getForecast() {
    axios.get(`http://api.openweathermap.org/data/2.5/uvi/forecast?appid=960a3201a350df128232bf4d9b60dd60&lat=${this.state.latitude}&lon=${this.state.longitude}&cnt=7`)
    .then((response ) => {
    console.log("getForecast: "+JSON.stringify(response));
    this.setState({
        forecastData:response.data,
        forecastFetchDone:true
    })
    })
    .catch((error) => {
    console.log("axios error:",JSON.stringify(error));
    });
}

getLocation = () => { // Change the function so it has access to the outer scope

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

        // Move the function call to here :)
        this.getUVIndex();
        this.getForecast();
      },
      (error) =>
      this.setState({
        error: error.message,
        latitude: 41.77,
        longitude: -88.07,
      }), {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 10000
      },
    );
  }

  render() {
    return (
        // transform: [{ rotate: '-180deg'}]
      <View style={styles.container}>
        {
            this.state.fetchUVDone ?
            <SpeedometerWrapper currentUVIndexData={this.state.currentUVIndexData}></SpeedometerWrapper>
        :
        ''
        }

        {
            this.state.forecastFetchDone ?
            <ForecastChart forecastData={this.state.forecastData} ></ForecastChart>
            :
            ''
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
});
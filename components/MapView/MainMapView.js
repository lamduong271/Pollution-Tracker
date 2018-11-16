import React, { Component } from 'react';
import { View, AppRegistry,  Dimensions,Button, Text} from 'react-native';
//import { GradientView } from '../../Common'
import MapView from 'react-native-maps';
const { height, width } = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import { Marker } from 'react-native-maps';
import axios from 'react-native-axios';


export default class MainMapViewComponent extends Component {

  static navigationOptions = {
    header: null
  };
  constructor(props) {
      super(props);
      this.state = {
          isLoading: true,
          latitude: null,
          longitude: null,
          currentAirQuanlity:null,
          fetchDataDone:false
      }
  }

  componentDidMount() {
    this.getLocation();
    if(!this.isLoading) {
      this.getCurrentAirQuanlity()
    }
  }

  getCurrentAirQuanlity() {
    axios.get(`https://api.breezometer.com/baqi/?lat=21.0245&lon=105.84117&key=c4547e6d71124b61bf4d19efdb4862ad`)
          // axios.get(`https://api.aerisapi.com/airquality/44.9778,-93.265?client_id=fvgPmOxudcmTXhAv20s17&client_secret=asHpyKPtiBPB5rS5UHjreLv9BTtHoJxL3Qi2fCju`)
     .then((responseJson) => {
       console.log(responseJson)
       this.setState({
          currentAirQuanlity:responseJson.data,
          fetchDataDone: true,
       }, function () {
         // do something with new state
       });
     })
     .catch((error) => {
       //errorc
       console.log(error)
     });
  } 

  getLocation = () => { 
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          isLoading:false
        });
        this.getCurrentAirQuanlity()
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

  loadingMap() {
    return <LottieView
      style={{flex:1,position:'absolute',top:0,bottom:0,zIndex:2,backgroundColor:'rgba(225, 230, 242,1)'}}
      source={require('../../assets/images/json/location.json')}
      autoPlay
      loop
    />
  }
  render() {
    const {latitude,longitude} = this.state;
    return (
      <View style={{ position: 'relative', height: height}}>
      {this.state.isLoading ?
      this.loadingMap()
      :
      <MapView
        style={{ left:0, right: 0, top:0, bottom: 0, position: 'absolute' }}
        zoomEnabled={true}
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapView.Marker
            coordinate={{latitude: latitude,
            longitude: longitude}}
            title={"title"}
            description={"description"}
         >
         {
          this.state.currentAirQuanlity?
         <View style={{backgroundColor:this.state.currentAirQuanlity.breezometer_color, borderRadius:50}}>
            <View style={{height:50,width:50, flexDirection:'column', justifyContent:'center'}}>
                <Text style={{alignSelf:'center'}}>
                  {this.state.currentAirQuanlity.breezometer_aqi}
                </Text>
            </View>
         </View>
         :
         'Loading...'
       }
       </MapView.Marker>
      </MapView>
      }
       
        {/* <LottieView
        source={require('../../assets/images/json/location.json')}
        autoPlay
        loop
      /> */}

      </View>

    );
  }
}
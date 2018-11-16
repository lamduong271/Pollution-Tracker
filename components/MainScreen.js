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
import { LinearGradient , Permissions} from "expo";
import Carousel from "react-native-snap-carousel";
const { height, width } = Dimensions.get('window');
import Details from './AirPollutionDaily/Details';
import AdvicesList from './AirPollutionDaily/AdvicesList';
import FourDaysForecast from './Forestcast/FourDaysForestcast'
import LottieView from 'lottie-react-native';


export default class MainScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
          dataSource: null,
          latitude: null,
          longitude: null,
          error: 2,
          locationResult: null,
          currentAirQuanlity:null,
          fetchDataDone:false,
          showDetail:true,
          showRecommendation:false,
          fet:false,
        cities:[
          {
            name:'Helsinki',
            id:'1',
            degree:7
          },
          {
            name:'Hanoi',
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

  checkIcon = (airQuality) => {
    if(airQuality <= 35) {
      return require('../assets/images/face/less35.png')
    }
    else if( airQuality >35 && airQuality <= 40) {
      return require('../assets/images/face/less40.png')
    }
    else if( airQuality >40 && airQuality <= 50) {
      return require('../assets/images/face/less50.png')
    }
    else if( airQuality >50 && airQuality <= 70) {
      return require('../assets/images/face/less75.png')
    }
    return require('../assets/images/face/less100.png')
  }
  

  renderCities = ({item, index}) => {
    return (
      <ImageBackground
          source={require('../assets/images/weather/sunshine.jpg')}
          style = {
            styles.header
          } 
          imageStyle = {
            {
              borderRadius: 15
            }
          }
          >
          <LinearGradient
            colors = {
              ["rgba(124, 142, 255,0.3)", "rgba(124, 142, 255,1)"]
            }
            start={[0.0, 0.5]}
            end={[1.0, 0.5]}
            locations={[0.0, 1.0]}
            style={styles.header}
            >
            <View style={styles.mainInfor}>
              <Text style={styles.cityName}>{item.name}</Text>
              <Text style={styles.Temperature}>{item.degree} C</Text>
              {
                  this.state.fetchDataDone ?
              <Animatable.Image
              animation = "pulse"
              iterationCount = "infinite"
              duration = {
                2000
              }
              style={styles.expression} 
              source={this.checkIcon(this.state.currentAirQuanlity.breezometer_aqi)}>
              </Animatable.Image>
              :
              ''
            }
                {
                  this.state.fetchDataDone ?
                  <View 
                    style={styles.quanlityInfor}>
                    <Text 
                    style={[{
                      color:this.state.currentAirQuanlity.breezometer_color,
                      },styles.breezometerColor]}>
                      {this.state.currentAirQuanlity.breezometer_aqi}
                    </Text>
                    <Text style={{color:'#fff', fontWeight:'500', fontSize:20}}>
                    {this.state.currentAirQuanlity.breezometer_description}
                    </Text>
                  </View>
                  :
                  <View style={styles.quanlityInfor}>
                    <Text style={styles.breezometerColor}>
                      00
                    </Text>
                    <Text>
                      Loading...
                    </Text>
                  </View>
                }
            </View>
                  
          </LinearGradient>
        </ImageBackground>
      
    );
  }

    getCurrentCity = (index) => {
      var temCity = this.state.cities[index];
      this.setState({
        currentCity: temCity
      })
    }

    getCurrentAirQuanlity() {
      axios.get(`https://api.breezometer.com/baqi/?lat=${this.state.latitude}&lon=${this.state.longitude}&key=c4547e6d71124b61bf4d19efdb4862ad`)
            // axios.get(`https://api.aerisapi.com/airquality/44.9778,-93.265?client_id=fvgPmOxudcmTXhAv20s17&client_secret=asHpyKPtiBPB5rS5UHjreLv9BTtHoJxL3Qi2fCju`)
       .then((responseJson) => {
         this.setState({
            currentAirQuanlity:responseJson.data,
            fetchDataDone: true,
         }, function () {
           // do something with new state
         });
       })
       .catch((error) => {
         //error
       });
    } 

    componentDidMount() {
      this.getLocation();
        this.setState({
          currentRoom: this.state.cities[0]
        })
    }



    getLocation = () => { // Change the function so it has access to the outer scope

      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });

          // Move the function call to here :)
          this.getCurrentAirQuanlity();
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

    displayDetails() {
      this.setState({
        showDetail:true,
        showRecommendation:false,
      })
    }

    displayRecommendation() {
      this.setState({
        showDetail: false,
        showRecommendation: true,
      })
    }

    fetchSelectedDayDataDone = (data) => {
      if(data){

      this.setState({
        fet:data
      })
      }
    }

    loading() {
      return(
          <LottieView
          style={{flex:1,position:'absolute',top:0,bottom:0,zIndex:2,backgroundColor:'rgba(225, 230, 242,1)'}}
          source={require('../assets/images/json/glow_loading.json')}
          autoPlay
          loop
        />
        
      )
    }

  render() {
    return (
      
      <LinearGradient
        colors = {
            // ["rgba(120, 192, 224,0.4)", "rgba(50, 147, 231,0.6)"]
             ["rgba(225, 232, 247,1)", "rgba(225, 230, 242,1)"]
        }
        style={styles.container}>

        {!this.state.fet
        ?
        this.loading()
        :
        ''
        }


        <View>
          <Carousel
              inactiveSlideOpacity={0.6}
              inactiveSlideScale={0.65}
              firstItem={0}
              sliderWidth={width}
              itemWidth={width}
              data={this.state.cities}
              renderItem={this.renderCities}
              itemHeight={400}
              onSnapToItem = {
                (index) => this.getCurrentCity(index)
              }
          />
        </View>
        {/* <Image style={{width:width, height:100}} source={require('../../assets/images/airQuanlity.png')}></Image> */}
        {/* DETAILS */}
        <View style={styles.Btns}>
              <Button 
              color = {
                this.state.showDetail ? 'black' : '#8e8e8e'
              }
              style={styles.detailBtn}
              onPress={()=>this.displayDetails()} 
              title="Details">
              </Button>
              <Button 
              color = {
                this.state.showRecommendation ? 'black' : '#8e8e8e'
              }
              style={styles.adviceBtn}
              onPress={()=>this.displayRecommendation()} 
              title="Recommendations">
              </Button>
        </View>
        {
          this.state.showDetail
          ?
          <View style={{ flex:1.5}}>
          {this.state.fetchDataDone
          ?
          <Details pollutants={this.state.currentAirQuanlity.pollutants}></Details>
          :
          ''}
        </View>
          :
          <View style={{ flex:1, marginBottom:50}}>
          {this.state.fetchDataDone
          ?
          <AdvicesList random_recommendations={this.state.currentAirQuanlity.random_recommendations}></AdvicesList>
          :
          ''}
        </View>
        }
        {/* Forestcast */}

        {
          (this.state.fetchDataDone && this.state.showDetail) ?
        <FourDaysForecast latitude={this.state.latitude} longitude={this.state.longitude} pass={this.fetchSelectedDayDataDone}></FourDaysForecast>:''
        }
        
      </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ImageBackground: {
     height: height / 3.3,
       width: "100%",
       borderRadius: 15,
  },

  header: {
    height: height/2.5,
    width: "100%",
    borderRadius: 15,
    justifyContent: 'center',
  },
   mainInfor:{
     marginTop: 30,
   },
   expression: {
    height:120,
    width:120,
    alignItems: "center",
    alignSelf: "center",
    //  borderColor: '#ddd',
    // borderBottomWidth: 0,
    // shadowColor: '#000',
    // shadowOffset: { width: 2, height: -2 },
    // shadowOpacity: 0.8,
    // shadowRadius: 3,
   },
   cityName:{
     position:'absolute',
     left:20,
     fontSize: 24,
     color:'#fff',
     fontWeight:'500'
   },
   Temperature:{
    position: 'absolute',
    right: 20,
    fontSize: 24,
    color: '#fff',
    fontWeight: '500'
   },
   quanlityInfor: {
     alignContent: 'center',
     alignSelf: 'center',
     marginTop: 10,
   },
   breezometerColor: {
     fontSize: 30,
     alignContent: 'center',
     alignSelf: 'center',
     fontWeight:"600"
   },
   Btns:{
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingLeft: 20,
     paddingRight: 20,
     marginTop: 15,
   },
   detailBtn:{
     flexDirection: 'row',
     justifyContent:'flex-start',
   },
   adviceBtn:{
     flexDirection: 'row',
     justifyContent: 'flex-end',
   }
});

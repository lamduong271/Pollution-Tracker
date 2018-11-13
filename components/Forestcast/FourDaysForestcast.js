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
import SingleDayForecast from './SingleDayForecast';
export default class FourDaysForecast extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
      super(props);
            this.state = {
              forecast:[],
              fetchForecastDone:false,
              nextThreeDayDayName:[],
              selectedDayData:[],
              selectedDayName:'',
              fetchSelectedDayDataDone:false,
            }
  }
  componentDidMount() {
    this.getFourDaysForestcast()
  }

  getDayOfWeek(date) {
    const DayNamesList = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    let day = new Date(date.datetime.substring(0, 10));
    let dayName = DayNamesList[day.getDay()];
    return dayName;
  }

  getFourDaysForestcast() {
    axios.get(`https://api.breezometer.com/forecast/?lat=${this.props.latitude}&lon=${this.props.longitude}&hours=92&key=271ef7c0617649c68afadfe6d05e1c12`)
      .then((responseJson) => {
        this.setState({
          forecast:responseJson.data.forecast,
          fetchForecastDone:true
        })
      })
      .then(()=>{
        const {forecast,fetchForecastDone} = this.state;
        const currentDate = this.getTime(forecast[0]);
        const hoursLeftToEndDay = 24-Number(currentDate.substring(0,2))
        const nextThreeDayArr=[]
        if(fetchForecastDone){
          nextThreeDayArr.push(
            forecast[hoursLeftToEndDay], 
            forecast[hoursLeftToEndDay + 24 ],
            forecast[hoursLeftToEndDay + 24+24]
          )}
          this.setState({
            nextThreeDayDayName:nextThreeDayArr
          })
          this.getForecast(this.state.nextThreeDayDayName[0])

      })
      .catch((error) => {
        alert(error)
    });
  }

  getTime(date) {
    return date.datetime.substring(11, date.length);
  }

  getForecast(day) {
    const {forecast,fetchForecastDone} = this.state;
    const currentDate = this.getTime(day);
    console.log("day", day);
    axios.get(`https://api.breezometer.com/forecast/?lat=${this.props.latitude}&lon=${this.props.longitude}&start_datetime=${day.datetime}&end_datetime=${day.datetime.substring(0, 10)}T23:00:00&key=271ef7c0617649c68afadfe6d05e1c12`)
      .then((responseJson) => {
        console.log(responseJson.data)
        this.setState({
          selectedDayData:responseJson.data,
          fetchSelectedDayDataDone:true,
          selectedDayName:responseJson.data.forecast[0].datetime
        })
        this.props.pass(this.state.fetchForecastDone)
      })
      .catch((error) => {
        alert(error)
    });

  }

  getNextThreeDayDayName=()=> {
    const {selectedDayData, selectedDayName} = this.state;
    return this.state.nextThreeDayDayName.map((day,index) => {
      return (
        <Button 
          color = {
            selectedDayName.substring(0, 10) === day.datetime.substring(0, 10) ? 'red' : 'blue'
          }
          onPress={()=>this.getForecast(day)}
          title={this.getDayOfWeek(day)}  
          key={index}>
        </Button>
      )
    })
  }



  render() {
    const {forecast, fetchForecastDone} = this.state;
    
    return (
      <View style={styles.container}>
      {
        fetchForecastDone ?
        <View style={{flex:1,flexDirection:'column',justifyContent:'space-between',width:"100%"}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:"100%"}}>
        {this.getNextThreeDayDayName()}
        </View>
        <SingleDayForecast forecastData={this.state.selectedDayData.forecast}></SingleDayForecast>
        </View>
        :''
      }
        
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:3,
    paddingLeft: 20,
    paddingRight: 20
  }
});

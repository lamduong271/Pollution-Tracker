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

export default class Detaild extends React.Component {
    static navigationOptions = {
    header: null
    };
    constructor(props) {
      super(props);
        this.state = {
            pollutantsArr:[]
      }
    }

    componentDidMount() {
        const {pollutants} = this.props;
        const {pollutantsArr}=this.state;
        pollutantsArr.push(
            {
            name:'co',
            value:pollutants.co,
            percent:'56%'
            },
            {
            name:'no2',
            value:pollutants.no2,
            percent:'44%'
            },
            {
            name: 'o3',
            value: pollutants.o3,
            percent:'45%'
            },
            {
            name: 'pm10',
            value: pollutants.pm10,
            percent:'66%'
            },
            {
            name: 'pm25',
            value: pollutants.pm25,
            percent:'33%'
            },
            {
            name: 'so2',
            value: pollutants.so2,
            percent:'47%'
            })

        this.setState({
            pollutantsArr: pollutantsArr
        })


    }
    renderPollutant= ({item, index}) => {
    return (
       <View style={styles.details}>
       <Text style={styles.pollutantName}>{item.name.toUpperCase()}</Text>
       <View style={styles.pollutantValue}>
          <Text style={styles.concentration}>{item.value.concentration}</Text>
          <Text style={styles.units}>{item.value.units}</Text>
       </View>
       <Text style={styles.percent}>{item.percent}</Text>

        </View>
        )
    }

    render() {
        // alert(JSON.stringify(this.props.pollutants))
    return (
      <View
        style={styles.container}>
            

            <Carousel
            inactiveSlideOpacity={1}
              inactiveSlideScale={1}
              firstItem={0}
              sliderWidth={width-20}
              itemWidth={width-width/1.5}
              activeSlideAlignment="start"
              data = {
                  this.state.pollutantsArr
              }
              renderItem={this.renderPollutant}
              itemHeight={100}
          />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
  },
  details:{
    height:120,
    width:130,
    flexDirection: 'column',
    backgroundColor:'#fff',
    paddingHorizontal :  0,
    justifyContent:'flex-start',
    borderRadius: 10,
    shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowColor: '#5e73ff',
      shadowOpacity: 0.4,
    paddingTop: 10,
    paddingLeft: 10,
  },
  pollutantName: {
    color: '#5e73ff',
    marginTop: 10,
    marginLeft: 10,
    fontWeight:'500',
    fontSize: 22,
  },
  pollutantValue:{
    marginTop: 5,
    marginLeft: 10,
    flexDirection: 'row',
  },
  concentration:{
    fontSize:16
  },
  units:{
    marginLeft: 5,
    color: '#8e8e8e'
  },
  percent: {
    color:'black',
    marginLeft:10,
    marginTop: 5,
  }
});

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
      <LinearGradient
      colors = {
        ["rgba(94, 115, 255,0.4)", "rgba(94, 115, 255,0.8)"]
      }
        style={styles.container}>
        <Text 
          style={{alignItems:'center', fontSize:20, fontWeight:'500', color:'#fff', marginTop:20}}>
          {this.props.infor.name}
        </Text>

        <View style={{
            flexDirection:'column', 
            right:90,
            top:25, 
            position:'absolute'
            }}>
          <Text>Air quanlity : {this.props.infor.aqi}</Text>
          <Text>UV index : {this.props.infor.UV}</Text>
        </View>

        <Image 
          style={{
            height:50,
            width:50,
            position:'absolute',
            right:10,
            top:20
          }} 
          source={this.props.infor.source}></Image>
      </LinearGradient>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    height:height/10,
    width:'100%',
    borderRadius: 10,
    shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowColor: '#5e73ff',
      shadowOpacity: 0.4,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection:'row'
  }
});

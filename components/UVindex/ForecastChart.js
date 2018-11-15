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
  processColor,
  AppRegistry
} from 'react-native';
import { WebBrowser } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
const { height, width } = Dimensions.get('window');
import PureChart from 'react-native-pure-chart';
import * as shape from 'd3-shape'
export default class ForecastChart extends React.Component {
  static navigationOptions = {
    header: null
  };
  componenDidMount() {

  }

  render() {
    console.log("forecastData", this.props.forecastData)
    let dataArray = [];
    let restructuredData = this.props.forecastData.map(data => {
      let temp = {
        x:data.date_iso.substring(5,10),
        y:data.value
      }
      dataArray.push(temp)
    })
    var data = [
        {seriesName: 'series1', data: 
        
          dataArray
        , color: '#5e73ff'},
      ]

    return (
        <View style={{flexDirection:'column', marginBottom:50}}>
            <PureChart type={'bar'}
                data={data}
                width={width}
                height={height/4}
                backgroundColor={'rgba(225, 230, 242,1)'}
                paddingTop={50}
                showEvenNumberXaxisLabel={false}
                borderTopWidth={4}
                customValueRenderer={(index, point) => {
                return (
                    <Text style={{textAlign: 'center',color:'#fff',zIndex:1000}}>{point.x}</Text>
                )
                }}/>
      </View>
  )
  }
}

const styles = StyleSheet.create({
    chart: {
        flex: 1
      }
  
});
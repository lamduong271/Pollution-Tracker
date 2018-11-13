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
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
import Speedometer from 'react-native-speedometer-chart';
const { height, width } = Dimensions.get('window');
import { ProgressCircle }  from 'react-native-svg-charts';
import PercentageCircle from 'react-native-percentage-circle';
export default class SpeedometerWrapper extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const {currentUVIndexData} = this.props;
    const progress = Number(currentUVIndexData.value)*10;
    console.log("forecastData",this.props.forecastData)
    return (
      <View style={{flex:1,flexDirection:'column'}}>
          <View style={{flexDirection:'row'}}>
          <View style={{ width:'65%',paddingLeft:40, marginTop:30}}>
            <PercentageCircle 
            style={{alignContent: 'center',alignSelf: 'center',}}
            radius={100} 
            percent={progress} 
            color={"rgba(124, 142, 255,1)"}
            borderWidth={20}
            innerColor={'rgba(225, 230, 242,1)'}
            bgcolor={'#fff'}>
            </PercentageCircle>  
          </View>

          <View style={styles.uvLevelWrapper}>
            <View style={[styles.levels]}>
              <Text style={[styles.levelContent]}>0-2</Text>
              <Text style={[styles.levelContent]}>Low</Text>
            </View>

            <View style={[styles.levels]}>
              <Text style={[styles.levelContent]}>3-5</Text>
              <Text style={[styles.levelContent]}>Medium</Text>
            </View>

            <View style={[styles.levels]}>
             <Text style={[styles.levelContent]}>6-7</Text>
             <Text style={[styles.levelContent]}>High</Text>
            </View>

            <View style={[styles.levels, styles.selected]}>
              <Text style={[styles.selectedText]}>8-10</Text>
              <Text style={[styles.selectedText]}>Very High</Text>

            </View>
            <View style={[styles.levels]}>
              <Text style={[styles.levelContent]}>11+</Text>
              <Text style={[styles.levelContent]}>Extreme</Text>

            </View>

          </View>
          </View>

          
      </View>
      // <ProgressCircle
      //     style={ { height: 200 } }
      //     progress={ progress}
      //     progressColor={'rgb(134, 65, 244)'}
      //     data="aha"
      // />
//       <Speedometer 
//       style={{transform: [{ rotate: '-90deg'}], position:'absolute',right:-80, top:100, alignSelf: 'center',}} 
//       value={currentUVIndexData.value} 
//       totalValue={10}
//       size={300}
//       outerColor="#ced5ff"
//       internalColor="#5e73ff"
//       showText
//       text={currentUVIndexData.value} 
//       textStyle={{ color: 'green',backgroundColor:'rgba(225, 230, 242,1)',marginBottom: 40,fontSize: 25, }}
//       showLabels
//       labelStyle={{ color: 'blue' }}
//       showPercent
//       percentStyle={{ color: 'red',backgroundColor:'rgba(225, 230, 242,1)'}}
//       innerCircleStyle ={{backgroundColor:'rgba(225, 230, 242,1)'}}
//       percentSize={0.8}/>
// );
  )
  }
}

const styles = StyleSheet.create({
  levels:{
    backgroundColor:'#fff',
    height:width/5,
    width:width/5,
    margin: 5,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems:'center' ,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: '#5e73ff',
    shadowOpacity: 0.4,
    flexDirection: 'column',
    justifyContent:'center'
    
  },
  uvLevelWrapper: {
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    flex:1,
    alignItems:'center' ,
  },
  selected:{
    backgroundColor:'#5e73ff',
  },
  selectedText: {
    color:'#fff'
  },
  levelContent:{
    alignSelf: 'center',
  }
    
  
});
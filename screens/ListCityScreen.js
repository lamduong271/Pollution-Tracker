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
  FlatList,
  Dimensions
} from 'react-native';
import { WebBrowser } from 'expo';
import { LinearGradient } from "expo";
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
import Drawer from 'react-native-drawer';
import ListCity from '../components/Cities/ListCity';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
const { height, width } = Dimensions.get('window');


export default class ListCityScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  renderMenu = () => {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
        <View style={{flex:1,backgroundColor:'#5e73ff',flexDirection:'row', width:'100%', justifyContent:'center'}}>
          <Text style={{ color:'#fff',fontSize:25, fontWeight:'600', alignSelf:'center'}}>Menu</Text>
        </View>
        <View style={{flex:5, marginTop:20}}>
          <View style={{flexDirection:'row'}}>
            <Icon onPress={() => this.props.navigation.navigate('MainScreen')} name = "ios-home" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>Air Quanlity</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Icon onPress={() => this.props.navigation.navigate('UVRadiation')} name = "ios-home" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>UV Radiation</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Icon onPress={() => this.props.navigation.navigate('ListCityScreen')} name = "ios-home" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>List cities</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Icon onPress={() => this.props.navigation.navigate('MapView')} name = "ios-home" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>Map View</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Icon onPress={() => this.props.navigation.navigate('MainScreen')} name = "ios-home" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>Home</Text>
          </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={this.renderMenu()}
        tapToClose={true}
        openDrawerOffset={width/3}
        type = "overlay"
        tweenHandler={(ratio) => ({
        drawer: {
        opacity: 1,
        backgroundColor:'#fff'
      }
      })}>
      <LinearGradient
        colors = {
            // ["rgba(120, 192, 224,0.4)", "rgba(50, 147, 231,0.6)"]
             ["rgba(225, 232, 247,1)", "rgba(225, 230, 242,1)"]
        }
        style={styles.container}>
        <View style={{ height:100, alignItems:'center', flexDirection:'column'}}>
          <Text style={{alignSelf:'center',marginTop: 50,color:'#5e73ff', fontSize:25, fontWeight:'600'}}>Cities List</Text>
        </View>
      <ListCity></ListCity>
      </LinearGradient>
      <Icon2
        onPress={this.openControlPanel}
        style={styles.NavBar}
        name="menu"
        size={40}
        color="#5e73ff"
      />
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  NavBar: {
    position: 'absolute',
    top: 50,
    left: 20
  },
    actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: '#5e73ff',
    margin: 15,
  },
  MenuText: {
    fontSize: 20,
    color: '#5e73ff',
    margin: 15,  }
});

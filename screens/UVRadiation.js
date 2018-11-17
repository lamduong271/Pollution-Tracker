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
import { MonoText } from '../components/StyledText';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-circular-action-menu';
import UVMainPage from '../components/UVMainPage'
import Drawer from 'react-native-drawer';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
const { height, width } = Dimensions.get('window');


export default class UVRadiation extends React.Component {
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
      <View style={styles.container}>
        <UVMainPage></UVMainPage>

      </View>
      <Icon2
        onPress={this.openControlPanel}
        style={styles.NavBar}
        name="menu"
        size={40}
        color="#fff"
      />
      </Drawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'rgba(225, 230, 242,1)'
  },
  listCity: {
    position: 'absolute',
    bottom: 20,
    right: 20
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
    margin: 15,
  }
});

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
import MainScreen from '../components/MainScreen'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons";
import Menu from '../components/AirPollutionDaily/Menu';
import ActionButton from 'react-native-circular-action-menu';
import Drawer from 'react-native-drawer'
const { height, width } = Dimensions.get('window');


export default class AirPollutionDaily extends React.Component {
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
      <View style={{flex:1,flexDirection:'column',width:'100%'}}>
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
      
      <MainScreen></MainScreen>
      {/* <Menu></Menu> */}
      {/* <View style={{marginBottom:30}}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item  buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
            <Icon onPress={() => this.props.navigation.navigate('MainScreen')} name = "ios-home" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="Notifications" onPress={() => {}}>
            <Icon onPress={() => this.props.navigation.navigate('MapView')} name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="UVRadiation" onPress={() => {}}>
            <Icon onPress={() => this.props.navigation.navigate('UVRadiation')}  name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="All Tasks" onPress={() => {}}>
            <Icon onPress = {() => this.props.navigation.navigate('ListCityScreen')} name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="All Tasks" onPress={() => {}}>
            <Icon name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#5e73ff' title="All Tasks" onPress={() => {}}>
            <Icon name="ios-add" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
      </View> */}

      <Icon2
        onPress={this.openControlPanel}
        style={styles.NavBar}
        name="menu"
        size={40}
        color="#fff"
      />
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

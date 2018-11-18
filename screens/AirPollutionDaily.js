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
import Modal from "react-native-modal";


export default class AirPollutionDaily extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
          this.state = {
            isModalVisible: false,
        }
    } 

  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  componentDidMount() {
    setTimeout(()=>{ this._toggleModal() }, 6000);
  }

  _toggleModal = () =>{
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  renderAlert = () => {
    return (
      <View style={styles.popUp}>
      <View style={{alignItems:'center', padding:20,borderBottomWidth:1, borderBottomColor:'gray'}}>
        <Text style={{fontSize:20,fontWeight:'600', color:'red'}}>WARNING!</Text>
      </View>

      <View style={{paddingLeft:20, paddingRight:20, paddingTop:20}}>
        <Text>Air quanlity is very low</Text>
        <Text>Please reduce strenuous physical exertion</Text>
        <Text>Use your reliever inhaler more often</Text>
       
      </View>

      <TouchableOpacity style={styles.cancel} onPress={this._toggleModal}>
        <Text>Dismiss</Text>
      </TouchableOpacity>
        
      </View>
    )

  } 

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
            <Icon onPress={() => this.props.navigation.navigate('UVRadiation')} name = "ios-sunny" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>UV Radiation</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Icon2 onPress={() => this.props.navigation.navigate('ListCityScreen')} name = "view-list" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>List cities</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Icon2 onPress={() => this.props.navigation.navigate('MapView')} name = "map-marker" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>Map View</Text>
          </View>

          <View style={{flexDirection:'row'}}>
            <Icon2 onPress={() => this.props.navigation.navigate('Questionares')} name = "account" style={styles.actionButtonIcon} />
            <Text style={styles.MenuText}>Profile</Text>
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

      <Modal isVisible={this.state.isModalVisible} 
          style={{justifyContent:'center', alignItems:'center'}}>
            {this.renderAlert()}
      </Modal>
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
    fontSize: 25,
    height: 22,
    color: '#5e73ff',
    margin: 15,
  },
  MenuText: {
    fontSize: 20,
    color: '#5e73ff',
    margin: 15,
    
  },
    cancel:{
    position:'absolute',
    left: '40%',
    bottom:20,
    backgroundColor:'#a1a1a3',
    padding:10,
    borderRadius:10,
    margin: 5,
  },
  popUp:{ 
    height:height/4, 
    width:width/1.2, 
    backgroundColor:'#fff', 
    },
});

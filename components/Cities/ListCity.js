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
import City from './City';
import Modal from "react-native-modal";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


export default class ListCity extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
      super(props);
            this.state = {
              cities:[
                {
                  name:'Hanoi',
                  id:'1',
                  degree:30
                },
                {
                  name:'Helsinki',
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
              isModalVisible: false,
              selectedCity:'han'
              
      }
  }
  _toggleModal = () =>{
      this.setState({ isModalVisible: !this.state.isModalVisible });
    }
  saveCity = () => {
    console.log(this.state.selectedCity)
  }

  renderModelView = () => {
    return (
      <View style={styles.popUp}>
        <View style={{alignItems:'center', padding:20, backgroundColor:'#5e73ff'}}>
          <Text style={{fontSize:20,fontWeight:'600', color:'#fff'}}>Choose a city</Text>
        </View>

        {/* Input city  */}

        <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      textInputProps={{
        onChangeText: (text) => { this.setState({selectedCity:text})}
      }}
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyAg0l9mTBFRBuvRirAk4WL2SZ8BtQGCJn4',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
      
      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    />


        {/* Save/ Cancel */}
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.save} onPress={this.saveCity}>
          <Text style={{color:'#fff'}}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel} onPress={this._toggleModal}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


    componentDidMount() {

    }

  render() {
    return (
      <View
        style={styles.container}>
        <FlatList
            keyExtractor = {
                item => item.name
            }
            data={this.state.cities}
            renderItem={({item}) => <City name={item.name}></City>}
        />
        <View style={styles.buttonContainer}>
        <Icon onPress={this._toggleModal}  name = "plus" style={styles.buttonAddCity} />
        </View>

        <Modal isVisible={this.state.isModalVisible} 
          style={{justifyContent:'center', alignItems:'center'}}>
            {this.renderModelView()}
        </Modal>

        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonAddCity: {
    fontSize: 30,
    color:'#fff',
    alignSelf: 'center',
    marginLeft: 15,
  },
  buttonContainer: {
    position:'absolute',
    bottom:20,
    backgroundColor:'#5e73ff',
    height:60,
    width:60,
    borderRadius: 60,
    alignContent: 'center',
    flexDirection: 'row',
    left:'50%'
  },
  popUp:{ 
    height:height/2, 
    width:width/1.2, 
    backgroundColor:'#fff', 
    borderRadius:10 
  },
  buttonsContainer:{
    position:'absolute',
    bottom:20,
    flexDirection: 'row',
    alignSelf: 'center',
    alignContent: 'center',
  },
  save:{
    alignSelf: 'center',
    backgroundColor:'#5e73ff',
    padding:10,
    borderRadius: 10,
    margin: 5,
  },
  cancel:{
    alignSelf: 'center',
    backgroundColor:'#a1a1a3',
    padding:10,
    borderRadius:10,
    margin: 5,
  }
});

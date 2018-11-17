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

const { height, width } = Dimensions.get('window');

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
       style={styles.container}
       source = {require("../assets/images/background.jpeg")}
       >
      <LinearGradient
      colors = {
        ["rgba(120, 192, 224,0.6)", "rgba(50, 147, 231,1)"]
      }
      style = {
          styles.gradientCover
        } >
      <View style={styles.logo}>
        <Image
          style={{height:270, width:200}}
          source = {
            require("../assets/images/air.png")
          }
        ></Image>
      </View>

      <View style={styles.skip}>
        <Button 
        title="Skip"
        color='black'
        onPress={() => this.props.navigation.navigate('Questionares')}
        ></Button>
      </View>
      </LinearGradient>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientCover: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  logo: {
    alignSelf: 'center',
    alignContent: 'center',
    
  },
  skip: {
    marginBottom: 30,
    position:'absolute',
    bottom:0,
    alignSelf: 'center',
    alignContent: 'center',
  }
});

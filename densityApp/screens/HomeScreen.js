import React from 'react';
import {SearchBar} from 'react-native-elements';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

class MyButton extends React.Component {
  setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

  render(){
    return (
      <View ref = {component => this._root = component} {...this.props}>
        <Text style = {{ fontSize: 14, color: 'white', fontWeight: '80'}}>{this.props.label}</Text>
      </View>
    )
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

   state = {
    search: '',
   };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;
    return (
      <View style={styles.container}>
       			<View style={{
				height: 190,
				backgroundColor: '#2185C6',
				alignItems: 'center'
			}}>
			<View style={{
				height: 80,
				paddingTop: 30,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: '#2185C6'
			}}>
			<Image source={require('../assets/images/logo2.png')} resizeMode={'center'} />
			</View>
			<View style={{
				width:'90%',
				paddingTop: 10,
				alignItems: 'center',
				justifyContent: 'center'

			}}>		

		


			<SearchBar
    			placeholder="search by building"
    			onChangeText={this.updateSearch}
    			placeholderTextColor='#C1C1C1'
    			value={search}
    			platform="ios"
    			containerStyle={{backgroundColor:'#2185C6'}}
    			inputStyle={{backgroundColor: 'white'}}
    			inputContainerStyle={{backgroundColor: 'white'}}
    			leftIconContainerStyle={{backgroundColor: 'white'}}
    			rightIconContainerStyle={{backgroundColor: 'white'}}
          cancelButtonProps={{color:'white'}}
			/>
			</View>
      <View style={{
        flex: 1,
        fontSize: 2,
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
				height:18,
        backgroundColor: '#2185C6',
				alignItems: 'center',
			}}>
      <View style = {{flex: 1, paddingLeft: 30,}}>
      <TouchableOpacity>
        <MyButton label = "dining hall"/>
      </TouchableOpacity>
      </View>
      <View style = {{flex: 1, paddingLeft: 10,}}>
      <TouchableOpacity>
        <MyButton label = "library"/>
      </TouchableOpacity>
      </View>
      <View style = {{flex: 1,}}>
      <TouchableOpacity>
        <MyButton label = "student center"/>
      </TouchableOpacity>
      </View>
      <View style = {{flex: 1, paddingLeft: 30,}}>
      <TouchableOpacity>
        <MyButton label = "open now"/>
      </TouchableOpacity>
      </View>
      <View style = {{flex: 1, paddingLeft: 10, paddingRight: 0,}}>
      <TouchableOpacity>
        <MyButton label = "closed"/>
      </TouchableOpacity>
      </View>
      </View>
      </View>

        <View style={styles.body}>
          {/* Cards go here */}
        </View>
        <View>
          <Text style={ styles.footer }>
            Last updated:{"\n"}
            Maintained by ADI Labs{"\n"}
          </Text>
        </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  body: {
    backgroundColor: '#e2e2e2',
    paddingTop: 15,
    paddingHorizontal: 15,
    lineHeight: 20,
  },
  footer: {
    backgroundColor: '#e2e2e2',
    paddingTop: 15,
    paddingHorizontal: 15,
    lineHeight: 20,
    textAlign: "right",
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

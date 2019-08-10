
import React, { Component } from 'react';
import {
  Dimensions, Image, I18nManager, View,
  Text, ScrollView, Button, TouchableOpacity, Animated, Easing
} from 'react-native';
import {
  createAppContainer, createStackNavigator, createDrawerNavigator,
  SafeAreaView, DrawerItems, DrawerActions
} from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { TouchableNativeFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import StackViewStyleInterpolator from 'react-navigation-stack/lib/module/views/StackView/StackViewStyleInterpolator.js';
import MainPage from './src/screens/MainPage';
import ArticlePage from './src/screens/ArticlePage';
import HeaderMenu from './src/components/HeaderMenu';
import TestMain from './src/screens/TestMain';

let { height, width } = Dimensions.get('window');
EStyleSheet.build({ $rem: width / 380 });

I18nManager.forceRTL(true); // true for rtl false for ltr, need to refresh app twice after change

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppNavigationContainer />
    );
  }
}

class SecondPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>זה סתם עמוד אחי גזגז</Text>
        <Button title="אבטיח" style={{ width: scale(50), height: scale(50) }}
          onPress={() => this.props.navigation.navigate("MainPage")} />
      </View>
    );
  }
}


const MainStackNavigator = createStackNavigator({
  MainPage: {
    screen: MainPage,
    navigationOptions: ({ navigation }) => {
      const imageUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXn4GLwVDAS1PMmZG6nGTykQ_f499BjO1JHNoLZ7AcYSlcHqRG';

      return {
        
        headerRight: (
          <HeaderMenu navigation={navigation} />
        ),
        headerLeft: (
          <Image style={styles.imageContainer} source={{ uri: imageUri }} />
        )
      };
    }
  },
  ArticlePage: {
    screen: ArticlePage,

  }

  //Dashboard: DashboardScreen
}, {
    defaultNavigationOptions: ({ navigation }) => {

    },
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal, 
      transitionSpec: {
        useNativeDriver: true,
        duration: 300,
        timing: Animated.timing,
        easing: Easing.inOut(Easing.ease)
      },
    })
  })


const AppDrawerNavigator = createDrawerNavigator({
  MainPage: {
    screen: MainStackNavigator,
    navigationOptions: ({ navigation }) => {
      return { drawerLabel: "עמוד הבית", }
    }
  },
  SecondPage: {
    screen: ArticlePage,
    navigationOptions: ({ navigation }) => {
      return { drawerLabel: "סתם עמוד", }
    },
  },
}, {
    edgeWidth: 100,
    contentComponent: (props) =>
      <CustomDrawerContentComponent {...props} />,
    


  })

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>

    <View style={{ width: scale(300), height: scale(70), marginBottom: scale(10),
       borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 0.9,
        justifyContent: 'center'
         }} >
         <View style={{ width: '50%', height: '50%', marginStart: scale(10) }} >
          <Image style={{ flex: 1, width: null, height: null, resizeMode: 'contain'  }} 
          source={{ uri: 'https://www.doogri.co.il/wp-content/themes/websol-doogri/assets/images/logo-doogri-moto2.png' }} />
         </View>
      </View>

      <DrawerItems {...props} />

    </SafeAreaView>
  </ScrollView>
);

const AppNavigationContainer = createAppContainer(AppDrawerNavigator);

export default App;

const styles = EStyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    height: scale(50),
    width: scale(55),
    marginLeft: scale(15)
  },
  headerRight: {
    backgroundColor: '#fff',
    marginRight: scale(10),
    width: scale(55),
    height: scale(55),
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


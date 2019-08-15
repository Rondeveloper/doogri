
import React, { Component } from 'react';
import {
  Dimensions, Image, I18nManager, View, 
  Text, ScrollView, Button, TouchableOpacity, Animated, Easing
} from 'react-native';
import {
  createAppContainer, createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator,
  SafeAreaView, DrawerItems, DrawerActions
} from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import { scale } from 'react-native-size-matters';
import { TouchableNativeFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import StackViewStyleInterpolator from 'react-navigation-stack/lib/module/views/StackView/StackViewStyleInterpolator.js';
import HeaderMenu from './src/components/HeaderMenu';
import {MainPage, ArticlePage, NewsPage} from './src/screens';

let { height, width } = Dimensions.get('window');
EStyleSheet.build({ $rem: width / 380 });

I18nManager.forceRTL(true); // true for rtl false for ltr, need to refresh app twice after change

const SCREEN_WIDTH = Dimensions.get('window').width;

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

  },

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
        easing: Easing.inOut(Easing.ease),

      },

    })
  })

  const TopTabNavigator = createMaterialTopTabNavigator({
    News: { screen: NewsPage, navigationOptions: ({props}) => { return { tabBarLabel: 'חדשות' } } },
    RoadTests: { screen: NewsPage, navigationOptions: ({props}) => { return { tabBarLabel: 'מבחני דרכים' } } },
    Magazine: { screen: NewsPage, navigationOptions: ({props}) => { return { tabBarLabel: 'מגזין' } } },
    Motorsport: { screen: NewsPage, navigationOptions: ({props}) => { return { tabBarLabel: 'ספורט מוטורי' } } },
    Vehicle: { screen: NewsPage, navigationOptions: ({props}) => { return { tabBarLabel: 'רכב' } } },
  },{
    tabBarOptions: {
      style: {backgroundColor: '#2c2c2c', width: SCREEN_WIDTH*2},
      indicatorStyle: {width: SCREEN_WIDTH * 2 / 5}
    }
  })

const AppDrawerNavigator = createDrawerNavigator({
  MainPage: {
    screen: MainStackNavigator,
    navigationOptions: ({ navigation }) => {
      return { drawerLabel: "עמוד הבית", }
    }
  },
  News: {
    screen: TopTabNavigator,
    navigationOptions: ({ navigation }) => {
      return { drawerLabel: "חדשות", }
    },
  },
  RoadTests: {
    screen: TopTabNavigator,
    navigationOptions: ({ navigation }) => {
      return { drawerLabel: "מבחני דרכים", }
    },
  }
}, {
    edgeWidth: scale(20),
    contentComponent: (props) =>
      <CustomDrawerContentComponent {...props} />,



  })


const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>

      <MagazineLogo />
      <DrawerItems {...props} />

    </SafeAreaView>
  </ScrollView>
);

const MagazineLogo = () => (
  <View style={{
    width: scale(300), height: scale(70), marginBottom: scale(10),
    borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 0.9,
    justifyContent: 'center'
  }} >
    <View style={{ width: '50%', height: '50%', marginStart: scale(10) }} >
      <Image style={{ flex: 1, width: null, height: null, resizeMode: 'contain' }}
        source={{ uri: 'https://www.doogri.co.il/wp-content/themes/websol-doogri/assets/images/logo-doogri-moto2.png' }} />
    </View>
  </View>
)

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


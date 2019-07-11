
import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import { createAppContainer, createStackNavigator, createDrawerNavigator } from 'react-navigation';
import EStyleSheet from 'react-native-extended-stylesheet';
import Icon from 'react-native-vector-icons/Ionicons';
import MainPage from './src/components/screens/MainPage';
import { scale } from 'react-native-size-matters';

let {height, width} = Dimensions.get('window');
EStyleSheet.build({$rem: width / 380});

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
  MainPage: { screen: MainPage },
  //Dashboard: DashboardScreen
}, {
  defaultNavigationOptions: ({ navigation }) => {
    const imageUri = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXn4GLwVDAS1PMmZG6nGTykQ_f499BjO1JHNoLZ7AcYSlcHqRG';
        
    return {
      //header: null, 
      headerRight: (
        <Icon style={{paddingLeft: scale(20)}} name="md-menu" size={30}
        onPress={() => navigation.openDrawer()}></Icon>
      ),
      headerLeft: (
        <Image style={styles.imageContainer} source={{ uri: imageUri }}/>
      )
    };
  }
})

const AppDrawerNavigator = createDrawerNavigator({
  SideBar: { screen: MainStackNavigator },
},{
  edgeWidth: 100
})

const AppNavigationContainer = createAppContainer(AppDrawerNavigator);

export default App;

const styles = EStyleSheet.create({
  imageContainer: {
    height: scale(50),
    width: scale(55),
    marginLeft: scale(15)
  }
});


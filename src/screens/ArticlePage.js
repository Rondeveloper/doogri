import React from 'react';
import { View, Dimensions, Image, ScrollView, } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';

const { SCREEN_WIDTH, SCREEN_HEIGHT } = Dimensions.get('window');

export default class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.navigation.getParam('article'))
        return ( 
            <ScrollView style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH,
            }} >
                <View style={{height: scale(1000)}}>

                
                    <View style={{ height: scale(200), width: '100%'}}>   
                        <Image style={{ width: '100%', height: '100%' }}
                         source={ require('../images/car1.jpg') }/>
                    </View>
                    <View style={{ width: SCREEN_WIDTH, height: '100%',
                        backgroundColor: '#2b2b2b', borderRadius: 20,
                        bottom: scale(10) }}>

                    </View>
                </View>
            </ScrollView>
         );
    }
}

const styles = EStyleSheet.create({
    container: {
      flex: 1,
    }
  });
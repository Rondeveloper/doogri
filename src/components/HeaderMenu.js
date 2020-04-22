import React, {Component} from 'react';
import { TouchableOpacity, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableHighlight, TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    openDrawerFunc = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        return (
            <View style={styles.btn}>
                <TouchableNativeFeedback 
                    style={{width: scale(40), height: scale(40),
                    alignItems:'center', justifyContent: 'center'}}
                    background={TouchableNativeFeedback.Ripple('#2b2b2b', true)}
                    //onPressIn={this.onPressIn}
                    //onPressOut={this.onPressOut}
                    onPress={this.openDrawerFunc}
                    >
                    <Icon name="md-menu" size={30}
                    />
                </TouchableNativeFeedback >
            </View>);
    }
}

const styles = EStyleSheet.create({
    btn: {
        backgroundColor: '#fff',
        marginHorizontal: scale(5), // used to be marginRight, now margin from both sides in case I want to switch between to be headerRight / headerLeft
        width: scale(55),
        height: scale(50),
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        //overflow: 'hidden'
    }
})
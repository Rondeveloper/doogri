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
            activeButton: false
        }
    }

    openDrawerFunc = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        console.log('active: ' + this.state.activeButton)
        return (
            <View style={styles.btn}>
                <TouchableNativeFeedback 
                    style={{width: scale(50), height: scale(50),
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
        marginRight: scale(5),
        width: scale(55),
        height: scale(55),
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        //overflow: 'hidden'
    }
})
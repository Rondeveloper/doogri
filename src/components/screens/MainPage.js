
import React from 'react';
import { StyleSheet, View, Text, Button, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';
import { createAppContainer, createStackNavigator, createDrawerNavigator, createMaterialTopTabNavigator } from 'react-navigation';
import { increaseNumber } from '../../actions';
import TabsScreen from './TabsScreen';

class MainPage extends React.Component {

    constructor(props) {
        super(props);
        //this.state = {  }
    }

    onPressIncrease = () => {
        this.props.increaseNumber()
    }

    render() {
        const headerText = 'בנלי TRK502X במבחן דרכים';
        const subHeaderText = 'אחרי שרכבנו על הגרסה הרגילה, מגיעה זו המשפרת את תחום השטח ומוסיפה אבזור. האם יש לדגם ה-X את מה שצריך בשביל לתת פייט לגדולים ממנו?';
        const imageUri = 'http://www.doogri.co.il/wp-content/uploads/2019/05/IMG_3018-700x465.jpg';
        return (
            <View style={[styles.container, styles.align]}>
                <View style={{height: scale(100)}}>
                    <Image style={{flex:1}} source={require('../images/motorcycle.jpg')} />
                </View>
                <View style={[styles.mainArticle]}>
                
                    <View style={{backgroundColor: '#2c2c2b', bottom: scale(20)}}>
                        <Text style={styles.mainArticleTitle}>{headerText}</Text>
                        <Text style={styles.mainArticleSubtitle}>{subHeaderText}</Text>
                    </View>
                </View>



                {/*<Text>MainPage Screen</Text>
                <Text>number: {this.props.number}</Text>
                <Button title="Press to increase" 
                onPress={this.onPressIncrease}
                 />
                    <Image style={{flex:1}} source={{ uri: imageUri }} />
                */}
            </View>
        );
    }
}


const styles = EStyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'green'
    },
    mainArticle: {
        height: scale(250),
        width: '95%',
        //backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    align: {
        alignItems: 'center'
    },
    justify: {
        justifyContent: 'center'
    },
    mainArticleTitle: {
        color: '#fff'
    },
    mainArticleSubtitle: {
        color: '#fff'
    }
});

function mapStateToProps(state) {
    return {
        number: state.number
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increaseNumber: dispatch(increaseNumber())

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
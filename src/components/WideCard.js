import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from 'react-native-size-matters';
import Constants from '../constants';
import { withNavigation } from 'react-navigation';

class WideCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    openArticle = () => {
        this.props.navigation.navigate('ArticlePage')
    }

    render() {
        return (
            <TouchableOpacity activeOpacity={0.7} onPress={this.openArticle} >
                <View style={styles.container}>
                <Image style={styles.image}
                source={require('../images/car1.jpg')}
                />
                <View style={styles.textContainer}>
                    <Text style={[styles.text, {fontWeight: 'bold'}]}>
                        {Constants.carTitle1}
                    </Text>
                    <Text numberOfLines={2} style={[styles.text, { fontSize: scale(11), lineHeight: scale(17) }]}>
                        {Constants.carSubtitle1}
                    </Text>
                </View>
                </View>
            </TouchableOpacity>
        );
    }
}

export default withNavigation(WideCard);

const styles = EStyleSheet.create({
    container: {
        width: '100%',
        height: scale(80),
        flexDirection: 'row',
        paddingBottom: scale(8)
    },
    image: {
        width: '34%',
        height: '100%'
    },
    textContainer: {
        flex: 1,
        padding: scale(7),
        backgroundColor: '#000'
    },
    text: {
        color: '#f7ea08',
        fontSize: scale(15),
        
    }
})
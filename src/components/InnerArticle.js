import React from 'react';
import {
    View, Text, Image, TouchableOpacity, Dimensions,
    Platform
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from 'react-native-size-matters';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const { SCREEN_WIDTH, SCREEN_HEIGHT } = Dimensions.get('window');

class InnerArticle extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

    openArticle = () => {
        
    }

    render() {
        const { imageUri, title, subtitle } = this.props.article;
        return (
            <View style={{ paddingBottom: scale(10) }}>
                <View style={[styles.imageContainer]}>
                    <Image style={{ width: '100%', flex: 1 }}
                     source={ { uri: imageUri } } />
                </View>
                
                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text numberOfLines={3} style={[styles.subtitle,
                         { lineHeight: scale(16) }]}>
                        {subtitle}
                    </Text>
                </View>
            </View>

        )
    }
}


export default InnerArticle;

const styles = EStyleSheet.create({
    imageContainer: {
        height: scale(210),
        width: '100%'
    },
    text: {
        color: '#fff',
        fontSize: scale(15)
    },
    titlesContainer: {
        height: scale(85), // need to set height so if the subtitle is too short, the whole titlesContainer wont resize itself.
        width: SCREEN_WIDTH,
        padding: scale(7),
        paddingStart: scale(12),
        backgroundColor: '#f7ea08'
    },
    title: {
        color: '#000',
        fontSize: scale(16),
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#000',
        fontSize: scale(12),
    },
})
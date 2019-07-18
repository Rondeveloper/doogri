import React from 'react';
import {
    View, Text, Image, TouchableOpacity, Dimensions,
    Platform
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { scale } from 'react-native-size-matters';
import { connect } from 'react-redux';
import Constants from '../constants';
import { withNavigation } from 'react-navigation'
import {TouchableNativeFeedback} from 'react-native-gesture-handler';

const { SCREEN_WIDTH, SCREEN_HEIGHT } = Dimensions.get('window');

class MainArticle extends React.Component {
    constructor(props) {
        super(props);
    }

    openArticle = () => {
        const { article } = this.props;
        this.props.navigation.navigate("ArticlePage", {
            article
        });
    }

    render() {
        return (
            <View>
                {Platform.OS == 'android' ?
                    <TouchableNativeFeedback useForeground
                        //background={TouchableNativeFeedback.Ripple('#fff', false)}
                        onPress={this.openArticle}
                    >
                        <InnerArticle {...this.props} />
                    </TouchableNativeFeedback>
                    :
                    <TouchableOpacity activeOpacity={0.6}
                    onPress={this.openArticle} >
                        <InnerArticle {...this.props} />
                    </TouchableOpacity>
                }
            </View>
        )
    }
}

class InnerArticle extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        const { imagePath, titleText, subTitleText } = this.props.article;
        return (
            <View style={{ paddingBottom: scale(10) }}>
                <View style={[styles.imageContainer]}>
                    <Image style={{ width: '100%', flex: 1 }}
                     source={imagePath} />
                </View>
                
                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>{titleText}</Text>
                    <Text numberOfLines={3} style={[styles.subtitle,
                         { lineHeight: scale(16) }]}>
                        {subTitleText}
                    </Text>
                </View>
            </View>

        )
    }
    
}

function mapStateToProps(state) {
    return {
        article: {
            imagePath: state.article.imagePath,
            titleText: state.article.titleText,
            subTitleText: state.article.subTitleText
        }
    }
}

export default connect(mapStateToProps, {})(withNavigation(MainArticle))

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
        //height: scale(200),
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
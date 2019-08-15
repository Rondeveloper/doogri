import React from 'react';
import {
    View, Text, Dimensions,
    Image, ScrollView,
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';
import { connect } from 'react-redux';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    shouldComponentUpdate(nextState, nextProps) {
        return this.state !== nextState ||
                this.props !== nextProps;
    }

    render() {
        console.log('rendered ArticlePage')
        //const article = this.props.navigation.getParam('article');
        const { article } = this.props;
        return (
                <View>
                    <View style={{height: scale(210), width: '100%',
                        }}>
                            <Image style={{ width: '100%', height: '100%' }}
                                source={{ uri: article.imageUri }} />
                    </View>
                    <ScrollView style={{position: 'absolute', top: 0,
                    height: SCREEN_HEIGHT, width:SCREEN_WIDTH}}
                    
                    >
                        
                    <View style={{height: scale(195), width: '100%'}} />

                        <View style={[styles.articleContainer, { flex:1,flexDirection: 'row',flexWrap: 'wrap' }]}>

                            <View style={styles.titlesContainer}>
                                <Text style={styles.title}>{article.title}</Text>
                                <Text numberOfLines={6} style={styles.subtitle}>
                                    {article.subtitle}
                                </Text>
                            </View>

                            <View style={styles.authorsContainer}>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image style={styles.authorImage}
                                    source={require('../images/ronlev.jpg')} />
                                    <View style={{paddingStart: scale(7),}}>
                                        <Text style={styles.profession}>כתב</Text>
                                        <Text style={styles.name}>רון לב המלבלב</Text>
                                    </View>
                                </View>
                                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                    <Image style={styles.authorImage}
                                    source={require('../images/ronishit.jpg')} />
                                    <View style={{paddingStart: scale(7),}}>
                                        <Text style={styles.profession}>אבוקדו</Text>
                                        <Text style={styles.name}>רוני שיט</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{width: '100%', paddingHorizontal: scale(25),
                            alignItems: 'center', justifyContent: 'center'}} >
                                <Text style={[styles.name, {lineHeight: 15}]}>{article.longSubtitle}</Text>
                            </View>
                            
                        </View>
                    </ScrollView>
                </View>
                
        );
    }
}

function mapStateToProps(state) {
    return {
        article: state.article
    }
}

export default connect(mapStateToProps, {})(ArticlePage)

const styles = EStyleSheet.create({
    container: {
        flex: 1,
    },
    imageArticleContainer: {
        height: scale(210),
         width: '100%',
    },
    articleContainer: {
        width: SCREEN_WIDTH,
        
        backgroundColor: '#2b2b2b',
        borderRadius: 20,
        //bottom: scale(14),
    },
    titlesContainer: {
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: scale(25),
    },
    title: {
        color: '#fff',
        fontSize: scale(21),
        fontWeight: 'bold',
        paddingVertical: scale(15)
    },
    subtitle: {
        color: '#fff',
        opacity: 0.5,
        fontSize: scale(13),
        lineHeight: scale(16),
    },
    authorsContainer: {
        width: '100%',
        height: scale(60),
        marginVertical: scale(20),
        paddingHorizontal: scale(35),
        //backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    authorImage: {
        width: scale(42),
        height: scale(42),
        borderRadius: 20
    },
    profession: {
        color: '#7e7e7e',
        fontSize: scale(12)
    },
    name: {
        color: '#fff',
        fontSize: scale(12)
    }
});
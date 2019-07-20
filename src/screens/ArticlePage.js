import React from 'react';
import { View, Dimensions, Image, ScrollView, } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet'
import { scale } from 'react-native-size-matters';
import { connect } from 'react-redux';

const { SCREEN_WIDTH, SCREEN_HEIGHT } = Dimensions.get('window');

class ArticlePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        //const article = this.props.navigation.getParam('article');
        const { article } = this.props;
        return ( 
            <View style={{ height: SCREEN_HEIGHT, width: SCREEN_WIDTH,
            }} >
                <ScrollView style={{height: scale(1000)}}>

                
                    <View style={{ height: scale(200), width: '100%'}}>   
                        <Image style={{ width: '100%', height: '100%' }}
                         source={ { uri: article.imageUri } }/>
                    </View>
                    <View style={{ width: SCREEN_WIDTH, height: '100%',
                        backgroundColor: '#2b2b2b', borderRadius: 20,
                        bottom: scale(15) }}>

                    </View>
                </ScrollView>
            </View>
         );
    }
}

function mapStateToProps(state) {
    return {
        article: {
            imageUri: state.article.imageUri
        }
    }
}

export default connect(mapStateToProps, {})(ArticlePage)

const styles = EStyleSheet.create({
    container: {
      flex: 1,
    }
  });
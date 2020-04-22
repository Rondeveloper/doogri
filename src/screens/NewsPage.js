import React from 'react';
import {
  View, Text
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

function NewsPage({ route }) {
    const navigation = useNavigation();
    return ( 
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}} >
            <Text style={{ fontSize: scale(25), fontWeight: 'bold' }}>{route.params.title}</Text>
        </View>
    );

}
 
export default NewsPage;
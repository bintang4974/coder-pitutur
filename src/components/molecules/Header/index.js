import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { colors, responsiveHeight, responsiveWidth } from '../../../utils';

const Header = () => {
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>CAFEKU</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: responsiveHeight(80)
    },
    wrapper: {
        backgroundColor: 'yellow',
        width: responsiveWidth(100),
        
    }
})

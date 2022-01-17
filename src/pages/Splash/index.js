import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Logo } from '../../assets';
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils';

const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000);
    }, [])

    return (
        <View style={styles.page}>
            <Image source={Logo} style={styles.logo} />
            <Text style={styles.title}>Pitutur</Text>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    logo: {
        width: responsiveWidth(75),
        height: responsiveHeight(75)
    },
    title: {
        fontSize: 37,
        color: colors.primary
    }
})

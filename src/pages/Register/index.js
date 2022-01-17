import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LogoWhite } from '../../assets';
import { Button, Gap, Input } from '../../components';
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils';

const Register = () => {
    return (
        <View style={styles.page}>
            <View style={styles.wrapperHeader}>
                <Image source={LogoWhite} style={styles.logo} />
                <View>
                    <Text style={styles.textLogo}>Pitutur</Text>
                    <Text style={styles.textLogo}>Register</Text>
                </View>
            </View>
            <Gap height={24} />
            <View style={styles.cardBody}>
                <Input placeholder="Email" />
                <Gap height={30} />
                <Input placeholder="Nama Lengkap" />
                <Gap height={30} />
                <Input placeholder="NIM" />
                <Gap height={30} />
                <Input placeholder="Jurusan" />
                <Gap height={30} />
                <Input placeholder="Password" />
                <Gap height={40} />
                <Button text="Proses" />
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1
    },
    wrapperHeader: {
        backgroundColor: colors.primary,
        height: responsiveHeight(150),
        borderBottomRightRadius: 47,
        padding: 25,
        flexDirection: 'row'
    },
    logo: {
        width: responsiveWidth(90),
        height: responsiveHeight(90)
    },
    textLogo: {
        fontSize: 26,
        fontFamily: fonts.primary.bold,
        color: colors.white
    },
    cardBody: {
        backgroundColor: colors.primary,
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21
    }
})

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ImageEmail, ImageLock, LogoWhite } from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { colors, fonts, responsiveHeight, responsiveWidth } from '../../utils';

const Login = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <View style={styles.wrapperHeader}>
                <Image source={LogoWhite} style={styles.logo} />
                <View style={styles.wrapperText}>
                    <Text style={styles.textLogo}>Pitutur</Text>
                    <Text style={styles.textLogo}>Login</Text>
                </View>
            </View>
            <Gap height={30} />
            <Input
                placeholder="Email"
                type="icon"
                icon={ImageEmail}
            />
            <Gap height={20} />
            <Input
                placeholder="Password"
                type="icon"
                icon={ImageLock}
            />
            <Gap height={10} />
            <Text style={styles.forgotPass}>Lupa Password?</Text>
            <Gap height={12} />
            <Button text="PROSES" />
            <Gap height={15} />
            <View style={styles.footer}>
                <Text style={styles.regis}>Belum Punya Akun?</Text>
                <Link
                    text="Register"
                    onPress={() => navigation.navigate('Register')}
                />
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: {
        padding: 30,
        backgroundColor: colors.primary,
        flex: 1
    },
    wrapperHeader: {
        flexDirection: 'row',
        alignItems: 'center'
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
    forgotPass: {
        fontFamily: fonts.primary.semibold,
        color: colors.grey,
        textAlign: 'right'
    },
    regis: {
        fontFamily: fonts.primary.semibold,
        color: colors.white,
        marginRight: 8
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})

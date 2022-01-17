import React from 'react';
import { StyleSheet, TextInput, View, Text, Image } from 'react-native';
import { colors } from '../../../utils';

const Input = ({ placeholder, type, icon }) => {
    if (type === "icon") {
        return (
            <View style={styles.inputIcon}>
                <Image
                    source={icon}
                    style={styles.icon}
                />
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor={colors.white}
                />
            </View>
        )
    }

    return (
        <View style={styles.input}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.white}
            />
        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderColor: colors.white
    },
    inputIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        paddingVertical: 2,
        paddingHorizontal: 10,
        borderColor: colors.white
    },
    icon: {
        height: 30,
        width: 30,
        marginRight: 10
    }
})

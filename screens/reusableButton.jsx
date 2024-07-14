import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/FontAwesome';

const Button = ({ kind, variant, size, iconOnly, title }) => {
    const buttonStyles = [styles.button, styles[kind], styles[variant], styles[size]];
    const textStyles = [styles.text, styles[`${size}Text`]];

    return (
        <TouchableOpacity style={buttonStyles}>
            {iconOnly ? (
                <Icon name={kind} size={styles.iconSize[size]} color='#fff' />
            ) : (
                <>
                    <Icon name={kind} size={styles.iconSize[size]} color='#ff' />
                    <Text style={textStyles}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        margin: 5,
    },
    primary: {
        backgroundColor: '#007bff',
        color:'white',
    },
    secondary: {
        backgroundColor: '#6c757d',
    },
    success: {
        backgroundColor: '#28a745',
    },
    danger: {
        backgroundColor: '#dc3545',
    },
    warning: {
        backgroundColor: '#ffc107',
    },
    info: {
        backgroundColor: '#17a2b8',
    },
    large: {
        padding: 15,
    },
    small: {
        padding: 5,
    },
    text: {
        color: '#fff',
        marginLeft: 5,
    },
    largeText: {
        fontSize: 18,
    },
    smallText: {
        fontSize: 12,
    },
    iconSize: {
        large: 20,
        small: 10,
    },
});

export default Button;
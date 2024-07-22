import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native';

const Category = ({ item, selectedCategory, setSelectedCategory }) => {
    return (
        <TouchableOpacity onPress={() => setSelectedCategory(item)}>
            <Text style={[styles.categoryTxt, selectedCategory === item &&
            {
                color: "#FFFFFF",
                backgroundColor: '#E5B143'
            },
            ]}>
                {item}
            </Text>
        </TouchableOpacity>
    )
}

export default Category;

const styles = StyleSheet.create({
    categoryTxt: {
        fontSize: 16,
        fontWeight: '500',
        color: '#938F8F',
        backgroundColor: '#DFDCDC',
        textAlign: 'center',
        borderRadius: 17,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 8,
    },
})
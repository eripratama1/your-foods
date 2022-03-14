import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{ uri: props.image }} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealRow: {
        flexDirection: 'row',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealItem: {
        flex:1,
        margin:15,
        height:200,
        borderRadius:10,
        overlayColor:'hidden',
        alignItems:'center',
        paddingBottom:25,
        
        // paddingTop:8,
        // paddingLeft:10,
        // paddingRight:10,
        // padding:30,
        // alignItems:'center',
        // marginBottom: 15,

        //backgroundColor:'#f5f5f5',
        // height: 200,
        // width: '100%',
        // borderRadius:10,
        // overflow:'hidden'
    },
    mealHeader: {
        height: '95%'
    },
    mealDetail: {
        paddingHorizontal: 15,
        justifyContent: 'space-between'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.3)',
        paddingVertical: 5,
        paddingHorizontal: 12
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
    }
})

export default MealItem
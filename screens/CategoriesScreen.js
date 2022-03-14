import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryGridTile from '../components/CategoryGridTile'
import {CATEGORIES} from '../data/dummy-data'

const CategoriesScreen = props => {

    const renderGridItem = (itemData) => {
        return(
            <CategoryGridTile
            title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({routeName:'CategoryMeals',params:{
                    categoryId:itemData.item.id
                }})
            }}
            />
        )
    }
    
    return (
      <FlatList keyExtractor={(item,index) => item.id} data={CATEGORIES} numColumns={2} renderItem={renderGridItem}/>
    )
}

CategoriesScreen.navigationOptions = {
    headerTitle:'Home',
}

export default CategoriesScreen

const styles = StyleSheet.create({})
import { Platform } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealScreen from '../screens/CategoryMealScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import Colors from '../constants/Colors'
import { createAppContainer } from 'react-navigation'

const AppNavigator = createStackNavigator({
    Categories: {
        headerTitleAlign: 'center',
        screen: CategoriesScreen
    },
    CategoryMeals: CategoryMealScreen,
    MealDetail: {
        screen: MealDetailScreen
    }

}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
})

export default createAppContainer(AppNavigator)
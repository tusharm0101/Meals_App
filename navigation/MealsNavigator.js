import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';


const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontWeight: 'bold'
    },
    headerBackTitleStyle: {
        //fontWeight: 'bold'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
}

const MealsNavigator = createStackNavigator({
    Categoties:{ 
       screen: CategoriesScreen,
    }, 
    CategoryMeals: {
        screen: CategoryMealScreen,
    },
    MealDetail: MealDetailScreen
},
 {
    defaultNavigationOptions: defaultStackNavOptions
});

const FavNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, 
    {
    defaultNavigationOptions: defaultStackNavOptions
});

const tabScreenConfig ={
    Meals: {
        screen: MealsNavigator, 
        navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return (
                <Ionicons
                    name='ios-restaurant' 
                    size={25} 
                    color={tabInfo.tintColor} 
                />
            );
        },
        tabBarColor: Colors.primaryColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontWeight: 'bold'}}>Meals</Text> : 'Meals'
    }},
    Favorites: {screen: FavNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return (
                <Ionicons
                    name='ios-star' 
                    size={25} 
                    color={tabInfo.tintColor} 
                />
            );
        },
        tabBarColor: Colors.accentColor,
        tabBarLabel: Platform.OS === 'android' ? <Text style={{fontWeight: 'bold'}}>Favorites</Text> : 'Favorites'
    }},
};

const MealsFavTabNavigator =
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        }) 
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                labelStyle: {
                  //  fontWeight: 'bold'
                },
                activeTintColor: Colors.accentColor
            }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
 }, {
//     navigationOptions: {
//         drawerLabel: 'Filters!!!'
//     },
    defaultNavigationOptions: defaultStackNavOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs:{
        screen: MealsFavTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontWeight: 'bold'
        }
    }
});

export default createAppContainer(MainNavigator);
import React from "react";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from "react-redux";

import HeaderButton from '../componets/HeaderButton';
import MealList from "../componets/MealList";

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);

    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    );
};

FavoritesScreen.navigationOptions = (navData) => {
    return ({
    headerTitle: 'Your Favorites',
    headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="Menu" iconName="ios-menu"  onPress={() => {
            navData.navigation.toggleDrawer();
          }} />
    </HeaderButtons>
    });
};




export default FavoritesScreen;
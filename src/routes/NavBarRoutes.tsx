import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FavouritesScreen } from "../screens/AppStack/FavouritesScreen";
import { GuidesScreen } from "../screens/AppStack/GuidesScreen";
import { MeScreen } from "../screens/AppStack/MeScreen";
import { PlanScreen } from "../screens/AppStack/PlanScreen";
import { SearchScreen } from "../screens/AppStack/SearchScreen";
import { GuidesRoutes } from "./GuidesRoutes";

const App = createMaterialBottomTabNavigator();

export const NavBarRoutes = () => {
  return (
    <App.Navigator
      initialRouteName="Guides"
      activeColor="#DD5E89"
      barStyle={{ backgroundColor: "#FFAFCC" }}
    >
      {/* For the 4 different navigation tabs */}
      <App.Screen
        name="Guides"
        component={GuidesRoutes}
        options={{
          tabBarLabel: "Guides",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="navigation" color={color} size={26} />
          ),
        }}
      />
      <App.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="map-search-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      {/* <App.Screen
        name="Plan"
        component={PlanScreen}
        options={{
          tabBarLabel: "Plan",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="calendar-multiple-check"
              color={color}
              size={26}
            />
          ),
        }}
      /> */}
      <App.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          tabBarLabel: "Favourites",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <App.Screen
        name="Me"
        component={MeScreen}
        options={{
          tabBarLabel: "Me",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="diving-helmet"
              color={color}
              size={26}
            />
          ),
        }}
      />

      {/* Actual usage screens */}
      {/* <App.Screen name="Route" component={GuideScreen} />
      <App.Screen name="Details" component={DetailsScreen} /> */}
    </App.Navigator>
  );
};

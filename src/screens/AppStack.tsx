import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./AppStack/SearchScreen";
import { GuidesScreen } from "./AppStack/GuidesScreen";
import { FavouritesScreen } from "./AppStack/FavouritesScreen";
import { MeScreen } from "./AppStack/MeScreen";
import { DetailsScreen } from "./AppStack/DetailsScreen";

const App = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <App.Navigator
      initialRouteName="Guides"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* For the 5 different navigation tabs */}
      <App.Screen name="Search" component={SearchScreen} />
      <App.Screen name="Guides" component={GuidesScreen} />
      <App.Screen name="Favourites" component={FavouritesScreen} />
      <App.Screen name="Me" component={MeScreen} />

      {/* Actual usage screen */}
      <App.Screen name="Details" component={DetailsScreen} />
    </App.Navigator>
  );
};

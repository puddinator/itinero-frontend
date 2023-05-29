import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SearchScreen } from "./AppStack/SearchScreen";
import { GuidesScreen } from "./AppStack/GuidesScreen";
import { FavouritesScreen } from "./AppStack/FavouritesScreen";
import { MeScreen } from "./AppStack/MeScreen";
import { GuideScreen } from "./AppStack/GuideScreen";
import { DetailsScreen } from "./AppStack/DetailsScreen";
import { PlanScreen } from "./AppStack/PlanScreen";

const App = createNativeStackNavigator();

export const AppStack = () => {
  return (
    <App.Navigator
      initialRouteName="Search"
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* For the 5 different navigation tabs */}
      <App.Screen name="Search" component={SearchScreen} />
      <App.Screen name="Guides" component={GuidesScreen} />
      <App.Screen name="Plan" component={PlanScreen} />
      <App.Screen name="Favourites" component={FavouritesScreen} />
      <App.Screen name="Me" component={MeScreen} />

      {/* Actual usage screens */}
      <App.Screen name="Route" component={GuideScreen} />
      <App.Screen name="Details" component={DetailsScreen} />
    </App.Navigator>
  );
};

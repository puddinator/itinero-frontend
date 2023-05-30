import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FavouritesScreen } from "../screens/AppStack/FavouritesScreen";
import { GuidesScreen } from "../screens/AppStack/GuidesScreen";
import { MeScreen } from "../screens/AppStack/MeScreen";
import { PlanScreen } from "../screens/AppStack/PlanScreen";
import { SearchScreen } from "../screens/AppStack/SearchScreen";
import { DetailsScreen } from "../screens/AppStack/DetailsScreen";

const Guides = createNativeStackNavigator()

export const GuidesRoutes = () => {
  return (
    <Guides.Navigator
      initialRouteName="Guides"
    >
      <Guides.Screen name="Guides" component={GuidesScreen} />
      <Guides.Screen name="Details" component={DetailsScreen} />
    </Guides.Navigator>
  );
};

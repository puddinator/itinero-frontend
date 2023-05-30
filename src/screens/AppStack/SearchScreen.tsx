import { MaterialIcons } from "@expo/vector-icons";
import { Icon, Input, Pressable, Text, Image, Stack } from "native-base";
import { useState } from "react";
import { Dimensions, View } from "react-native";

const handlePress = () => {};

export const SearchScreen = () => {
  const WINDOW_HEIGHT = Dimensions.get("window").width;

  const [searchTerm, setSearchTerm] = useState("");

  const logo = require("../../../assets/images/search-background.png");

  return (
    <>
      <Image
        style={{ position: "absolute" }}
        source={logo}
        alt="search background"
        height={WINDOW_HEIGHT}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Stack space={10}>
          <Text fontSize={"3xl"} color="white" fontWeight={600}>
            Let's make your next travel incredible
          </Text>
          <Input
            size="xl"
            InputLeftElement={
              <Pressable onPress={() => handlePress()}>
                <Icon
                  as={<MaterialIcons name="search" />}
                  size={5}
                  mr="2"
                  color="grey"
                />
              </Pressable>
            }
            placeholder="Search for guides, users, attractions..."
            placeholderTextColor="black"
            onChangeText={setSearchTerm}
          />
        </Stack>
      </View>
    </>
  );
};

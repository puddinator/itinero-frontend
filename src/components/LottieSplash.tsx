import { useRef, ReactNode, useState } from "react";
import { View } from "react-native";
import LottieView from "lottie-react-native";

export const LottieSplash = (props: {
  setIsAnimationFinish: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { setIsAnimationFinish } = props;

  const animation = useRef(null);

  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <LottieView
        autoPlay
        loop={false}
        ref={animation}
        style={{
          width: 100,
          height: 100,
        }}
        source={require("./../../assets/lottie/splashscreen.json")}
        onAnimationFinish={() => {
          setIsAnimationFinish(true);
        }}
      />
    </View>
  );
};

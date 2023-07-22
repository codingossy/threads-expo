import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  RefreshControl,
} from "react-native";
import { Text, View } from "../../components/Themed";
import Lottie from "lottie-react-native";
import { useContext, useEffect, useRef } from "react";

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null);
  // const threads = useContext(ThreadContext);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingTop: Platform.select({ android: 20 }),
          paddingHorizontal: 10,
        }}
        // ios only
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor={"transparent"}
            onRefresh={() => animationRef.current?.play()}
          />
        }
      >
        <Lottie
          ref={animationRef}
          // autoPlay
          source={require("../../assets/animation_lkdrlx56.json")}
          style={{
            width: 90,
            height: 90,
            alignSelf: "center",
          }}
          loop={false}
          onAnimationFinish={() => animationRef.current?.pause()}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

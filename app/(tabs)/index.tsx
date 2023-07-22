import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Platform,
  RefreshControl,
} from "react-native";
import { Text, View } from "../../components/Themed";
import Lottie from "lottie-react-native";
import { useEffect, useRef } from "react";
import { threadsListData } from "../../data";
import ThreadsList from "../../components/home/threadslist/ThreadsList";

export default function HomeScreen() {
  const animationRef = useRef<Lottie>(null);
  // const threads = useContext(ThreadContext);

  useEffect(() => {
    animationRef.current?.play();
  }, []);

  return (
    <SafeAreaView className=" flex-1 ">
      <ScrollView
      showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Platform.select({ android: 20 }),
          
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

        <View className="">
          {threadsListData.map((threads) => (
            <ThreadsList threads={threads} key={threads.id} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Threads } from "../../../types-ts";

interface Props {
  threads: Threads;
}
const Avatars = ({ threads }: Props) => {
  return (
    <TouchableOpacity className="">
      <Image
        alt="image"
        className="w-8 h-8 rounded-full"
        resizeMode="cover"
        source={{ uri: threads.avatar }}
      />
    </TouchableOpacity>
  );
};

export default Avatars;

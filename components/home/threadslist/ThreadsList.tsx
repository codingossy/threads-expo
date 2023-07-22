import {
  View,
  Pressable,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import React from "react";
import { Threads } from "../../../types-ts";
import Avatars from "./Avatars";
import { Text } from "../../Themed";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

interface ThreadsProps {
  threads: Threads;
}
const ThreadsList = ({ threads }: ThreadsProps) => {
  return (
    <Pressable className=" flex-row  border-b border-neutral-500 mt-1 p-3 ">
      {/* avatar left side */}

      <Avatars threads={threads} />

      {/* details right side */}

      <View className="ml-8">
        <View>
          <Text className=" lowercase font-semibold">{threads.username}</Text>

          <View className="w-80">
            {threads.thread.map((thread) => (
              <View key={thread.id}>
                <View className="my-1 mb-3">
                  <Text className="w-[292px]">{thread.text}</Text>
                </View>
                {thread.images && (
                  <View>
                    <Image
                      source={{ uri: thread?.images }}
                      className={` h-80 rounded-md ${
                        Platform.OS === "ios" ? "w-[320px] " : "w-[295px]"
                      }`}
                    />
                  </View>
                )}
              </View>
            ))}
          </View>

          <View className="my-2 flex-row items-center gap-x-2">
            <TouchableOpacity>
              <AntDesign name="hearto" size={18} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <EvilIcons name="comment" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="retweet" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <EvilIcons name="sc-telegram" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {threads.thread.map((thread) => (
            <>
              {thread.replies.slice(0, 1).map((reply) => (
                <View className="flex-col">
                  <Text>{reply.user}</Text>
                  <Text>{reply.text}</Text>
                  <View className="my-2 flex-row items-center gap-x-2">
                    <TouchableOpacity>
                      <AntDesign name="hearto" size={18} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <EvilIcons name="comment" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <AntDesign name="retweet" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                      <EvilIcons name="sc-telegram" size={24} color="white" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

export default ThreadsList;

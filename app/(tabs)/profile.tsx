import { Text, View } from "react-native";

export default function Profile() {
  return (
    <View className="flex-1 ">
      <Text className="text-sky-500"> This is the profile.</Text>
      <View className="border-2 flex-row justify-between">
        <Text>
          hello world
        </Text>
        <Text>
          I am inline
        </Text>
      </View>
    </View>
  );
}

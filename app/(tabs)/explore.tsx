import { Text, View } from "react-native";
import { Culture } from "@/components/Culture";

export default function Explore() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-black"> This is the explore page.</Text>
        <Culture 
          containerStyles=" bg-gray-300 rounded-2xl h-32 w-32"
          imgStyles=""
          title="Trinidad"
          titleStyles="text-center"
        />

    </View>
  );
}

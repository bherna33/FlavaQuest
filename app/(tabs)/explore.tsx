import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Explore() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-black"> This is the explore page.</Text>
      <Link href={"/(auth)"}> go to auth</Link>
    </View>
  );
}

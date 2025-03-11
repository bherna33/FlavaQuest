import { Button } from "@/components/ui";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Explore() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-black"> This is the explore page.</Text>
      <Link href={"/(auth)"}> go to auth</Link>

      <Button
        title="Button"
        buttonStyles="border-2 w-80 rounded-3xl m-4 "
        textStyles="text-xl font-bold text-center p-4"
      />
    </View>
  );
}

import { Text, TextInput, View } from "react-native";

export default function Recipes() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-400 "> This is the Recipes page.</Text>
      <TextInput 
        className="border-2 border-indigo-600 rounded-md text-lg bg-gray-500 "
        placeholder="this is a test"
      />
    </View>
  );
}

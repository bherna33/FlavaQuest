import { SearchBar } from "@/components/SearchBar";
import Title from "@/components/Title";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1">
      <Title
        title="Start Your Quest for Flavor!"
        className="font-bold text-4xl text-center"
      /> 
      <SearchBar 
        placeholder="Search Foods, Drinks, Deserts"
        className="border-2 p-4 rounded-md mx-4"
      />         
        {/* <Text> hello from flavor quest </Text>         */}
    </View>    
  );
}

import SearchBar from "@/components/SearchBar";
import Title from "@/components/Title";
import { Trending } from "@/components/Trending";
import { View, SafeAreaView} from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Title
          title="Start Your Quest for Flavor! "
          className="font-bold text-4xl text-center m-4 py-4"
        /> 
        <SearchBar 
          placeholder="🔍 Search Foods, Drinks, Deserts"
          className="border-2 p-4 rounded-2xl m-4 "
        />

        <Trending 
          imageStyles =""
          containerStyles="bg-gray-300 m-4 rounded-3xl h-64 drop-shadow-lg shadow-lg"
          buttonStyles="border-2 m-4 p-3 rounded-2xl"
          titleStyles="text-3xl font-bold my-4 ml-5 "
          textStyles="text-2xl text-center"
          column=" max-w-64 mt-5"
        />
      </View>
    </SafeAreaView>
        
  );
}

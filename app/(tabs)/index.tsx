import { Carousel, Culture } from "@/components/Culture";
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
          className="border-2 p-4 rounded-2xl m-4"
        />

        <Trending 
          imageStyles =""
          containerStyles="bg-gray-300 m-4 rounded-3xl h-64 shadow-sm"
          buttonStyles="border-2 m-4 p-3 rounded-2xl"
          titleStyles="text-3xl font-bold my-4 ml-5 "
          textStyles="text-2xl text-center"
          column=" max-w-64 mt-5"
        />
        
        {/* <Culture 
          containerStyles=" bg-gray-300 rounded-2xl h-32 w-32"
          imgStyles=""
          title="Trinidad"
          titleStyles="text-center"
        /> */}

        <Carousel
          items={[
            <Culture 
              imgStyles=""
              title="Trinidad"
            />,

            <Culture 
              imgStyles=""
              title="Haiti"
            />,

            <Culture 
              imgStyles=""
              title="Africa"
            />,

            <Culture 
              imgStyles=""
              title="Jamaica"
            />,

          ]}
        
        />

      </View>
    </SafeAreaView>
        
  );
}

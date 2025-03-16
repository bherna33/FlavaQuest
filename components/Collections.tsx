import { TouchableOpacity, View, Text } from "react-native";
import { InLine } from "./ui";

export function Collections(){

    return(
        <View>
            <InLine 
				leftText="Your Collections"
				leftTextStyle="font-bold text-2xl"
				rightText="See all"
				rightTextStyle="mt-2"
				container="p-4"
			/>
             <TouchableOpacity className="px-4 flex-row justify-between">

                <View className="size-64 bg-gray-200 rounded-3xl"/>

                <View className="justify-between">

                    <View className="w-48 h-32 bg-gray-200 rounded-3xl"/>

                    <View className="w-48 h-28 bg-gray-200 rounded-3xl justify-center">

                        <Text className="font-bold text-center">
                            45+ Recipes
                        </Text>

                    </View>

                </View>

            </TouchableOpacity>
            
        </View>
    );
}
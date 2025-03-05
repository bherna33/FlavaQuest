import { View, Linking, TouchableOpacity, ImageBackground} from "react-native";
import Title from "./Title";
import { Button } from "./Trending";

interface RecommendedProps{
    title: string;
    titleStyle: string;
    subTitle: string;
    subTitleStyle: string;
    containerStyle?: string;
}

export function Recommended(props: RecommendedProps){
    return (
        <View className={props.containerStyle}>
            <View className="items-start absolute">
                <Title 
                    title={props.title}
                    className={props.titleStyle}
                />
            </View>

            <View className="items-end">
                <Title 
                    title={props.subTitle}
                    className={props.subTitleStyle}
                    // onPress={() => Linking.openURL("google.com")}
                />
            </View>
        </View>
    );
}

interface ItemProps{
    foodName: string;
    rating?: string;

}

export function Item(props:ItemProps){
    return (
        <View className="w-72 ml-4 ">
            <Food/>
            <TouchableOpacity>
                <Recommended
                    title={props.foodName}
                    titleStyle="text-2xl font-bold"
                    subTitle="⭐ 4.5"
                    subTitleStyle="text-2xl font-bold"
                />
                <Title 
                    className="text-slate-400"
                    title="Lorem ipsum dolor sit amet..."
                />
            </TouchableOpacity>
        </View>
    );
}

interface FoodProps{
    imageStyles?: string;
}

export function Food(props:FoodProps){
    return (
        <TouchableOpacity className="h-48 w-72 bg-gray-300 rounded-3xl shadow-sm" >
            <ImageBackground className={props.imageStyles}>
                <View className="items-end">
                    <Button 
                        buttonStyles="bg-gray-500 border-2 rounded-2xl w-14 h-12"
                        title="+"
                        textStyles="text-4xl text-center"
                    />
                </View>
                
            </ImageBackground>
        </TouchableOpacity>
    );
}


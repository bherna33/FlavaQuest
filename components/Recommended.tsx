import { View, Linking, TouchableOpacity, ImageBackground} from "react-native";
import Title from "./Title";
import { Button } from "./Trending";

interface RecommendedProps{
    title: string;
    titleStyle: string;
    subTitle: string;
    subTitleStyle: string;
    containerStyle?: string;
    titleContainerStyles: string;
    subTitleContainerStyles: string;
}

export function Recommended(props: RecommendedProps){
    return (
        <View className={props.containerStyle}>
            <View className={props.titleContainerStyles}>
                <Title 
                    title={props.title}
                    className={props.titleStyle}
                />
            </View>

            <View className={props.subTitleContainerStyles}>
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
    containerStyles: string;
    foodName: string;
    foodContainerStyles: string;
    buttonContainerStyles: string
    buttonStyles: string;
    rating?: string;

}

export function Item(props:ItemProps){
    return (
        <View className={props.containerStyles}>
            <TouchableOpacity>
                <Food
                    containerStyles={props.foodContainerStyles}
                    buttonContainerStyles={props.buttonContainerStyles}
                    buttonStyles={props.buttonStyles}
                />
            
                <Recommended
                    title={props.foodName}
                    titleStyle="text-2xl font-bold"
                    subTitle="⭐ 4.5"
                    subTitleStyle="text-2xl font-bold"
                    titleContainerStyles="items-start absolute"
                    subTitleContainerStyles="items-end"
                />
                <Title 
                    className={"text-slate-400"}
                    title="Lorem ipsum dolor sit amet..."
                />
            </TouchableOpacity>
        </View>
    );
}

interface FoodProps{
    imageStyles?: string;
    containerStyles: string;
    buttonStyles: string;
    buttonContainerStyles: string;
    // textStyles: string;
}

export function Food(props:FoodProps){
    return (
        <View className={props.containerStyles} >
            <ImageBackground className={props.imageStyles}>
                <View className={props.buttonContainerStyles}>
                    <Button 
                        buttonStyles={props.buttonStyles}
                        title="+"
                        textStyles={"text-4xl text-center"}
                    />
                </View>
                
            </ImageBackground>
        </View>
    );
}


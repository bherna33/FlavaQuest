import { View, TouchableOpacity, ImageBackground, Text} from "react-native";
import { Button, InLine } from "./ui";

interface ItemProps{
    containerStyles: string;
    foodName: string;
    foodContainerStyles: string;
    buttonContainerStyles: string
    buttonStyles: string;
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

                <InLine
                    leftText={props.foodName}
                    leftTextStyle="text-2xl font-bold "
                    rightText="⭐ 4.5"
                    rightTextStyle="text-2xl font-bold"
                />

                <Text className={"text-slate-400 "}>
                    Lorem ipsum dolor sit amet...
                </Text>
            </TouchableOpacity>
        </View>
    );
}

interface FoodProps{
    imageStyles?: string;
    containerStyles: string;
    buttonStyles: string;
    buttonContainerStyles: string;
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


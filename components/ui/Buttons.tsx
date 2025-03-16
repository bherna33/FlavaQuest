import { Link, RelativePathString } from "expo-router";
import { ReactNode, useState } from "react";
import { View, TouchableOpacity, Text} from "react-native";

interface ButtonProps{
    title: string;
    buttonStyles: string;
    textStyles?: string;
    onPress?: () => void;
}

export function Button(props: ButtonProps){

    return(
        <TouchableOpacity className={props.buttonStyles} onPress={props.onPress}>
            <Text className={props.textStyles}>
                {props.title}
            </Text>
        </TouchableOpacity>
    );
}

interface RouteButtonProps{
    route: RelativePathString;
    text: string;
}

export function RouteButton(props: RouteButtonProps){
    return(
        <View className="border-2 rounded-3xl p-4 bg-gray-300 m-4">
            <Link href={props.route} className="font-bold text-2xl text-center ">
                {props.text}
            </Link>
        </View>
    );
    
}

interface IconButtonProps{
    icon: ReactNode;
    containerStyles?: string;
    onPress: () => void;
}

export function IconButton(props: IconButtonProps){

    return(
        <TouchableOpacity className={props.containerStyles} onPress={props.onPress}>
            {props.icon}
        </TouchableOpacity>
    );
}
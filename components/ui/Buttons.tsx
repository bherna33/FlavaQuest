import { Link, RelativePathString } from "expo-router";
import { useState } from "react";
import { View, TouchableOpacity, Text} from "react-native";

interface ButtonProps{
    title: string;
    buttonStyles: string;
    textStyles?: string;
}

export function Button(props: ButtonProps){

    const [count, setCount] = useState<number>(0);

    function handlePress(){
        setCount(count +1);
    }

    return(
        <TouchableOpacity className={props.buttonStyles} onPress={handlePress}>
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
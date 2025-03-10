import { Link, RelativePathString } from "expo-router";
import { View, TouchableOpacity, Text, ImageBackground, ImageSourcePropType} from "react-native";

interface ButtonProps{
    title: string;
    buttonStyles: string;
    textStyles?: string;
}

export function Button(props: ButtonProps){

    return(
        <TouchableOpacity className={props.buttonStyles}>
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
import { TouchableOpacity, ImageBackground, Text, ImageSourcePropType } from "react-native";

interface CardProps{
    title: string;
    containerStyles: string;
    // picture: ImageSourcePropType;
}

export function Card(props: CardProps){
    return (
        <TouchableOpacity className={props.containerStyles} >
            <ImageBackground className="rounded-2xl h-24 w-24 justify-center" source={require("../../assets/images/react-logo.png")}>
                <Text className="text-center font-bold">
                    {props.title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    );
}
import { View, TouchableOpacity, Text, ImageBackground, ImageSourcePropType} from "react-native";
import Title from "./Title";

interface TrendingProps{
    imageStyles: string;
    containerStyles: string;
    source?: ImageSourcePropType;
    buttonStyles: string;
    titleStyles: string;
    textStyles: string;
    column?: string
}

export function Trending(props: TrendingProps){
    return (
        <TouchableOpacity>
            <View className={props.containerStyles} >
                <ImageBackground className={props.imageStyles} source={props.source}>
                    <View className={props.column}>
                        <Title
                            title="Look At What Is Trending Now!"
                            className={props.titleStyles}
                        />

                        <Button
                            title="Get Recipe"
                            buttonStyles={props.buttonStyles}
                            textStyles={props.textStyles}         
                        />
                    </View>
                    
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

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
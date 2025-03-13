import { View, TouchableOpacity, Text, ImageBackground, ImageSourcePropType} from "react-native";
import { Button } from "./ui";

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
                {/* TODO: Makes source prop work properly */}
                <ImageBackground className={props.imageStyles} source={props.source}>
                    <View className={props.column}>
                        <Text className={props.titleStyles}>
                            Look At What Is Trending Now!
                        </Text>

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

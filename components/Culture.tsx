import { ImageBackground, ImageSourcePropType, ScrollView, TouchableOpacity, View } from "react-native";
import Title from "./Title";

interface CultureProps{
    // containerStyles?: string;
    imgStyles: string;
    source?: ImageSourcePropType;
    title: string;
    // titleStyles: string;

}

export function Culture(props: CultureProps){
    return (
        <TouchableOpacity className={"m-4 bg-gray-300 rounded-2xl h-32 w-32 "} >
            <View className="relative">
                <ImageBackground className={props.imgStyles} source={props.source}>
                    <Title
                        className="text-center font-bold m-4"
                        title={props.title}
                    />
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
}

interface CarouselProps{
    carouselStyles?: string;
    items: React.ReactNode[];
}

export function Carousel(props: CarouselProps){
    return (
        <View>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className={props.carouselStyles}
            >
                {props.items.map((item, index) => (
                    <View key={index} >
                            {item}
                    </View>
                ))}

            </ScrollView>
        </View>
    );
}
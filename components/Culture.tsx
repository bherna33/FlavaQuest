import { ImageBackground, ImageSourcePropType, ScrollView, TouchableOpacity, View } from "react-native";
import Title from "./Title";

interface CultureProps{
    // source?: string;
    title: string;

}

export function Culture(props: CultureProps){
    return (
        <TouchableOpacity className={" bg-gray-300 rounded-2xl h-24 w-24 justify-center ml-4"} >
            <View >
                {/* TODO: Makes source prop work properly */}
                <ImageBackground className="rounded-2xl h-24 w-24 justify-center" source={require("../assets/images/react-logo.png")}>
                    <Title
                        className="text-center font-bold"
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
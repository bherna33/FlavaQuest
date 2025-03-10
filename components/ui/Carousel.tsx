import { View, ScrollView } from "react-native";

interface CarouselProps{
    items: React.ReactNode[];
    styles: string;
}

export function Carousel(props: CarouselProps){
    return (
        <View>
            <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            className={props.styles}
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
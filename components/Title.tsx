import { Text } from "react-native";

interface TitleProps{
    title: string;
    className: string;
    onPress?: () => void;
}

export default function Title(props: TitleProps){
    return (
        <Text className={props.className} onPress={props.onPress}>
            {props.title}
        </Text>
    );
} 
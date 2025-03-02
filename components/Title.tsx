import { Text } from "react-native";

interface TitleProps{
    title: string;
    className?: string;
}

export default function Title(props: TitleProps){
    return (
        <Text className={props.className} >
            {props.title}
        </Text>
    );
} 
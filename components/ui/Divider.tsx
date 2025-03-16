import { View, Text } from "react-native";

interface DividerProps {
    borderStyles?: string;
}
export function Divider(props: DividerProps){
    return(
        <View
            className={"border w-full " + props.borderStyles}
        />
    );
}

export function OrDivider(){
    return(
        <View className="justify-center p-4 my-4">
            <View>
                <Divider />
            </View>
            <View className="absolute w-screen items-center">
                <Text className="text-xl bg-gray-100 p-2">
                    or
                </Text>
            </View>
        </View>
    );
}
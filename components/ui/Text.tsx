import { Text, View } from "react-native";

interface InLineProps {
leftText: string;
leftTextStyle?: string;
rightText: string;
rightTextStyle?: string;
container?: string;
}

export function InLine({ leftText, leftTextStyle, rightText, rightTextStyle, container }: InLineProps) {
return (    
    <View className={container}>
        <View>
        <Text className={rightTextStyle}>
            {rightText}
        </Text>
        <Text className={leftTextStyle}>
            {leftText}
        </Text>
        </View>        
    </View>
);
}

export function Or(){
    return(
        <View className="justify-center p-4 my-4">
            <View>
                <View className="border">   
                </View>
            </View>
            <View className=" absolute w-screen items-center ">
                <Text className="text-xl bg-gray-100 p-2">
                    or
                </Text>
            </View>          
        </View>
    );
}
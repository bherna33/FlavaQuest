import { ReactNode } from "react";
import { Text, View } from "react-native";

interface InLineProps {
leftText: ReactNode;
leftTextStyle?: string;
rightText: string;
rightTextStyle?: string;
container?: string;
checkBox?: ReactNode;
}

export function InLine({ leftText, leftTextStyle, rightText, rightTextStyle, container, checkBox }: InLineProps) {
    return (
        <View className={"flex-row justify-between " + container}>
            <Text className={leftTextStyle}>
                {checkBox} {leftText}
            </Text>
            <Text className={rightTextStyle}>
                {rightText}
            </Text>
        </View>
    );
}

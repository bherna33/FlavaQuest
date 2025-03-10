import { Text, View } from "react-native";

interface InLineProps {
  leftText: string;
  leftTextStyle?: string;
  rightText: string;
  rightTextStyle?: string;
}

export function InLine({ leftText, leftTextStyle, rightText, rightTextStyle }: InLineProps) {
  return (
    <View>
      <Text>
        <Text className={leftTextStyle}>
            {leftText}
        </Text>
        <Text className={rightTextStyle}>
            {rightText}
        </Text>
      </Text>
    </View>
  );
}
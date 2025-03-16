import { TouchableOpacity, View, Text } from "react-native";

interface ProfileLinkProps{
    icon: string;
    iconStyles?: string;
    text: string;
    textStyles?: string;
}

export  function ProfileLink(props: ProfileLinkProps){
    return(
        <View className="p-4">
            <TouchableOpacity className="flex-row justify-between">
                <View className="flex-row py-4">
                    <Text className={props.iconStyles}>
                        {props.icon}
                    </Text>
                    <Text className={"px-2 " + props.textStyles}>
                        {props.text}
                    </Text>
                </View>
                <Text className="py-4">
                    {'>'}
                </Text>
            </TouchableOpacity>
            <View className="border "/>
        </View>
    );
}
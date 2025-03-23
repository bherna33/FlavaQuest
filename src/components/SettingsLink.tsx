import { ReactNode } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Divider } from "./ui";

interface SettingsLinkProps{
    icon: ReactNode;
    text: string;
    textStyles?: string;
}

export  function SettingsLink(props: SettingsLinkProps){
    return(
        <View className="p-4">
            <TouchableOpacity className="flex-row justify-between ">
                <View className="flex-row py-2 ">
                    {props.icon}
                    <Text className={"px-2 text-xl " + props.textStyles}>
                        {props.text}
                    </Text>
                </View>
                <SimpleLineIcons name="arrow-right" size={24} color="black" className="mt-2"/>
            </TouchableOpacity>
            <Divider />
        </View>
    );
}
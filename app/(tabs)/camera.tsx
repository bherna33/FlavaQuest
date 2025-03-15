import { Button, Card, InLine } from "@/components/ui";
import { CameraView } from "expo-camera";
import { useState } from "react";
import { Image, Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Camera(){

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    function change(){
        setModalVisible(!modalVisible);
    }

    return (
        <SafeAreaView className="flex-1 ">
            <CameraView>
                <View className=" items-center justify-end h-full">
                    <Modal
                        animationType="slide"
                        visible={modalVisible}
                    >
                        <ScrollView
                            showsVerticalScrollIndicator={false}
                        >
                            <SafeAreaView className="flex-1">
                                
                                <View className=" flex-row justify-between mx-4 z-10 h-64 ">
                                    <Button 
                                        title="⬅"
                                        buttonStyles="border-2 rounded-3xl size-16 bg-white justify-center"
                                        onPress={change}
                                        textStyles="text-center text-5xl"
                                    />
                                    <Button 
                                        title="🩷"
                                        buttonStyles="border-2 rounded-3xl size-16 bg-white justify-center"
                                        onPress={change}
                                        textStyles="text-center text-5xl"
                                    />
                                </View>

                                <View className=" w-full h-80 absolute justify-center items-center">
                                    <Image className=" w-full h-96 bg-red-500" source={require("../../assets/images/react-logo.png")}/>
                                </View>

                                <View className="bg-white rounded-t-3xl flex-1 z-10 p-4">
                                    <InLine
                                        leftText="Food item"
                                        leftTextStyle="text-3xl font-bold"
                                        rightText="⭐ 4.8"
                                        rightTextStyle="text-xl"
                                    />

                                    <Text className="py-4">
                                        sjfa jfdjajf djad jflakjdhfiadh fjadhfja hdfjah dfkah dlfjah flahdflkjahdfi...
                                    </Text>

                                    <Text>
                                        Calories: {} | Time: {}
                                    </Text>

                                    <Text className="font-bold py-4 text-xl">
                                        Cultures
                                    </Text>

                                    <View className="flex-row justify-between">
                                        <Card
                                            title="Trinidad and Tobago"
                                            containerStyles="bg-gray-300 rounded-2xl h-24 w-24 justify-center"
                                        />
                                        <Card
                                            title="Trinidad and Tobago"
                                            containerStyles="bg-gray-300 rounded-2xl h-24 w-24 justify-center"
                                        />
                                        <Card
                                            title="Trinidad and Tobago"
                                            containerStyles="bg-gray-300 rounded-2xl h-24 w-24 justify-center"
                                        />
                                        <Card
                                            title="Trinidad and Tobago"
                                            containerStyles="bg-gray-300 rounded-2xl h-24 w-24 justify-center"
                                        />
                                    </View>

                                    <View className="border my-8"></View>

                                    <Text className="text-xl font-bold">
                                        Ingredients
                                    </Text>
                                    <InLine 
                                        rightText="count"
                                        leftText="ingredient"
                                        container="py-4"
                                    />
                                    <InLine 
                                        rightText="count"
                                        leftText="ingredient"
                                        container="py-4"

                                    />
                                    <InLine 
                                        rightText="count"
                                        leftText="ingredient"
                                        container="py-4"

                                    />
                                    <InLine 
                                        rightText="count"
                                        leftText="ingredient"
                                        container="py-4"

                                    />
                                    <View className="border my-8"></View>

                                    <Text className="text-center text-3xl font-bold">
                                        Step 1
                                    </Text>
                                    <Text className=" text-center justify-center items-center p-4">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odio cum delectus a voluptatem expedita odit nostrum, in, accusamus optio voluptatum impedit illo dicta fugit earum atque pariatur possimus deleniti?
                                    </Text>

                                    <Text className="text-center text-3xl font-bold">
                                        Step 2
                                    </Text>
                                    <Text className=" text-center justify-center items-center p-4">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odio cum delectus a voluptatem expedita odit nostrum, in, accusamus optio voluptatum impedit illo dicta fugit earum atque pariatur possimus deleniti?
                                    </Text>

                                    <Text className="text-center text-3xl font-bold">
                                        Step 3
                                    </Text>
                                    <Text className=" text-center justify-center items-center p-4">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odio cum delectus a voluptatem expedita odit nostrum, in, accusamus optio voluptatum impedit illo dicta fugit earum atque pariatur possimus deleniti?
                                    </Text>

                                    <Text className="text-center text-3xl font-bold">
                                        Step 4
                                    </Text>
                                    <Text className=" text-center justify-center items-center p-4">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam odio cum delectus a voluptatem expedita odit nostrum, in, accusamus optio voluptatum impedit illo dicta fugit earum atque pariatur possimus deleniti?
                                    </Text>


                                </View>
                            </SafeAreaView> 
                        </ScrollView>                                        
                    </Modal>

                    <TouchableOpacity className="border-2 rounded-3xl size-24 bg-white justify-center" onPress={change}>
                        <Text className="text-center text-5xl">
                            📷
                        </Text>
                    </TouchableOpacity>

                </View>
            </CameraView>
        </SafeAreaView>
    );
}
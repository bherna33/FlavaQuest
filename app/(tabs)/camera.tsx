import { CameraView } from "expo-camera";
import { useState } from "react";
import { Button, Modal, SafeAreaView, Text, View } from "react-native";

export default function Camera(){

    const [modalVisible, setModalVisible] = useState<boolean>(false);

    function change(){
        setModalVisible(!modalVisible);
    }

    return (
        <SafeAreaView className="flex-1">
            <CameraView>
                <Modal
                    animationType="slide"
                    visible={modalVisible}
                    className="flex-1 h-80"
                >
                    <Text className="h-80">
                        Hello form model
                    </Text>
                    <Button onPress={change} title="hello hehh"
                        
                    />                    
                </Modal>

                <Button onPress={change} title="get info"/>

            </CameraView>
        </SafeAreaView>
    );
}
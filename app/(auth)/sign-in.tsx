import { Recommended } from "@/components/Recommended";
import Title from "@/components/Title";
import { Link } from "expo-router";
import { Text, View, TextInput } from "react-native";

export default function SignIn(){
    return(
        <View className="bg-white">
            <Title
                className="font-bold text-3xl text-center my-6"
                title="FlavaQuest"
            />
            <Text className="text-2xl text-center m-6 px-10">
                Sign up or login below to start you Quest for Flavor!
            </Text>

            <View>
                <TextInput
                    placeholder="example@email.com"
                    placeholderTextColor={"gray"}
                    className="border-2 p-4 rounded-2xl m-4 text-xl"
                />
                <Text className="text-gray-300 text-lg px-4 absolute ml-10 bg-white" >
                    Email
                </Text>
            </View>
            <View>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor={"gray"}
                    className="border-2 p-4 rounded-2xl m-4 text-xl"
                />
                <Text className="text-gray-300 text-lg px-4 absolute ml-10 bg-white" >
                    Password
                </Text>
            </View>  

            <Recommended
            title="Remember me"
            subTitle="Forgot Password?"
            titleStyle=""
            subTitleStyle="text-sky-600"
            titleContainerStyles="items-start absolute"
            subTitleContainerStyles="items-end"
            containerStyle="m-4"
            />

            <View className="border-2 rounded-3xl p-4 bg-gray-300 mx-4 ">
                <Link href={"/(tabs)"} className="font-bold text-2xl text-center ">
                    Sign In
                </Link>
            </View>

            <Text className="text-center text-xl my-8">
                -or-
            </Text>

            <View className="border-2 rounded-3xl p-4 bg-gray-300 mx-4 ">
                <Link href={"/(tabs)"} className="font-bold text-2xl text-center ">
                    Sign in with Google
                </Link>
            </View>
            <View className="border-2 rounded-3xl p-4 bg-gray-300 m-4 ">
                <Link href={"/(tabs)"} className="font-bold text-2xl text-center ">
                    Sign in with Apple
                </Link>
            </View>
            <View className="border-2 rounded-3xl p-4 bg-gray-300 mx-4">
                <Link href={"/(tabs)"} className="font-bold text-2xl text-center ">
                    Sign in with Facebook
                </Link>
            </View>

            <Text className="text-center my-8">
                Don't have an account? <Link href={"/(auth)/sign-up"} className="font-bold">Sign Up</Link>
            </Text>

        </View>
    );
}
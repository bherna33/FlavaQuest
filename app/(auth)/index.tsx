import Title from "@/components/Title";
import { Link } from "expo-router";
import {  View } from "react-native";

export default function Index(){
    return (
        <View className="items-center justify-center">
            <Title
                className="font-bold text-5xl my-80 p-4  "
                title="FlavaQuest"
            />

            <View className="w-96 border-2 rounded-3xl p-4 bg-gray-300 ">
                <Link href={"/sign-up"} className="font-bold text-2xl text-center ">
                    Sign Up
                </Link>
            </View>

            <Link href={"/sign-in"} className="font-bold text-2xl text-center p-4 m-4">
                Sign In
            </Link>
        </View>
    );
}
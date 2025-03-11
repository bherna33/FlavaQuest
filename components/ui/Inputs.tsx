import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

interface InputBoxProps {
	placeholder: string;
	title: string;
	textStyles: string;
}

export function InputBox({ placeholder, title, textStyles}: InputBoxProps) {

	const [inputValue, setInputValue] = useState("");
	
  	return (
		<View className="p-4 ">
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={"gray"}
				className="border-2 border-gray-300 p-4 rounded-2xl text-xl"
			/>

			<Text className={textStyles} >
				{title}
			</Text>
		</View>
  	);
}

interface SearchBarProps{
    placeholder: string;
}

export function SearchBar(props: SearchBarProps){
    return (
        <TextInput
            className = "border-2 p-4 rounded-2xl m-4"
            placeholder = {props.placeholder}
            placeholderTextColor = {"gray"}
        />
    );
}

export function Checkbox(){
	const [isSelected, setSelected] = useState<boolean>(false);

	function change(){
		setSelected(!isSelected);
	}

	return (
		<TouchableOpacity className="border-2" onPress={change}>
			<Text className="font-bold">
				{isSelected ? "X": ""}
			</Text>			
		</TouchableOpacity>
	);
}
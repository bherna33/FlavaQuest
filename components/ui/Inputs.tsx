import { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface InputBoxProps {
	placeholder: string;
	title: string;
	textStyles: string;
}

export function InputBox({ placeholder, title, textStyles}: InputBoxProps) {

	const [inputValue, setInputValue] = useState<string>("");

  	return (
		<View className="p-4 ">
			<TextInput
				placeholder={placeholder}
				placeholderTextColor={"gray"}
				className="border-2 p-4 rounded-2xl text-xl"
				value={inputValue}
				onChangeText={setInputValue}
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


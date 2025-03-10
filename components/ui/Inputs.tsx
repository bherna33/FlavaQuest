import { Text, TextInput, View } from "react-native";
// import { cn } from "nativewind";

interface InputBoxProps {
  placeholder: string;
  title: string;
  textStyles: string;
}

export function InputBox({ placeholder, title, textStyles}: InputBoxProps) {
  return (
    <View className="p-4 ">
      {/* Input Box */}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={"gray"}
        className="border-2 border-gray-300 p-4 rounded-2xl text-xl"
      />

       {/* Title on Border */}
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

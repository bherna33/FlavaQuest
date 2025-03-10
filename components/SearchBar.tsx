import { TextInput } from "react-native"

interface SearchBarProps{
    placeholder: string;
    className: string;
}

export default function SearchBar(props: SearchBarProps){
    return (
        <TextInput
            className= {props.className}
            placeholder= {props.placeholder}
            placeholderTextColor={"gray"}
        />
    
        
    );
}

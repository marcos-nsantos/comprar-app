import { TextInput, TextInputProps } from "react-native";
import { styles } from "@/components/Input/styles";

export function Input({ ...rest }: TextInputProps) {
  return <TextInput style={styles.container} {...rest} />;
}

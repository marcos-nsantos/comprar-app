import { TextInput, TextInputProps } from "react-native";
import { styles } from "@/components/Input/styles";

export function Input({ ...rest }: TextInputProps) {
  return <TextInput placeholder="#74798B" style={styles.container} {...rest} />;
}

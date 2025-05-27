import { Text, TouchableOpacity } from "react-native";

import { styles } from "@/components/Button/styles";

export function Button() {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.9}>
      <Text style={styles.title}>Adicionar</Text>
    </TouchableOpacity>
  );
}

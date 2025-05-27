import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "@/app/Home/styles";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { Item } from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = Array.from({ length: 100 }).map((_, index) => String(index));

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/logo.png")} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Item
              data={{ status: FilterStatus.DONE, description: item }}
              onStatus={() => console.log("mudar o status")}
              onRemove={() => console.log("remover")}
            />
          )}
        />
      </View>
    </View>
  );
}

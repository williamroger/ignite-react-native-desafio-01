import { Text, View } from "react-native";

import { styles } from './styles';

interface TodoHeaderProps {
  created: number;
  finished: number;
}

export function TodoHeader({ created, finished }: TodoHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.label}>Criadas</Text>
        <View style={styles.box}>
          <Text style={styles.value}>{created}</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Text style={styles.label}>Concluídas</Text>
        <View style={styles.box}>
          <Text style={styles.value}>{finished}</Text>
        </View>
      </View>
    </View>
  );
}
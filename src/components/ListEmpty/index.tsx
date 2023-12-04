/* External */
import { Text, View } from "react-native";

/* Assets */
import IconClipboard from '../../assets/IconClipboard.svg';

/* Style */
import { styles } from './styles'

export function ListEmpty () {
  return (
    <View style={styles.listEmpty}>
      <IconClipboard width={56} height={56} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  );
}
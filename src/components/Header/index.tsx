/* Externals */
import { TextInput, TouchableOpacity, View } from "react-native";

/* Assets */
import Logo from '../../assets/Logo.svg';
import IconPlus from '../../assets/IconPlus.svg';

/* Style */
import { styles } from './styles';

interface HeaderProps {
  text: string;
  onChangeInput: (text: string) => void;
  onAddTask: (text: string) => void;
}

export function Header({ text, onChangeInput, onAddTask }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Logo width={110.34} height={32} />
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          value={text}
          onChangeText={(event) => onChangeInput(event)}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => onAddTask(text)}
        >
          <IconPlus width={15.97} height={15.97} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
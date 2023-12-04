/* Externals */
import { Text, TouchableOpacity, View } from "react-native";

/* Assets */
import IconTrash from '../../assets/IconTrash.svg';
import IconCheck from '../../assets/IconCheck.svg';

/* Style */
import { styles } from "./styles";

interface Task {
  id: string;
  text: string;
  finished: boolean;
}

interface CardProps {
  task: Task;
  onRemoveTask: (id: string) => void;
  onCheckTask: (id: string) => void;
}

export function Card({ task, onRemoveTask, onCheckTask }: CardProps) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.checkbox} onPress={() => onCheckTask(task.id)}>
        {task.finished
          ? (<View style={styles.checked}>
              <IconCheck width={13.54} height={8.69} />
            </View>)
          : (<View style={styles.unchecked}></View>)
        }
      </TouchableOpacity>

      <Text style={[styles.text, task.finished ? styles.finished : null]}>
        {task.text}
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => onRemoveTask(task.id)}>
        <IconTrash width={15.12} height={17} />
      </TouchableOpacity>
    </View>
  );
}
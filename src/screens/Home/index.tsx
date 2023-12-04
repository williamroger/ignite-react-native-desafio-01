/* Externals */ 
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

/* Icons */ 
import Logo from '../../assets/Logo.svg';
import IconPlus from '../../assets/IconPlus.svg';
import IconClipboard from '../../assets/IconClipboard.svg';
import IconTrash from '../../assets/IconTrash.svg';
import IconCheck from '../../assets/IconCheck.svg';

/* Style */
import { styles } from "./styles"; 

export function Home() {
  const showIconCheck = true;

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Logo width={110.34} height={32} />
        <View style={styles.formContainer}>
          <TextInput 
            style={styles.input} 
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button}>
            <IconPlus width={15.97} height={15.97} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.todos}>
        <View style={styles.todosHeader}>
          <View style={styles.todosInfo}>
            <Text style={styles.todosLabel}>Criadas</Text>
            <View style={styles.todosBox}>
              <Text style={styles.todosValue}>0</Text>
            </View>
          </View>
          <View style={styles.todosInfo}>
            <Text style={styles.todosLabel}>Concluídas</Text>
            <View style={styles.todosBox}>
              <Text style={styles.todosValue}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.todosEmpty}>
          <IconClipboard width={56} height={56} />
          <Text style={styles.todosTitle}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.todosSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
        <View style={styles.card}>
          <TouchableOpacity style={styles.cardButtonCheck}>
            {showIconCheck 
              ? <View style={styles.unchecked}></View> 
              : <View style={styles.checked}>
                  <IconCheck width={13.54} height={8.69} />
                </View>
            }
          </TouchableOpacity>
    
          <Text style={styles.cardText}>
            Integer urna interdum massa libero auctor neque turpis turpis semper.
          </Text>
        
          <TouchableOpacity style={styles.cardButtonTrash}>
            <IconTrash width={15.12} height={17} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
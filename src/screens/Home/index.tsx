/* Externals */ 
import { useState } from "react";
import { FlatList, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

/* Components */
import { ListEmpty } from "../../components/ListEmpty";
import { Card } from "../../components/Card";
import { TodoHeader } from "../../components/TodoHeader";
import { Header } from "../../components/Header";

/* Style */
import { styles } from "./styles"; 

interface Task {
  id: string;
  text: string;
  finished: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [task, setTask] = useState('');
  const totalCreated = tasks.length;
  const totalFinished = tasks.filter(task => task.finished === true).length;

  function handleChangeInput(text: string) {
    setTask(text);
  }

  function handleAddTask(task: string) {
    const newTask = {
      id: Math.random().toString().slice(2),
      text: task,
      finished: false,
    }

    setTasks(prevState => [...prevState, newTask]);
    setTask('');
  }

  function handleDeleteTask(taskId: string) {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  function handleToggleCheckTask(taskId: string) {
    setTasks(prevState => prevState.map(task => {
      if (task.id === taskId) {
        task.finished = !task.finished;
      }

      return task;
    }))
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header 
        text={task}
        onChangeInput={handleChangeInput}
        onAddTask={handleAddTask}
      />
      
      <View style={styles.todos}>
        <TodoHeader 
          created={totalCreated}
          finished={totalFinished}
        />
    
        <FlatList 
          data={tasks}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card 
              task={item} 
              onRemoveTask={handleDeleteTask}
              onCheckTask={handleToggleCheckTask}
            />
          )}
          ListEmptyComponent={() => (<ListEmpty />)}
        />
      </View>
    </View>
  )
}
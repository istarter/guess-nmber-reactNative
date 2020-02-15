import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';


export default function App() {

  const [enteredGoal, setEnterdGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  
  const goalInputHandler = (enteredText) => {
    setEnterdGoal(enteredText);
  }
  
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals,
       {key: Math.random().toString(), value: enteredGoal}]);
  };


  return (
    <View>
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Course Goal" style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <Button title="ADD" onPress={addGoalHandler} />
        </View>
        <FlatList 
        data={courseGoals}
        renderItem={itemData => <GoalItem title={itemData.item.value} />
         }
        />
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
 

});

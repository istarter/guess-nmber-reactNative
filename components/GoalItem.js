import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



const GoalItem = props => {
  return (
    
      <View style={styles.listItem}>
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>  
        <Text> {props.title} </Text>
        </TouchableOpacity>
      </View>
  
  );
}

const styles = StyleSheet.create({

  listItem: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,


  }

});





export default GoalItem;
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import GoalItem from './GoalItem';

const GoalInput = props => {
    const [enteredGoal, setEnterdGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnterdGoal(enteredText);
    };
    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnterdGoal('');
    };

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal"
                    style={styles.input}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                </View>
                <Button title="ADD" onPress={addGoalHandler} />
                </View>
            </View>
        </Modal>



    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});


export default GoalInput;
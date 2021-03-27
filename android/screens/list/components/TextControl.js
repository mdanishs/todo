import React, { useState } from 'react'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native'
import { COLORS, SPACING, TYPOGRAPHY } from '../../../../constants';

const styles = StyleSheet.create({
  controlContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center'
  },
  input: {
    backgroundColor: COLORS.WHITE,
    flexGrow: 1,
    marginRight: SPACING.MARGIN_5,
    borderRadius: 5,
    paddingLeft: SPACING.PADDING_15
  },
  addButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: COLORS.PRIMARY,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.WHITE,
    ...TYPOGRAPHY.ACTION,
  }
})

const TextControl = ({ title, placeholder, clearOnSubmit, onSubmit }) => {
  const [text, setText] = useState();

  const handleOnPress = () => {
    if (onSubmit) {
      if (clearOnSubmit) setText('');
      onSubmit(text);
    }
  }

  const handleTextChanged = (text) => setText(text);

  return (
    <View style={styles.controlContainer}>
      <TextInput style={styles.input} value={text} placeholder={placeholder} onChangeText={handleTextChanged} />
      <TouchableOpacity style={styles.addButton} onPress={handleOnPress} >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default TextControl;
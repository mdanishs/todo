import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import Checkbox from 'react-native-bouncy-checkbox';
import { COLORS, SPACING, TEST_IDS, TYPOGRAPHY } from '../../../constants';

const styles = StyleSheet.create({
  item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.PADDING_10,
    margin: SPACING.MARGIN_10,
    marginBottom: 0,
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.BACKGROUND_LIGHT
  },
  text: {
    color: COLORS.SECONDARY,
  },
  actions: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center'
  },
  delete: {
    marginTop: -2,
    ...TYPOGRAPHY.ACTION
  }
})

const ListItem = ({
  text,
  checked,
  onStateChange,
  onDelete,
}) => {

  const handleStateChanged = (checked) => {
    if (onStateChange) {
      onStateChange(checked);
    }
  }

  const handleDelete = () => {
    if (onDelete) onDelete();
  }

  return (
    <View style={styles.item}>
      <Text style={[styles.text]} testID={TEST_IDS.LIST_ITEM_TEXT}>{text}</Text>
      <View style={styles.actions}>
        <Checkbox isChecked={checked} onPress={handleStateChanged} testID={TEST_IDS.LIST_ITEM_CHECKBOX} />
        <TouchableOpacity onPress={handleDelete} testID={TEST_IDS.LIST_ITEM_DELETE_BUTTON}>
          <Text style={styles.delete}>x</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ListItem;
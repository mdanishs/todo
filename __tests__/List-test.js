import 'react-native';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import List from '../screens/list/List';
import { TEST_IDS } from '../constants';
let list;

beforeEach(() => {
  list = render(<List />);
})

it('renders list correctly', () => {
  expect(list).toBeTruthy();
});

it('adds and deletes a task to and from list', async () => {
  const { getByTestId, queryByTestId } = list;
  const textInput = getByTestId(TEST_IDS.LIST_TEXT_INPUT);
  const addButton = getByTestId(TEST_IDS.LIST_ADD_BUTTON);

  fireEvent.changeText(textInput, 'My todo 1');
  fireEvent.press(addButton);

  let listItemText = getByTestId(TEST_IDS.LIST_ITEM_TEXT);
  expect(listItemText).toBeDefined();
  expect(listItemText.children[0]).toEqual('My todo 1');

  const deleteButton = getByTestId(TEST_IDS.LIST_ITEM_DELETE_BUTTON);
  fireEvent.press(deleteButton);

  expect(queryByTestId(TEST_IDS.LIST_ITEM_TEXT)).toBeNull();
});

it('marks the task as completed on check', () => {
  const { getByTestId, toJSON } = list;
  const textInput = getByTestId(TEST_IDS.LIST_TEXT_INPUT);
  const addButton = getByTestId(TEST_IDS.LIST_ADD_BUTTON);

  fireEvent.changeText(textInput, 'My todo 1');
  fireEvent.press(addButton);
  
  const checkbox = getByTestId(TEST_IDS.LIST_ITEM_CHECKBOX);
  fireEvent.press(checkbox);

  expect(toJSON()).toMatchSnapshot();
});

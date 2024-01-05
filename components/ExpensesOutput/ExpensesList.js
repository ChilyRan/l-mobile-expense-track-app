import { FlatList, StyleSheet, View, Text } from "react-native";

import { GlobalStyles } from "../../constants/styles";
import ExpensesItem from "./ExpensesItem";

function renderExpenseItem(itemData) {
  return <ExpensesItem {...itemData.item} />;
}

function ExpensesList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpensesList;

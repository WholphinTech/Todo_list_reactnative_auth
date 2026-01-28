import React, { useState } from 'react';
import { View, Modal } from 'react-native';
import { useDispatch } from 'react-redux';

import Button from '../../atoms/button/Button';
import TodoForm from '../../molecules/todoForm/TodoForm';
import TodoList from '../todoList/TodoList';
import { AppDispatch } from '../../../redux/store';
import { addTodo, updateTodo, Todo } from '../../../redux/slices/todoSlice';
import styles from './TodoScreen.styles';
import { authenticateUser } from '../../../utils/auth';

const TodoScreen: React.FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const dispatch = useDispatch<AppDispatch>();

  // Handle adding new todo
  const handleAddTodo = async (title: string, description: string) => {
    const auth = await authenticateUser();
    if (!auth) return; // user canceled or failed auth
    
    dispatch(addTodo({ title, description }));
    setModalVisible(false);
  };

  // Handle updating existing todo
  const handleUpdateTodo = (title: string, description: string) => {
    if (!editingTodo) return;
    dispatch(updateTodo({ id: editingTodo.id, title, description }));
    setEditingTodo(null);
    setModalVisible(false);
  };

  // Open modal for editing
  const openEditModal = (todo: Todo) => {
    setEditingTodo(todo);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Add New Todo Button */}
      <Button title="Add New Todo" onPress={() => setModalVisible(true)} />

      {/* Todo list */}
      <TodoList onEdit={openEditModal} />

      {/* Modal for Add/Edit */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <TodoForm
              todo={editingTodo ?? undefined}
              onSubmit={editingTodo ? handleUpdateTodo : handleAddTodo}
              onCancel={() => {
                setModalVisible(false);
                setEditingTodo(null);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TodoScreen;

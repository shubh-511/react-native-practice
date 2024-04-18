import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';

const App = () => {
  const [user, setUser] = useState(null);
  const fetchUsers = useCallback(async () => {
    const userFetch = await fetch('https://reqres.in/api/users');
    const result = await userFetch.json();
    setUser(result.data);
  }, []);
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchUsers();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, [fetchUsers]);

  return (
    <SafeAreaView>
      <FlatList
        data={user}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View>
            <Text>{item.first_name}</Text>
          </View>
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
      />
    </SafeAreaView>
  );
};

export default App;

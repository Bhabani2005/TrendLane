import { StyleSheet, StatusBar, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native';
import Category from '../components/Category';
import ProductCard from '../components/ProductCard';
import data from '../data/data.json';
const categories = ['Trending Now', 'Men', 'Women', 'Kids', 'All']
const Home = () => {
  const [products,setProducts]= useState(data.products);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isLiked, setIsLiked] = useState('');

  const handleLiked= (item) =>{
    const newProducts= products.map((prod)=> {
      if(prod.id==item.id){
        return{
          ...prod,
          isLiked: true,
        };
      }
      return prod;
    });
    setProducts(newProducts);
  }
  return (
    <LinearGradient colors={['#F9DDA4', '#FFFBFC']} style={styles.container}>
      <Header />
      {/* Product Section*/}
      <FlatList numColumns={2}
        ListHeaderComponent={
          <>
            <Text style={styles.discoverText}>Discover Your Next Look</Text>
            {/* input section*/}
            <View style={styles.inputContainer}>
              <View style={styles.iconContainer}>
                <Ionicons name='search-outline' size={28} color={'#C0C0C0'} />
              </View>
              <TextInput style={styles.textInput} placeholder='Search for brands, items, and more' />
            </View>
            {/*Category Section*/}
            <FlatList data={categories}
              renderItem={({ item }) => (
                <Category item={item}
                  selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}
                />
              )}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
        data={products}
        renderItem={({ item, index }) => (<ProductCard
          item={item}  handleLiked={handleLiked}/>
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=> item.id}
        contentContainerStyle={{
          paddingBottom: 60,
        }}
      />
      {/*<View style={{flexDirection: 'row'}}>
        <ProductCard/>
        <ProductCard/>
      </View>*/}
    </LinearGradient>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: StatusBar.currentHeight,
    padding: 12,
  },
  discoverText: {
    fontSize: 25,
    color: 'black',
    marginTop: 18,
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    height: 45,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,

  },
  iconContainer: {
    marginHorizontal: 15,

  },
  textInput: {
    flex: 1,

  },
})
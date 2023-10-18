import { View, Text, ScrollView,TouchableOpacity, Image } from 'react-native'
import React , {useEffect, useState} from 'react'
import { categories } from '../constants'
import { getCategories } from '../api'
import { urlFor } from '../sanity'
const Categories = () => {

  const [activeCategory, setActiveCategory] = useState(null)

  let [categories, setCategories] = useState([])

  useEffect(()=>{
    getCategories().then(data => {
      setCategories(data);
    })
  },[])
  return (
    <View className="mt-4">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="overflow-visible"
        contentContainerStyle={{
          paddingHorizontal:15
        }}
      >
        {
          categories.map((category, index) =>{

            let isActive = category._id == activeCategory
            let btnClass = isActive ? ' bg-gray-600 ' : ' bg-gray-200 ';
            let textClass = isActive ? ' font-semibold text-gray-800 ' : ' text-gray-500';
            return(
              <View key={index} className="flex justify-center items-center mr-6">
                  <TouchableOpacity
                    onPress={()=>{setActiveCategory(category._id)}}
                    style={{
                      borderRadius:50,
                      padding:1,
                      width:50,
                      height:50,
                      overflow:'hidden',
                      alignItems:'center',
                      justifyContent:'center'
                    }}
                  className={'p-1 rounded-full shadow bg-gray-200 '+ btnClass}>
                    <Image style={{
                      width:'100%',
                      aspectRatio: 1,
                    }}
                        resizeMode='contain'
                        source={{uri:urlFor(category.image).url()}} />
                  </TouchableOpacity>
                  <Text className={`text-sm ${textClass}`}>{category.name}</Text>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  )
      }
export default Categories
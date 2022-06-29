### chạy app
npm run mock-sv
npm start

# cài bằng cmd
<!-- npm i -g expo-cli -->
<!-- expo init [ten] -->

# import { 
    StyleSheet, Text, View, Image, ScrollView, FlatList ,TouchableOpacity 
} from 'react-native';

# react native 
<Text> = <p>,<span>
<View> = <div>
<Image source> = <img src>
<!-- ko có localStorage , cookie , sessionStorage -->ẽ
        <!-- thay vào đó AsyncStorage -->       

# tool xem react native giống html dom
<!-- npm i --save-dev react-devtools -->
<!-- thêm vào trong package.json -->
<!-- react-devtools" : "react-devtools" -->

# css trực tiếp & thêm ảnh
<Image 
	source={alpineImage}
	style={{width:64,height:64}}
/>

# css qua StyleSheet
<Image
	source={alpineImage}
	style={styles.CategoryListItem}
/>
const styles = StyleSheet.create({
    CategoryListItem : {
        width : 64 ,
        height : 64
    }
})

# <ScrollView styles={{}} contentContainerStyle={{}} >
mặc định ScrollView là cuận theo chiều dọc
<!-- horizontal={true}  -->
thêm attribute horizontal={true}  thì cuận theo chiều ngang

# <FlatList>
vd : vs react thông thường ; categories = [ {},{},{} ]
{
    categories.map((category, i) => (
        <CategoryListItem key={category.id} title={styles.title} category={category} />
    ))
}
vs FlatList

<FlatList
    style={{ padding: 16 }}
    contentContainerStyle={styles.container}
    numColumns={2}  
    data={categories}
    keyExtractor={item => item.id}
    renderItem={({ item }) =>
        <CategoryListItem
            title={styles.title}
            category={item}
        />
    }
/>

có thể chia làm 2 cột với numColumns={2} .....
&& FlatList ko cần bọc trong <ScrollView/> && có attribute giống  <ScrollView/>

# TouchableOpacity
sự kiện event click . khi đc click tự thay đổi opacity . 
bao bên ngoài chuỗi html muốn có event .
opacity mặc định = 0.2 có thẻ thay đổi
onPress = onClick trong react Dom
<TouchableOpacity activeOpacity={0.2} onPress={ () => console.log('adu') }>
    <component muốn có event>
</TouchableOpacity>

# navigation
(phiên bản 4.x)
<!-- npm install react-navigation -->
<!--  npm install react-navigation-stack -->
<!-- npm i react-navigation-tabs -->

(phiên bản 6.x)
<!-- npm install @react-navigation/native -->
<!-- npm install @react-navigation/native-stack -->

chuyển trang = sự kiện 
onPress = { () => props.navigation.navigate('Ten trang muốn tới',{pamrams truyền sang})

# npm i json-server --save-dev
thêm vào trong package.json
    "mock-sv" : "json-server ./mock-db/db.json"
sau đó npm run mock-sv
# npm i axios

## dùng thư viện icon (ưu tiên thư viện 1)
# npm i @expo/vector-icons 
<!-- https://icons.expo.fyi/ -->
import { Entypo,Ionicons  } from '@expo/vector-icons'; 
# npm i react-native-vector-icons
<!-- https://oblador.github.io/react-native-vector-icons/ -->
import Ionicons from 'react-native-vector-icons/Ionicons'

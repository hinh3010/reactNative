# chạy app
npm start   ||  npm run web ||  npm run ios ||  npm run androi

# cài bằng cmd
<!-- npm i -g expo-cli -->
<!-- expo init [ten] -->

# truyền hình ảnh vào = <Image/>

* với file ảnh trong assets
<Image source={require('./my-icon.png')} />

* với file ảnh trên assets và url cần style mới hiển thị đc
<Image
  source={{ uri: 'app_icon' }}
  style={{ width: 40, height: 40 }}
/>
<Image
  source={{ uri: 'asset:/app_icon.png' }}
  style={{ width: 40, height: 40 }}
/>
<Image 
    source={{uri: 'https://reactjs.org/logo-og.png'}}
  style={{ width: 40, height: 40 }}
/>

* Nếu bạn muốn đặt những thứ như HTTP-Verb, Headers hoặc Body cùng với yêu cầu hình ảnh, bạn có thể thực hiện việc này bằng cách xác định các thuộc tính này trên đối tượng nguồn:
<Image
  source={{
    uri: 'https://reactjs.org/logo-og.png',
    method: 'POST',
    headers: {
      Pragma: 'no-cache'
    },
    body: 'Your Body goes here'
  }}
/>

* có thể truyền dạng biến
var icon = this.props.active
  ? require('./my-icon-active.png')
  : require('./my-icon-inactive.png');
<Image source={icon} />;

# style ảnh
<Image 
    source={ảnh}
    style={{width:"100%",height:null ,aspectRatio:750/460 , resizeMode:"contain"}} 
/> 
<!-- style = {{ chiều rộng  , chiều cao , tỉ lệ khía cạnh , Chế độ thay đổi kt}} -->
resizeMode  : contain - giữ nguyên tỉ lệ ảnh
            : cover - phóng ảnh chiếm hết tỉ lệ khía cạnh


# import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
<!-- tính ra chiều cao chiều rộng của màn hình thiết bị sử dụng -->
ứng dụng
<Image
    source={ảnh-có-tỉ-lệ-631x925}
    style={{
        width: windowWidth ,
        height: (windowWidth*925)/631,
    }}
/>
<!-- set kích thước ảnh == kích thước hiển thị tỉ lệ theo chiều ngang -->
style={{
    width: windowWidth ,
    height: windowHeight
}}
<!-- set kích thước ảnh == kích thước toàn màn hình -->


# import { Platform } from 'react-native';
kiểm tra hệ điều hành
const os = Platform.OS

### NÚT
<!-- const [isEnabled, setIsEnabled] = useState(false); -->
# NÚT Button
<Button
    title={'Bật/Tắt'}
    color='#2196F3'
    onPress={() => setIsEnabled(pre => !pre)}
/>

# NÚT Switch
<Switch
    trackColor={{ false: "#767577", true: "#81b0ff" }}
    ios_backgroundColor="#3e3e3e"
    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
    onValueChange={() => setIsEnabled(pre => !pre)}
    value={isEnabled}
/>

# TextInput 
<TextInput 
    style={styles.inputPassword} 
    keyboardType="numeric"
    secureTextEntry={type}      // = true => type password
    autoFocus={true}            // tự động focus vào ô input
    placeholder="Nhập mật khẩu"
    placeholderTextColor="#929292"
/>

# KeyboardAvoidingView 
lên dùng để bao bên ngoài thẻ <TextInput/> thay cho <View/>
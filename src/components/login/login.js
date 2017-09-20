import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    Button,
    TouchableOpacity
} from 'react-native';
import { loginStyle } from './loginStyle';
class Login extends Component {
    render() {
        return (

            <View style={loginStyle.container}>

                <View style={loginStyle.iconBox}>
                    <Image source={require('../../images/icon.png')} style={loginStyle.imageIcon} />
                    <Text style={loginStyle.iconText1}>React Native</Text>
                    <Text style={loginStyle.iconText2}>UI Kitten</Text>
                </View>

                <View style={loginStyle.inputBox}>

                    <View>
                        <TextInput placeholder="Username" underlineColorAndroid="transparent" style={loginStyle.inputStyle} />
                        <TextInput placeholder="Password" underlineColorAndroid="transparent" style={loginStyle.inputStyle} />
                        <TouchableOpacity style={loginStyle.loginButton}>
                            <Text style={loginStyle.loginButtonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyle.socialIconContainer}>
                        <TouchableOpacity >
                            <Image
                                style={loginStyle.socialIcon}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS73_kc4hKnABULErHXnUK2Pcty3qVhOZUX6vmlQz9M2tWZ8C7xWA' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image
                                style={loginStyle.socialIcon}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAn1yX5SKPQK91Vddb03gN8poRKKaea-7hR6ZdkQmwa2frgSrH' }}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <Image
                                style={loginStyle.socialIcon}
                                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb8Ed1pBiZppBpe-EaFPCkXeTga6CW367n3Dld89IeznfVH-kyeEOvteA' }}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyle.accountCreateSuggest}>
                        <Text>Don't have an account?</Text><Text style={{ fontWeight: 'bold' }}> Sign up now</Text>
                    </View>

                </View>
            </View>
        );
    }
}

export default Login;
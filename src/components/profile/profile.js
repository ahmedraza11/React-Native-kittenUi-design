import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { profileStyle } from './profileStyle';
import { sliderImages } from './slideImages';
class Profile extends Component {
    static navigationOptions = {
        title: "USER PROFILE",
        headerTitleStyle: profileStyle.headerTitle
    }
    render() {
        return (
            <ScrollView contentContainerStyle={profileStyle.container}>
                <View style={profileStyle.profileBox}>
                    <Image
                        style={profileStyle.profileAvatar}
                        source={{ uri: 'http://i.dailymail.co.uk/i/pix/2017/04/20/13/3F6B966D00000578-4428630-image-m-80_1492690622006.jpg' }}
                    />
                    <Text style={profileStyle.profileName}>Helen Gilbert</Text>
                    <TouchableOpacity style={profileStyle.profileFollowButton}>
                        <Text style={profileStyle.profileFollowButtonText}>FOLLOW</Text>
                    </TouchableOpacity>
                </View>
                <View style={profileStyle.horizontalLine} />
                <View style={profileStyle.profileFigureBox}>
                    <View style={profileStyle.profileFigure}>
                        <Text style={profileStyle.figureValue}>86</Text>
                        <Text style={profileStyle.figureHeading}>Posts</Text>
                    </View>
                    <View style={profileStyle.profileFigure}>
                        <Text style={profileStyle.figureValue}>22.1k</Text>
                        <Text style={profileStyle.figureHeading}>Followers</Text>
                    </View>
                    <View style={profileStyle.profileFigure}>
                        <Text style={profileStyle.figureValue}>536</Text>
                        <Text style={profileStyle.figureHeading}>Following</Text>
                    </View>
                </View>
                <View style={profileStyle.imageSilderBox}>
                    {
                        sliderImages.map((v, i) => {
                            return (
                                <Image
                                    key={i}
                                    style={profileStyle.sliderImage}
                                    source={{ uri: v }}
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        );
    }
}
export default Profile;

import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Swiper from 'react-native-swiper'
import { SIZES } from './style'

export default function Carousel() {
        return (
                <View >
                        <View style={{
                                height: 200,
                                width: '100%',

                                justifyContent: 'center',
                                alignSelf: 'center',
                                borderRadius: 8,
                                paddingHorizontal:15

                        }}>
                                <Swiper height={200} style={styles.wrapper}
                                        autoplay={true}
                                        autoplayTimeout={4.5}
                                        showsPagination={false}

                                >
                                        <View style={styles.slide1} >
                                                <Image source={require('../assets/banners/delhi.png')} resizeMode="contain" style={styles.imagestyle} />
                                        </View>
                                        <View style={styles.slide1} >
                                                <Image source={require('../assets/banners/Green.png')} resizeMode="cover" style={styles.imagestyle} />
                                        </View>
                                        <View style={styles.slide1} >
                                                <Image source={require('../assets/banners/1.jpg')} resizeMode="cover" style={styles.imagestyle} />
                                        </View>
                                </Swiper>
                        </View>


                </View>


        )
}
const styles = StyleSheet.create({
        wrapper: {
                margin: 2
        },
        slide1: {
                flex: 1,
                justifyContent: 'center',
                backgroundColor: 'transparent',

        },

        imagestyle: {
                height: "90%",
                width: SIZES.width-20,
                alignSelf: 'center',


        }
})
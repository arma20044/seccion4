import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title: string,
    position?: 'BR' | 'BL',
    onPress: () => void
}



export const Fab = ( {title , onPress, position='BR'}: Props) => {

    const ios = () => {
        return(
            <TouchableOpacity
            onPress={ onPress }
            activeOpacity={ 0.8}
            style={ 
               ( position === 'BL' )
               ?styles.fabLocationBL
               :styles.fabLocationBR 
               }>
               
               
                       <View style={ styles.fab }>
                           <Text style={ styles.fabText }> { title }</Text>
                       </View>
                  
            </TouchableOpacity>
       )
    }
    
    const android = () => {
        return(
             <View style={ 
                ( position === 'BL' )
                ?styles.fabLocationBL
                :styles.fabLocationBR 
                }>
                <TouchableNativeFeedback 
                    onPress={ onPress }
                    background= { TouchableNativeFeedback.Ripple('grey', false, 30)}
                    >
                        <View style={ styles.fab }>
                            <Text style={ styles.fabText }> { title }</Text>
                        </View>
                    </TouchableNativeFeedback>
             </View>
        )
        
       
    }


  return (

  

        Platform.OS === 'ios'              
        ?ios()
        :android()

  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
            fontSize: 40,
            top: -15
    },
    fabLocationBR: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBL: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 2,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }

})
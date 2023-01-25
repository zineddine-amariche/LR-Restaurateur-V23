
import React, { useState, useContext ,useEffect} from 'react';
import UseModelContainer from './ModelContainer';

import { 
    
  
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    } 
    from 'react-native';

const ModeleOpen = () => {

    const [visible,setVisible] = useState(false)

    return ( 
        
    <UseModelContainer
        transparent 
        visible={visible}
    >
        <View style={{alignItems: 'center'}}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => setVisible(false)}>
                    <Image
                    source={require('../assets/x.jpg')}
                    style={{height: 30, width: 30}}
                    />
                </TouchableOpacity>
            </View>
        </View>
    <View style={{alignItems: 'center'}}>
        <Image
            source={require('../assets/sucees.png')}
            style={{height: 150, width: 150, marginVertical: 10}}
        />
    </View>
        <Text mode={true} style={{marginVertical: 30, fontSize: 20, textAlign: 'center'}}>
        {msg} 
        </Text>
    </UseModelContainer>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
})


export default ModeleOpen ;
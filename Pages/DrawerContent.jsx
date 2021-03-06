import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Drawer, Title, Caption } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

export default function DrawerContent(props) {

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        label="Profile"
                        onPress={() => { props.navigation.navigate('ProfilePage') }}
                    />
                </Drawer.Section>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        label="Search for Parking"
                        onPress={() => { props.navigation.navigate('SearchParkingPage') }}
                    />
                </Drawer.Section>
                {/* <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        label="Purchase history"
                        onPress={() => { props.navigation.navigate('History') }}
                    />
                </Drawer.Section> */}
            </DrawerContentScrollView >
        </View >
    );
}

const styles = StyleSheet.create({
    drawerSection: {
        marginTop: 15,
    },
});

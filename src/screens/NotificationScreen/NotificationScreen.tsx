import {ScrollView, View} from 'react-native';
import {Card, Text} from 'react-native-paper';
import {styles} from './styles';
import React, {Component} from 'react';
import {Notifications} from 'react-native-notifications';

const NotificationScreen = ({}) => {
  return (
    <ScrollView style= { {backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Card style={styles.card}>
          <Card.Content>
            <View>
              <Text variant="titleLarge">Verified</Text>
            </View>
            <View>
              <Text variant="labelLarge">
                You account has been verified. You can apply for your bus pass.
              </Text>
            </View>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>

    // class MyComponent extends Component {
    //   constructor(props) {
    //     super(props);
    //     Notifications.registerRemoteNotifications();

    //     Notifications.events().registerNotificationReceivedForeground(
    //       (notification: Notification, completion) => {
    //         console.log(
    //           `Notification received in foreground: ${notification.title} : ${notification.body}`,
    //         );
    //         completion({alert: false, sound: false, badge: false});
    //       },
    //     );

    //     Notifications.events().registerNotificationOpened(
    //       (notification: Notification, completion) => {
    //         console.log(`Notification opened: ${notification.payload}`);
    //         completion();
    //       },
    //     );
    //   }
    // }
  );
};
export default NotificationScreen;    
      
         
         
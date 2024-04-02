import { Text } from "react-native-paper"

const BusPassScreen = ()=>{
    // Your JWT payload (Base64 encoded)
    const jwtPayloadBase64 = 'eyJpZCI6MzcsIm5hbWUiOiJBbXJpbmRlciBTaW5naCIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsInR5cGUiOiJzdHVkZW50IiwiaWF0IjoxNzExODk5OTY2LCJleHAiOjE3MTE5MDM1NjZ9';
    
    // Decode the payload
    const decodedPayload = decode(jwtPayloadBase64);
    
    // Parse the decoded payload as JSON
    const payloadJSON = JSON.parse(decodedPayload);
    
    console.log(payloadJSON);
    return(
        <Text>Bus Pass</Text>
    )
};
export default BusPassScreen;

import { decode } from 'base-64';

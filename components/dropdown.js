import { ListItem } from '@rneui/themed';
import { useState } from 'react';
import { View } from 'react-native';


const Dropdown = ({placeholder, items}) => {
    const [expanded, setExpanded] = useState(false);
    return (
      <>
      <View style={{width: '80%', position: 'relative'}}>
      <ListItem.Accordion
          content={
            <ListItem.Content>
              <ListItem.Title style={{color: 'darkgrey'}}>{placeholder}</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
          containerStyle={{
            backgroundColor: '#333333', height: 65
        }}
     >
           {[1,2,3].map((item, index) => (
          <ListItem key={index} style={{ backgroundColor: '#333333' }}>
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ))}
        </ListItem.Accordion>
      </View>
      </>
    );
  }

  export default Dropdown;
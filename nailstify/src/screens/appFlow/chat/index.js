import React, { useCallback, useEffect, useState } from 'react'
import {Wrapper } from '../../../components';
import { styles } from './style';
import { GiftedChat,InputToolbar, Send} from 'react-native-gifted-chat';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { appImages} from '../../../services';
import { ChatHeader } from '../../../components/headers'
import { automasgs } from '../../../services/constants/dummyData';
const Chat = ({ navigation }) => {
  const [messages, setMessages] = useState([]);
  const [autoReplyMessages, setAutoReplyMessages] = useState(automasgs);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  const renderSend = (props) => {
    return (
      <Send 
        alwaysShowSend={true}
        {...props}>
        <Wrapper style={styles.sendicon} alignItemsCenter justifyContentCenter flexDirectionRow>
          <Icon name="send-o" type='font-awesome' size={18} />
        </Wrapper>
      </Send>
    )
  }
  const renderChatFooter = () => {
    return (
      <Wrapper style={styles.ss} justifyContentCenter >
      </Wrapper>
    )
  }

  const renderInputToolbar = props => {
    return (
      <Wrapper alignItemsFlexStart flexDirectionRow  style={styles.userimgstyle}>
        <InputToolbar {...props} />
        <TouchableOpacity style={styles.voiceicon}>
          <Icon name="smile" type='feather' size={25}  />
        </TouchableOpacity>
      </Wrapper>
    )
  }
  const handleAutoReplySelection = (messageText) => {
    const newMessage = {
      text: messageText,
      createdAt: new Date(),
      user: {
        _id: 1,
      },
    };
    onSend([newMessage]);
  };
  return (
    <Wrapper isMain style={styles.chatwraper}>
     <ChatHeader image={appImages.user1} name="Jane Done"/>
      <GiftedChat
        messages={messages}
        renderChatFooter={renderChatFooter}
        renderSend={renderSend}
        renderInputToolbar={renderInputToolbar}
        textInputStyle={styles.input}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </Wrapper>
  )
}

export default Chat
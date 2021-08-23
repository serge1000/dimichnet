import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    const state = props.store.getState().dialogsPage;

    let dialogsElements =  state.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message key={m.id} message={m.message}/> );
    let newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    const onNewMessageChange = (e) => {
        const body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                <div>{ messagesElements }</div>
                <div>
                    <div><textarea 
                    onChange={onNewMessageChange}
                    value={newMessageBody} 
                    placeholder='Enter your message'>
                    </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
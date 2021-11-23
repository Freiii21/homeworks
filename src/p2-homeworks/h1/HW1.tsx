import React from 'react'
import Message from './Message';
import scooter from '../../assets/images/scooter.jpg'

const messageData = {
    avatar: scooter,
    name: 'Scooter',
    message: 'How much is the Fish?',
    time: '23:59',
}

function HW1() {
    return (
        <div>
            <hr/>
            <div style={{marginLeft: "12px", fontStyle:"italic"}}>homework 1</div>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            {/*<hr/>*/}
        </div>
    )
}

export default HW1

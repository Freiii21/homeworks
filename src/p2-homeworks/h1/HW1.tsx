import React from 'react'
import Message from './Message';

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJopYxo3lmx46T7LV_tkb0RajZ_-OEReZgFA&usqp=CAU',
    name: 'Scooter',
    message: 'How much is the Fish?',
    time: '23:59',
}

function HW1() {
    return (
        <div>
            <hr/>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1

import React from 'react'
import Message from './Message';
const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGC7fyAbbc8TCLxm3SvPc2IOxlonq80CaP5A&usqp=CAU',
    name: 'Hans Peter Geerdes',
    message: 'How much is the Fish? How much is the Fish?How much is the Fish',
    time: '22:00',
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

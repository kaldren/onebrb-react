import React from 'react'
import {Alert} from 'react-bootstrap'

type Props = {
    variant: string,
    children: any,
}

const Message = (props: Props) => {
  return (
    <Alert variant={props.variant}>
        {props.children}
    </Alert>
  )
}

Message.defaultProps = {
    variant: 'info',
}

export default Message
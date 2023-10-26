import React, { ElementType } from 'react'

type Props = {
    tag: ElementType,
    text: string,
    className: string,
    size?: string,
    weigtht?: string,
    color?: string
}
const Text = ({ tag, text, className, size, weigtht, color }: Props) => {
    const Tag = tag
    return (
        <Tag className={className} size='16px' weigtht='400px' color='#000' style={{ fontSize: size, color: color, fontWeigtht: weigtht }}>
            {text}
        </Tag>
    )
}

export default Text
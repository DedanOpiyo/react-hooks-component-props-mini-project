import React from 'react'

export default function Article({title, preview, minutes, date="January 1, 1970"}) {
    const displayEmojis = () => {
        if (minutes < 30) {
            const cofeeCups = Math.ceil(minutes / 5);
            return '☕️'.repeat(cofeeCups);
        } else {
            const bentobOX = Math.ceil(minutes / 10);
            return '🍱'.repeat(bentobOX);
        }
    };
  return (
    <article>
        <h3>{title}</h3>
        <small>{date}</small>
            <span>{`. ${displayEmojis()}${minutes} min read`}</span>
        <p>{preview}</p>
    </article>
  )
}

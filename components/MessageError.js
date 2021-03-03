import React from 'react'

const MessageError = () => (
    <>
        <a
            style={{
                display: 'flex',
                justifyContent: 'center',
                fontSize: '2rem',
                margin: '2rem'
            }}
            href="/"
            title="link to index"
        >
            Voltar para a página principal
        </a>
        <h1
            style={{
                width: '70%',
                textAlign: 'center',
                margin: '1rem auto'
            }}
        >
            Oops, something went wrong, care to go back and try again, please ?
            If this mistake happens again please contact the page administrator.
        </h1>
    </>
)

export default MessageError

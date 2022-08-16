import React, { FC } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'

interface Props {
    value: any;
    language: any;
}

const MarkComponent: FC<Props> = ({ value, language }) => {
    return (
        <SyntaxHighlighter language={language && null} style={docco}>
            {value ?? ''}
        </SyntaxHighlighter>
    )
}

export default MarkComponent;
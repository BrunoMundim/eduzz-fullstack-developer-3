import React, { useEffect, useState, memo } from 'react'

// Utilizando o memo (vide export), nós verificamos se é necessário atualizar os componentes na tela.
const areEqual = (prevProps, nextProps) => {
    return prevProps.loading === nextProps.loading
}

function Twitter (props) {
    const { loading } = props
    const [tweet, setTweet] = useState()

    // componentDidMount
    useEffect(() => {
        const { posts, loading } = props
        console.log('componentDidMount', posts)
        console.log('componentDidMount:loading', loading)
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('componentDidUpdate:loading', loading)
    }, [loading])

    // Toda vez que estiver usando um return dentro de um useEffect, o useEffect passa a ser o:
    // componentWillUnmount
    useEffect(() => {
        return () => {
            console.log('componentWillUnmount: fui removido :(')
        }
    }, [])

    const handleTweet = () => {
        setTweet('Tweet atualizado')
    }

    console.log('Tweet atualizado: ', tweet)
    return (
      <div>
        <button onClick={handleTweet}>
            Re-render
        </button>
        tests
      </div>
    )
}

export default memo(Twitter, areEqual);
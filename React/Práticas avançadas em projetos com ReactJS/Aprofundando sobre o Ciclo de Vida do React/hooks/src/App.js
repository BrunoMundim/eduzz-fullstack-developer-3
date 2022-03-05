import React, { Component } from 'react'
import Twitter from './components/twitter/twitter'

class App extends Component {

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  onRemove = () => {
    this.setState({
      actived: false
    })
  }
  
  render() {
    
    const posts = [{
      title: 'xpto',
      description: 'foo'
    },{
      title: 'xpto2',
      description: 'foo2'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>
          Remover components
        </button>

        {this.state.actived && (
          
          <Twitter 
            posts = {posts} 
            loading={this.state.loading} 
          />

        )}        
      </div>      
    )    
  }
}

export default App;
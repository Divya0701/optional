import React from 'react'
import { Container } from 'reactstrap'
import axios from 'axios'
import PostCard from './PostCard'

let inputResults=[]
class PostsBody extends React.Component{
    state={inputSearch:""}

    componentDidUpdate(){
        this.fetchData()
    }

    fetchData=async()=>{
      const {inputSearch} = this.state
      const baseURL = `https://hn.algolia.com/api/v1/search?query=${inputSearch}`
      const response = await fetch(baseURL)
      const data = await response.json()
      inputResults=data.hits
    }

    getData=event=>{
     this.setState({inputSearch:event.target.value})
    }
    
    render(){
        const {inputSearch}=this.state
        return (
            <Container>
                <form className='form-group mt-5 d-flex'>
                    <input type="text" className='form-control me-2' onChange={this.getData} value={inputSearch}/>
                </form>
                
                <ul className='container bg-white results-container p-4 my-4'>
                    {
                        inputResults.map((eachItem)=><PostCard title={eachItem.title} num_comments={eachItem.num_comments} author={eachItem.author} url="#"/>)}
                </ul>
            </Container>
        )
    }
}
export default PostsBody;

import React from 'react'
import unsplash from './api/unsplash'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './components/nav/SearchBar'
import ImageList from './components/imagelist/ImageList'
import Footer from './components/footer/Footer'

class App extends React.Component {

    state = { images: [] }

    componentDidMount() {
        this.onSearchSubmit('toronto island')
    }

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {
                query: term,
                per_page: 50
            }
        })
        console.log(this.state.images)
        this.setState({ images: response.data.results })
    }

    render() {
        return (
            <div className="App-style">
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
                <Footer />
            </div>
        )
    }
}

export default App
import React from 'react';
import axios from 'axios';
import SearchBar from './searchBar';
import ImageList from './imageList.js';



class App extends React.Component {

    state = { images: [] }
    onSearchSubmit = async (term) => {
        const response = await axios.get("https://api.unsplash.com/search/photos", {
            params: { query: term },
            headers: {

                Authorization:'Client-ID 0eb71dfa7938c6c74204e75eac2b273f5e5f2aceda6ca0dd52578c352a5f4370'
            }

        })
        this.setState({
            images: response.data.results
        })
    }
    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}


export default App;
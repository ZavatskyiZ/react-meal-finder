import React from 'react'
import { Link } from 'react-router-dom';

function Search( {searchMeals}) {
    const [text, setText] = React.useState(``);

    const onSubmit = e => {
        e.preventDefault();
        if( text === ``){
            alert(`Search is empty!`)
        }
        else{
            searchMeals(text);
            setText(``);
        }
    }
    const onChange = e => setText(e.target.value);
    return (
        <div>
            <Link to='/' className='home-btn'><h1>Meal Finder</h1></Link>
            <form action="" onSubmit={onSubmit}>
                <input type="text" 
                    value={text}
                    onChange={onChange}
                    placeholder="Search for meals or keywords"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form> 
        </div>
    )
}

export default Search

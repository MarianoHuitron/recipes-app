import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

const Navbar = () => {

    const [keySearch, setKeySearch] = useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if(keySearch === "") return;
        history.push(`/search/${keySearch}`);

    }

    return (
        <nav className="navbar navbar-expand-leg navbar-dark bg-primary">
            <div className="container">
                <Link to="/" className="navbar-brand" >Recipes App</Link>
                    <form 
                        className="form-inline my-2 my-lg-0"
                        onSubmit={ handleSubmit }    
                    >
                        <input 
                            type="text" 
                            className="form-control mr-sm-2"
                            placeholder="Search by name"
                            value={ keySearch }
                            onChange={ (e) => setKeySearch(e.target.value) }    
                        />
                        <button
                            className="btn btn-secondary  my-sm-0"
                            type="submit"
                        >Search</button>
                    </form>
            </div>
        </nav>
    )
}

export default Navbar

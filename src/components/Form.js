import React, { useContext, useEffect } from 'react';

import { GithubContext } from '../context/GithubContext';
import { useHistory } from 'react-router-dom';

const Form = () => {
    const { getSearch, search, setSearch } = useContext(GithubContext);
    const history = useHistory();
    useEffect(() => {
        history.push('/overview');
    }, [])
    return (
        <form onSubmit={getSearch}>
            <input type="text" placeholder="search for a user" value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

        </form>
    );
}

export default Form;
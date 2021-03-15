import { useEffect, useState } from "react";
import { Route, Link, useHistory } from 'react-router-dom';
import FavoritesDetails from "./FavoritesDetails";

const FavoritesList = () => { 
    const [favorites, setFavorites] = useState([]);
    const history = useHistory();
    useEffect(() => {
        (async () => {
            const favoriteData = await fetch('http://127.0.0.1:3001/favorites').then(response => response.json())
            console.log("there is data here: ", favoriteData);
            setFavorites(favoriteData);
        })();
    },[setFavorites]);

    return (
        <>
            {!!favorites.length ? (
                
                <>
                    <Route exact path='/'>
                        <ul>
                            {favorites.map((favorite, index) => {
                                return (
                                    <li key={index}>
                                        <Link to={`/favorite/${favorite.id}`}>{favorite.name}</Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </Route>
                    <Route path='/favorite/:favorite_id'>
                        <FavoritesDetails favorites={favorites} />
                        <button type="button" onClick={() => history.goBack()}>Por Atrás Puto </button>
                    </Route>
                </>
            ) : (
                <p> Loading Favorite Foods</p>
            )}
        </>
    )

}

export default FavoritesList;
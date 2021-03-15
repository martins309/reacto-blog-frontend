import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FavoritesDetails = () => {
    const { favorite_id } = useParams()
    const [favorite, setFavorite] = useState([]);

    useEffect(() => {
        (async () => {
            const favoriteData = await fetch(`http://127.0.0.1:3001/favorites/${favorite_id}`)
            .then(response => response.json())
            setFavorite(favoriteData);
        })();
    },[setFavorite, favorite_id]);

    return (
        <p> {favorite.name} is delicious</p>
    )
};

export default FavoritesDetails;
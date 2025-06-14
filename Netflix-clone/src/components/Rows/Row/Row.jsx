import React,{useEffect, useState} from 'react'
import axios from "../../../utils/axios";
import './Row.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const Row = ({title, fetchUrl, isLargeRow}) => { 
    const [movies, setMovies] = useState([]);
    const [trailUrl, setTrailUrl] = useState("");
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        (async () => {
            try{
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            }catch (error) {
                console.error("Failed to fetch:", error);
            }
        })();
    }, [fetchUrl]);
    const handleClick = (movie) => {
        if (trailUrl) {
            setTrailUrl("");
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.original_name)
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                setTrailUrl(urlParams.get("v"));
                })
                .catch((error) => console.error("Trailer not found:", error));
        }
    };
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
return (
    <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
            {movies?.map((movie, index) => (
                <img
                    onClick={() => handleClick(movie)}
                    key={index}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.name}
                />
            ))}
            </div>
                <div style={{padding:'40px'}}>
                    {trailUrl && <Youtube videoId={trailUrl} opts={opts} />}
                </div>
    </div>
)
}

export default Row
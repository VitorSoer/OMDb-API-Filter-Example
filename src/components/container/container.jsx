import React from "react";
import ReactPaginate from "react-paginate";
import MoviesCard from "../movies/movies";

import { useEffect, useState } from "react";
import { ItemsContainer, MainContainer } from "./styles/container.styles";
import { SkeletonStyle } from "./styles/skeleton.styles";
import { PaginateWrapper } from "./styles/pagination.styles";

function Container() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const moviesPerPage = 10;
  const pageVisited = pageNumber * moviesPerPage;
  const pageCount = Math.ceil(movies.length / moviesPerPage);

  const url = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;
  const searchMovies = async (title) => {
    let totalPages = 1;
    let moviesArray = [];

    while (totalPages <= 5) {
      const res = await fetch(`${url}&s=${title}&page=${totalPages}`);
      const data = await res.json();

      const movieList = data.Search;

      if (movieList === undefined) {
        alert("Movie not Found...");
        break;
      } else {
        movieList.forEach((e) => moviesArray.push(e));
      }
      totalPages++;
    }

    setMovies(moviesArray);
    setLoading(false);
  };

  useEffect(() => {
    searchMovies("Spider man");
  }, []);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  console.log(movies);

  return (
    <MainContainer>
      <h1>Search Now!</h1>
      <div>
        <input
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" onClick={() => searchMovies(searchTerm)}>
          Search
        </button>
      </div>

      <div>
        {loading ? (
          <ItemsContainer>
            {[...Array(10)].map((_, i) => (
              <SkeletonStyle key={i} />
            ))}
          </ItemsContainer>
        ) : movies?.length > 0 ? (
          <>
            <ItemsContainer>
              {movies
                .slice(pageVisited, pageVisited + moviesPerPage)
                .map((movie) => (
                  <MoviesCard key={movie.imdbID} movie={movie} />
                ))}
            </ItemsContainer>
            <PaginateWrapper>
              <ReactPaginate
                previousLabel={"Anterior"}
                nextLabel={"Próximo"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBtn"}
                previousClassName={"previousBtn"}
                nextLinkClassName={"nextBtn"}
                disabledClassName={"disabledBtn"}
                activeClassName={"activeBtn"}
              />
            </PaginateWrapper>
          </>
        ) : (
          <h2>No movies found...</h2>
        )}
      </div>
    </MainContainer>
  );
}

export default Container;

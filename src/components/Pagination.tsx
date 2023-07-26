import './Pokedex/styles/Pagination.css';
import { useCallback } from 'react';

interface PaginationProps {
  pokemonPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPokemon: number;
}

const Pagination: React.FC<PaginationProps> = ({
  pokemonPerPage,
  currentPage,
  setCurrentPage,
  totalPokemon,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPokemon / pokemonPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPagesToShow = 6;
  const middlePage = Math.floor(maxPagesToShow / 2);
  const maxPage = Math.min(currentPage + middlePage, pageNumbers.length);
  const minPage = Math.max(maxPage - maxPagesToShow + 1, 1);
  const displayedPages = pageNumbers.slice(minPage - 1, maxPage);

  const onPreviousPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }, [setCurrentPage]);

  const onNextPage = useCallback(() => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pageNumbers.length));
  }, [setCurrentPage, pageNumbers.length]);

  const selectPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, [setCurrentPage]);

  return (
    <nav className="pagination is-centered mb-5" role="navigation" aria-label="pagination">
      <button
        className="pagination-previous"
        onClick={onPreviousPage}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <button
        className="pagination-next"
        onClick={onNextPage}
        disabled={currentPage >= pageNumbers.length}
      >
        Next
      </button>
      <ul className="pagination-list">
        {displayedPages.map((noPage) => (
          <li key={noPage}>
            <button
              className={`pagination-link ${noPage === currentPage ? 'is-current' : ''}`}
              onClick={() => selectPage(noPage)}
            >
              {noPage}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
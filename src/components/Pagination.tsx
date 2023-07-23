import './Pokedex/styles/Pagination.css'
const Pagination = ({
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
  
    const onPreviousPage = () => {
      setCurrentPage(currentPage - 1);
    };
  
    const onNextPage = () => {
      setCurrentPage(currentPage + 1);
    };
  
    const selectPage = (e) => {
      setCurrentPage(e);
    };
  
    return (
      <nav
        className="pagination is-centered mb-5"
        role="navigation"
        aria-label="pagination"
      >
        <a
          className={`pagination-previous ${
            currentPage === 1 ? "is-disabled" : ""
          }`}
          onClick={onPreviousPage}
        >
          Previous
        </a>
        <a
          className={`pagination-next ${
            currentPage >= pageNumbers.length ? "is-disabled" : ""
          }`}
          onClick={onNextPage}
        >
          Next
        </a>
        <ul className="pagination-list">
          {displayedPages.map((noPage) => (
            <li key={noPage}>
              <a
                className={`pagination-link ${
                  noPage === currentPage ? "is-current" : ""
                }`}
                onClick={() => selectPage(noPage)}
              >
                {noPage}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
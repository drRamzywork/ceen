import NextLink from './links/NextLink'; // ==========================================================

// ==========================================================
// const Pagination = props => {
//   const { className = 'justify-content-center', altStyle = true } = props;

//   const NextPreviousBtn = (url, icon) => {
//     return <NextLink href={url} className="page-link" title={<i className={`uil ${icon}`} />} />;
//   };

//   return <nav className={`d-flex ${className}`} aria-label="pagination">
//     <ul className={`pagination ${altStyle ? 'pagination-alt' : ''}`}>
//       <li className="page-item disabled">{NextPreviousBtn('#', 'uil-arrow-left')}</li>

//       {[1, 2, 3].map((item, i) => <li className={`page-item ${i === 0 ? 'active' : ''}`} key={item}>
//         <button className="page-link">{item}</button>
//       </li>)}

//       <li className="page-item">{NextPreviousBtn('#', 'uil-arrow-right')}</li>
//     </ul>
//   </nav>;
// };

// export default Pagination;

const Pagination = ({ currentPage, totalPages, onPageChange, className, altStyle = true }) => {
  // ...

  const NextPreviousBtn = (url, icon) => {
    return <NextLink href={url} className="page-link" title={<i className={`uil ${icon}`} />} />;
  };

  return (
    <nav className={`d-flex ${className}`} aria-label="pagination">
      <ul className={`pagination ${altStyle ? 'pagination-alt' : ''}`}>
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          {NextPreviousBtn('#', 'uil-arrow-left', currentPage > 1 ? () => onPageChange(currentPage - 1) : null)}
        </li>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li className={`page-item ${page === currentPage ? 'active' : ''}`} key={page}>
            <button className="page-link" onClick={() => onPageChange(page)}>{page}</button>
          </li>
        ))}

        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          {NextPreviousBtn('#', 'uil-arrow-right', currentPage < totalPages ? () => onPageChange(currentPage + 1) : null)}
        </li>
      </ul>
    </nav>
  );
};
export default Pagination;

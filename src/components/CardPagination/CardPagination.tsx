import { FC } from 'react';
import classes from './CardPagination.module.css';
import clsx from 'clsx';

export interface ICardPaginationProps {
  curPage: number;
  maxPage: number;
  maxPagesToView: number;
  handlePageClick: (pageNumber: number) => void;
}

const CardPagination: FC<ICardPaginationProps> = ({
  curPage,
  maxPage,
  maxPagesToView,
  handlePageClick
}) => {
  const midPageOffset: number = Math.floor(maxPagesToView / 2);
  const endPage: number = Math.min(
    maxPage + 1,
    Math.max(1, curPage - midPageOffset) + maxPagesToView
  );
  const startPage: number = Math.max(1, endPage - maxPagesToView);

  const handlePageMove = (next: boolean) => {
    const newPage = next
      ? Math.min(maxPage, curPage + 1)
      : Math.max(1, curPage - 1);
    handlePageClick(newPage);
  };

  return (
    <div className={classes.paginationContainer}>
      <button onClick={() => handlePageClick(1)} className={classes.pageButton}>
        {'«'}
      </button>
      <button
        onClick={() => handlePageMove(false)}
        className={classes.pageButton}
      >
        {'‹'}
      </button>
      <div className={classes.pages}>
        {endPage >= startPage &&
          [...Array(endPage - startPage).keys()].map((i) => {
            const pageNumber = startPage + i;
            return (
              <button
                key={pageNumber}
                onClick={() => handlePageClick(pageNumber)}
                className={clsx(
                  classes.pageButton,
                  pageNumber === curPage ? classes.curPageButton : ''
                )}
              >
                {pageNumber}
              </button>
            );
          })}
      </div>
      <button
        onClick={() => handlePageMove(true)}
        className={classes.pageButton}
      >
        {'›'}
      </button>
      <button
        onClick={() => handlePageClick(maxPage)}
        className={classes.pageButton}
      >
        {'»'}
      </button>
    </div>
  );
};

export default CardPagination;

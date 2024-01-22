import React from 'react';
import ReactPaginate from 'react-paginate';
import s from './Pagination.module.scss';

const Pagination = ({ onChangePage }) => {
    return (
        <div>
            <ReactPaginate
                containerClassName={s.root}
                pageClassName={s.page}
                activeClassName={s.active}
                breakClassName={s.break}
                nextClassName={s.next}
                previousClassName={s.previous}
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={event => onChangePage(event.selected + 1)}
                pageRangeDisplayed={4}
                pageCount={3}
                renderOnZeroPageCount={null}
            />
        </div>
    );
};

export default Pagination;

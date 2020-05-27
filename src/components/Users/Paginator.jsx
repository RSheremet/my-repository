import React from "react";
import style from "../../App.module.css";

const Paginator = (props) => {

        let pagesCount = props.totalUsersCount/props.pageSize;
        pagesCount = Math.ceil( pagesCount );

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div>
                { props.pages.map( p => {
                    if (props.currentPage === p) {
                        return <span className={ style.selectedPage }>{p}</span>
                    } else {
                        return <span className={style.unselected_page} onClick={ () => { props.onChangePage(p) } }>{p}</span>
                    }
                })}

            </div>
        )

};

export default Paginator
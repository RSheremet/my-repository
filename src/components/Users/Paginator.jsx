import React from "react";
import style from "../../App.module.css";

const Paginator = (props) => {

        let pages = props.pages.length; // 46
        let currentPage = props.currentPage; // 32
        let pagesSectionSize = 5; // 5
        let totalPagesRange = Math.ceil(pages/pagesSectionSize); // 10 = 46 / 5 -- сколько всего должно быть секций
        let currentSection = Math.ceil(currentPage/pagesSectionSize); // 7 = 32/5 = 7 -- номер текущей секции
        let minPageInSection = (currentSection * pagesSectionSize) - 4; // 31 = 7 * 5 = 35 -- минимальный номер страницы в секции
        let maxPageInSection = currentSection * pagesSectionSize; // 35 = 7 * 5 -- максимальный номер страницы в секции

        let prevPage = props.currentPage - 1;
        let nextPage = props.currentPage + 1;


        return (
            
            <div className={style.paginatorContainer}>
                <button onClick={ () => { props.onChangePage(prevPage) } }>Назад</button>
                { props.pages.map( p => {
                    if (props.currentPage === p) { // если страница равна странице в состоянии то выделить ее особым стилем
                        return <span className={ style.selectedPage }>{p}</span>
                    } else if ( p >= minPageInSection && p <= maxPageInSection ) { // если страницйа меньше минимального номера и максимального то показать ее
                        return <span className={style.unselected_page} onClick={ () => { props.onChangePage(p) } }>{p}</span>
                    }
                })}
                <button onClick={ () => { props.onChangePage(nextPage) } }>Вперед</button>


            </div>
        )

};

export default Paginator
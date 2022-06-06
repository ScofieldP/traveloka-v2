import { React, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import Header from "../Header";
import Footer from "../Footer";
import SearchBar from "../SearchBar";
import Place from "./Place";

export default function Choice(props) {
  //fake DB
  const restaurants = !localStorage.res ? "" : JSON.parse(localStorage.res);
  //console.log(restaurants);
  //const { restaurants } = props;
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3; //set số lượng item
  const pageVisited = pageNumber * usersPerPage;
  const displayUsers = restaurants
    .slice(pageVisited, pageVisited + usersPerPage)
    .map((restaurant) => {
      return <Place restaurant={restaurant} />;
    });
  const pageCount = Math.ceil(restaurants.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <Header />
      <section className="main_container">
       <SearchBar/>
        <div className="bread_crum">
          <div className="container w-75 ">
            <p>Eats/ A Place/ Asian</p>
            <p className="fs-3">Asian Food Around A Place</p>
          </div>
        </div>
        <div className="select_res">
          <div className="container w-75  ">
            <div className="row">
              <div
                className="col-2 border border-dark "
                style={{ height: "100px" }}
              ></div>

              <div className="col-8 ms-5">
                <div className="Choice">
                  {displayUsers}
                  <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    preLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

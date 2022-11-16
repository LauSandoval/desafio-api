import React, { useState, useEffect } from "react";
import CardApi from "./CardApi";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "../Searcher.css";

function SimpleContainer() {
  const [data, setData] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    consultarInformacion();
  }, [sortType]);

  const consultarInformacion = async () => {
    const url =
      "https://api.themoviedb.org/3/trending/movie/week?api_key=42677d6ff840384f043e21d85d5d8d79";
    const response = await fetch(url);
    const data = await response.json();
    sortData(data.results);
    setMovieList(data.results);
  };

  const filterCard = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredmovies = movieList.filter((data) =>
      `${data.title}`.toLowerCase().includes(value)
    );
    return setData(filteredmovies);
  };

  function sortData(data) {
    let sortedData;
    if (sortType === "descending") {
      sortedData = [...data].sort((a, b) => {
        setSortType("descending");
        return b.title.localeCompare(a.title);
      });
    } else if (sortType === "ascending") {
      sortedData = [...data].sort((a, b) => {
        setSortType("ascending");
        return a.title.localeCompare(b.title);
      });
    } else {
      return setData(data);
    }
    return setData(sortedData);
  }

  return (
    <div>
      <div className="content">
        <div className="wrapper">
          <Container className="wrapper__sort-buttons">
          <h5>Sorting Movies</h5>
            <Form.Select style={{width:'200px'}}onChange={(e) => setSortType(e.target.value)}>
              <option disabled>Sort By</option>
              <option value="default">Trending</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </Form.Select>
          </Container>
          <div className="Searcher">
            <h4>Add Movie Title:</h4>
            <Form.Control
              className="form-control"
              placeholder="Search..."
              onInput={filterCard}
            />
          </div>
          <Container className="containerCard" fluid style={{ width: "60%" }}>
            <Row>
              {data.map((element, index) => (
                <CardApi data={element} key={index} />
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}
export default SimpleContainer;

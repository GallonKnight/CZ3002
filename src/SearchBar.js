import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories:""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleSubmit(event) {
    alert("Doodle diddle this is  " + this.state.value);
    event.preventDefault();
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  //get unique ID probs // Jasper
  getUnique(arr, comp) {
    const unique = arr
      //store the comparison values in array
      .map(e => e[comp])

      // store the keys of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter(e => arr[e])

      .map(e => arr[e]);

    return unique;
  }

  componentDidMount() {
    const locas = require('./CZ3002_dataset_short.json');
    this.setState({ locas: locas });
  }
  render(){
    const uniqueCategory = this.getUnique(this.state.courses, "category");
    const categories = this.state.courses;
    const course = this.state.course;


    return(
      <div>
        <label>Looping thru Category tag from JSON file
          <select
          value={this.state.course}
          onChange={this.handleChange}>
            {uniqueCategory.map(course=>(
              <option key={course.id} value={course.categories}>
                {course.categories}
              </option>
            ))}
          </select>
          <input type="submit" value="Submit" />
        </label>
      </div>
    );
  }


}

export default SearchBar();
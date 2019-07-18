
import React from 'react';
import '../../Components/search/search.css'

class EASearch extends React.Component {

    test() {
        console.log('tester');
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('myInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("search-list");
        li = ul.getElementsByTagName('li');

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
            } else {
            li[i].style.display = "none";
            }
        }
    }

    render() {
      return (
          <>
        <input className="form-control mr-sm-2" id="myInput" type="text" placeholder="Search" 
        onKeyUp={() => this.test()}
        ></input>
        <ul id="search-list">
        <li><a href="#">Adele</a></li>
        <li><a href="#">Agnes</a></li>
        <li><a href="#">Billy</a></li>
        <li><a href="#">Bob</a></li>
        <li><a href="#">Calvin</a></li>
        <li><a href="#">Christina</a></li>
        <li><a href="#">Cindy</a></li>
        </ul>
        </>
      );
    }
  }
export default EASearch
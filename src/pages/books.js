import React,{useState} from 'react'
import TouristIntro from '../intro/touristintro.js'
import Pagenav from './pagenav.js'
import {books} from '../shared/books.js'

function Books(){
  const [count, setCount] = useState(0);
  let course_book=books[count];
  return(
    <div>
      <TouristIntro intro="Important Books for semester exam"/>
    <Pagenav/>
      <div className="container fade">
      <div className="alert alert-primary" role="alert">
        books of respective semesters will be uploaded soon..
      </div>
      <div className="year">
        <button onClick={() => setCount(0)} disabled={count===0}>1st year</button>
        <button onClick={() => setCount(1)} disabled={count===1}>CST </button>
        <button onClick={() => setCount(2)}  disabled={count===2}>Aerospace</button>
        <button onClick={() => setCount(3)} disabled={count===3}>ETC</button>
        <button onClick={() => setCount(3)}  disabled={true}>IT </button>
        <button onClick={() => setCount(4)}  disabled={true}>ME</button>
        <button onClick={() => setCount(5)}  disabled={true}>Civil </button>
        <button onClick={() => setCount(6)}  disabled={count===6}>EE </button>
        <button onClick={() => setCount(7)} disabled={true}>ETC</button>
        <button onClick={() => setCount(8)}  disabled={true}>Mining</button>
        <button onClick={() => setCount(9)}  disabled={true}> Metallurgy</button>
      </div>
      <div className="booksslide">
        <div>
        {
          course_book.sub.map((sub)=>{
            // console.log(sub)
            return(
              <div className="row booksection" key={sub.title}>
                <div className="col-4" ><h5>{sub.title}</h5></div>
                <div className="col-8">
                <ol>
                {sub.books.map((book)=>{
                  return(
                    <li key={book.name}>
                    <h6 ><a  href={book.link} target="blank">{book.name}</a></h6>
                    </li>
                  );
                })
              }
              </ol>
                </div>
                <hr/>
              </div>
            );
          })
        }
        </div>
      </div>
      </div>
    </div>
  );
}

export default Books;

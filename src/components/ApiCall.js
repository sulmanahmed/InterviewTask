import React, { useState } from 'react'
import axios from 'axios'
function Task2() {
  const [data, setData] = useState([])
  const fetchData = () => {
    axios
      .get(' https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const postData = () => {
    if (data.length === 0) {
      alert('First Fetch')
    } else {
      axios
        .post(' https://jsonplaceholder.typicode.com/users', data)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  return (
    <>
    <div className="container">
    <h4>Task 2 , Please First Fetch and Then Post Same Data</h4>


    </div>
     
     <div className="float-left w-100 text-center">
     <button type="button" className="btn btn-primary m-2" onClick={fetchData}>
        Fetch Data
      </button>

      <button type="button" className="btn btn-primary m-2" onClick={postData}>
        Post Data
      </button>
     </div>
    </>
  )
}

export default Task2

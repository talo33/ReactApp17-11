
import './App.css';
import Header from './component/Header';
// import DatingCards from './component/DatingCards';
import SwipeButtons from './component/SwipeButton';
function App() {
  return (
    <div className="app">
      <Header />
      {/* <DatingCards /> */}
      <SwipeButtons />  
    </div>
  );
}

export default App;


//ex2

// import React, {useState, useEffect} from 'react'
// import './App.css'


// function App() {
//   const [video, setVideos] = useState([])

//   useEffect (() => {
//     async function fetchData() {
//       const res = await axios.get("/v2/posts")
//       setVideos(res.data)
//       return res
//     }
//     fetchData()
    
//   }, [])
// }
// return (
//   <div className="app">
//     <div className="app_videos"></div>
//   </div>
// )


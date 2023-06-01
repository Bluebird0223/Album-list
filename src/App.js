import { useEffect, useState } from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Album from "./components/Album";
import Newalbum from "./components/Newalbum";
import UpdateAlbum from "./components/UpdateAlbum";


function App() {
  const [albums,setAlbums]=useState([]);

  useEffect(()=>{
    getAlbums()

  },[])

  const getAlbums=()=>{
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((result)=>{
      result.json().then((res)=>{
        setAlbums(res)
      })
    })
  }

  const handleChangeAlbum=(updatedAlbums)=>{
    setAlbums(updatedAlbums)
  }

  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/album" element={<Album albums={albums} handleChangeAlbum={handleChangeAlbum} />}/>
      <Route path="/newalbum" element={<Newalbum albums={albums} handleChangeAlbum={handleChangeAlbum} />}/>
      <Route path="/album/:id" element={<UpdateAlbum albums={albums} handleChangeAlbum={handleChangeAlbum} />}/>

     </Routes>

     </BrowserRouter>
    </div>
  );
}

export default App;

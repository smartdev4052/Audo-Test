import { Routes, Route } from "react-router-dom"
import GalleryList from "./galleryList";
import ImageDetail from "./imageDetail";

const Pokemon = ({
    setPictures
}) => {
    return (
        <Routes>
            <Route path="/" element={<GalleryList setPictures={setPictures} />} />
            <Route path="/detail/:id" element={<ImageDetail />} />
        </Routes>
    )
}

export default Pokemon;
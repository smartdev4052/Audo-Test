const Image = ({
    image, 
    width, 
    height
}) => {
    return (
        <div className="image-show">
            <span>${'<'}</span>
            <img src={image.picture} width={width} height={height} />
            <span>${'>'}</span>
            <p>{image.name}</p>
        </div>
    )
}

export default Image;
const ImageList = (props) =>{
    const image = props.i.map((image)=>{
             return <img key={image.id} src={image.webformatURL} alt="image"/>
    })
    return(
        <div>
         {image}
        </div>
    )
}

export default ImageList;
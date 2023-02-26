
// import "./"
// 
export default function Slogan ({imageUrl, text,}) {

    return (
        <div className="slogan--container">
            <div className="text">
                <p>{text}</p>
            </div>
            <div className="image">
                <img src={imageUrl} alt={text} />
            </div>
        </div>
    )
}
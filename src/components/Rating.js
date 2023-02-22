import Tags from "./Tags";
import Title from "./Title";

export default function Rating ({picture, name, rating, tags, title, location}) {
    return (
        // host name
        <>
        <Tags tag={tags}/>
        <Title title={title}/>
        <div className="name">{name}</ div>
        <div className="name">{name}</ div>
        <div className="picture">{picture}</ div>
        <div className="rating">{rating}</ div>
        </>
    )
}

//
export default function Dropdown({ title, paragraph }) {
    // console.log('-- title : ', title)
    return (
        <div className="dropdown">
            <div className="title">
                <p>{title}</p>
            </div>
            <div className="paragraph">
                <p>{paragraph}</p>
            </div>
        </div>
    );
}

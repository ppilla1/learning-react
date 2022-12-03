import '../style/Maincontent.css';

function Maincontent() {

    return (
        <>
            <h2 className="mainctn--header">My awesome website in React</h2>
            <h3 className="mainctn-desc">Reasons I (U+2665) React</h3>
            <ol className="mainctn-list">
                <li>It's composable</li>
                <li>It's declarative</li>
                <li>It's hireable skill</li>
                <li>It's actively maintained by skilled people</li>
            </ol>
        </>
    )
}

export default Maincontent;
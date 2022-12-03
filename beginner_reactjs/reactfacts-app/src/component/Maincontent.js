import '../style/Maincontent.css';

function Maincontent() {

    return (
        <div className="mainctn">
            <h2 className="mainctn__header">My awesome website in React</h2>
            <h3 className="mainctn__desc">Reasons I <span id="heart">{'\u2665'}</span> React</h3>
            <ul className="mainctn__list">
                <li>
                    <input type="checkbox" className="mainctn__accord__in" name="reactlike_reason" id="reason_1"></input>
                    <label for="reason_1" className="mainctn__accord__lbl">Composable</label>
                    <div className="mainctn__dtl">
                        <p>
                            It's composable
                        </p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" className="mainctn__accord__in" name="reactlike_reason" id="reason_2"></input>
                    <label for="reason_2" className="mainctn__accord__lbl">Declarative</label>
                    <div className="mainctn__dtl">
                        <p>
                            It's declarative
                        </p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" className="mainctn__accord__in" name="reactlike_reason" id="reason_3"></input>
                    <label for="reason_3" className="mainctn__accord__lbl">Hireable</label>
                    <div className="mainctn__dtl">
                        <p>
                            I'm more likely to get a job as a developer if I know React
                        </p>
                    </div>
                </li>
                <li>
                    <input type="checkbox" className="mainctn__accord__in" name="reactlike_reason" id="reason_4"></input>
                    <label for="reason_4" className="mainctn__accord__lbl">Maintained</label>
                    <div className="mainctn__dtl">
                        <p>
                            It's actively maintained by skilled people. It's a popular library, so I'll be able to fit in with cool kid's!
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Maincontent;
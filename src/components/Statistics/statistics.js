export default function Statistics({ title = '', lable, percentage }) {
    <section className="statistics">
        <h2 className="title">{ title && "Upload stats"}</h2>

        <ul className="stat-list">
            <li className="item">
                <span className="label">{lable}</span>
                <span className="percentage">{percentage}</span>
            </li>
            <li className="item">
                <span className="label">{lable}</span>
                <span className="percentage">{percentage}</span>
            </li>
            <li className="item">
                <span className="label">{lable}</span>
                <span className="percentage">{percentage}</span>
            </li>
            <li className="item">
                <span className="label">{lable}</span>
                <span className="percentage">{percentage}</span>
            </li>
        </ul>
    </section>
}
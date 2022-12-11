import Stats from '../Stats/stats'
import Title from '../Title/title'

export default function Statistics({ title, stats }) {
    return (
        <section className="statistics">
            {title && 
                <Title
                    title={title}
                />
            }
            <ul className="stat-list">
                {stats.map(el =>(
                    <li className="item" key={el.id}>   
                        <Stats
                            label={el.label}
                            percentage={el.percentage}
                        />
                    </li>
                ))}
            </ul>
        </section>
)}
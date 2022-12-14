import Stats from '../Stats/stats'
import Title from '../Title/title'
import css from './statistics.module.css'

export default function Statistics({ title, stats }) {
    return (
        <section className={css.statistics}>
            {title && 
                <Title
                    title={title}
                />
            }
            <ul className={css.stats__list}>
                {stats.map(el =>(   
                    <Stats
                        key={el.id}
                        label={el.label}
                        percentage={el.percentage}
                    />
                ))}
            </ul>
        </section>
)}

            // <ul className="stat-list">
            //     {stats.map(el =>(
            //         <li className="item" key={el.id}>   
            //             <Stats
            //                 label={el.label}
            //                 percentage={el.percentage}
            //             />
            //         </li>
            //     ))}
            // </ul>
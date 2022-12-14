// import PropTypes from "prop-types"
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
            <ul className={css.statsList}>
                {stats.map(({id, label, percentage}) =>(   
                    <Stats
                        key={id}
                        label={label}
                        percentage={percentage}
                    />
                ))}
            </ul>
        </section>
)}

// Statistics.propTypes = {
//   stats: PropTypes.shape({
//     map: PropTypes.func
//   }),
//   title: PropTypes.any
// }

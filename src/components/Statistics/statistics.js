import PropTypes from "prop-types"
import Stats from '../Stats/Stats'
import Title from '../Title/Title'
import css from './Statistics.module.css'

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


Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

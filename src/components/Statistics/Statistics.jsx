import PropTypes from 'prop-types'; 
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral, 
  bad, 
  total, 
  positivePercentage, 
}) =>
  <section className={css.statistic}>
              <ul className={css.list}>
                  <li className={css.numbers}>good: {good}</li>
                  <li className={css.numbers}>neutral: {neutral}</li>
                  <li className={css.numbers}>bad: {bad}</li>
                  <li className={css.numbers}>total: {total}</li>
                  <li className={css.numbers}>positive feedback: {positivePercentage} % </li>
              </ul>
              </section>

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad']))
    .isRequired,
  statistic: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.func.isRequired, 
};

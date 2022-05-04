import PropTypes from 'prop-types';
import { Container } from 'components/Container';
import { getRandomHexColor } from 'utils/getRandomHexColor';
import style from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      <section className={style.statistics}>
        <h2 className={style.title}>{title}</h2>
        <ul className={style.statList}>
          {stats.map(({ id, label, percentage }) => {
            return (
              <li
                key={id}
                className={style.item}
                style={{ backgroundColor: getRandomHexColor() }}
              >
                <span className={style.label}>{label}</span>
                <span className={style.percentage}>{Number(percentage)}%</span>
              </li>
            );
          })}
        </ul>
      </section>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import './animatedletters.scss'
import PropTypes from 'prop-types';
// import styled, { css } from 'styled-components';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  )
}

// props validation
AnimatedLetters.propTypes = {
  letterClass: PropTypes.string.isRequired,
  strArray: PropTypes.array.isRequired,
  idx: PropTypes.number.isRequired,
}
export default AnimatedLetters

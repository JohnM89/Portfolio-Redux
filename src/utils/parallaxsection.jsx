import PropTypes from 'prop-types';

const ParallaxSection = ({ id, backgroundImage, children }) => (
  <div className="parallax" id={id} style={{ backgroundImage: `url(${backgroundImage})` }}>
    {children}
  </div>
);

ParallaxSection.propTypes = {
  id: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
  children: PropTypes.node 
};

export default ParallaxSection;

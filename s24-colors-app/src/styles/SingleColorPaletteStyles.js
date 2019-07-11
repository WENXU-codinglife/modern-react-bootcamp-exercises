export default {
  SingleColorPalette: {
    height: '100vh'
  },

  SingleColorPaletteColors: {
    height: '90%',
    display: 'flex',
    flexWrap: 'wrap'
  },

  ColorBox: {
    width: '16.6666666666666666666666%',
    height: '50%',
    cursor: 'pointer',
    position: 'relative',
    textTransform: 'uppercase'
  },
  ColorBoxBack: {
    color: 'rgb(51, 51, 51)',
    position: 'absolute',
    width: '5rem',
    height: '2rem',
    margin: '-1rem 0 0 -2.5rem',
    top: '50%',
    left: '50%',
    background: 'rgba(255, 255, 255, 0.25)',
    border: 'none',
    outline: 'none',
    fontFamily: 'inherit',
    fontWeight: 'bold',
    textTransform: 'inherit',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  }
};

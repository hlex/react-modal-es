export default {
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: '30px 5px',
    boxSizing: 'border-box',
    overflow: 'auto'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.7)'
  },
  body: {
    position: 'relative',
    background: '#fff',
    margin: '0 auto',
    width: '100%',
    borderRadius: '5px'
  },
  center: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    padding: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    borderBottom: '1px solid #eee'
  },
  content: {
    padding: '15px'
  },
  buttonArrow: {
    position: 'absolute',
    zIndex: 1,
    right: '10px',
    top: '16px',
    width: '32px',
    height: '22px',
    cursor: 'pointer',
    transition: 'all 0.3s'
  },
  arrow: {
    position: 'absolute',
    left: '15px',
    content: ' ',
    height: '20px',
    width: '2px',
    backgroundColor: '#333'
  }
}

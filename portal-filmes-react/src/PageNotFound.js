
const classes = {
  header: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
  },
  text: {
    color: '#fff',
    fontSize: '2em',
  },
};

function NotFound() {

  return (
    <div className="App">
      <header style={classes.header}>
        <p style={classes.text}>
          Page Not Found - 404
        </p>
      </header>
    </div>
  );
}

export default NotFound;

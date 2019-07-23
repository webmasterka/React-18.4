var movies = [
    {
      id: 1,
      title: 'Harry Potter',
      desc: 'film o czarodzieju',
      img: 'https://eplakaty.pl/img/towary/1/2016_10/15084.jpg'
    },
    {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny',
      img: 'https://ssl-gfx.filmweb.pl/po/68/78/6878/7389475.3.jpg'
    },
    {
        id: 3,
        title: 'Skazani na Shawshank',
        desc: 'The Shawshank Redemption',
        img: 'http://stephenking.pl/wp-content/uploads/2015/07/Skazani-na-Shawshank-1994-plakat.jpg'
    },
    {
        id: 4,
        title: 'Nietykalni',
        desc: 'Intouchables',
        img: 'https://ssl-gfx.filmweb.pl/po/33/90/583390/7752240.3.jpg'
    },
    {
        id: 5,
        title: 'Zielona mila',
        desc: 'The Green Mile',
        img: 'https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.3.jpg'
    },
    {
        id: 6,
        title: 'Ojciec chrzestny',
        desc: 'The Godfather',
        img: 'https://ssl-gfx.filmweb.pl/po/10/89/1089/7196615.3.jpg'
    }   
  ];

  var Image = React.createClass({
    propTypes: {
      img: React.PropTypes.string.isRequired
    },
    render: function() {
      return React.createElement('img', {src: this.props.img});
    }
  });
  
  var Description = React.createClass({
    propTypes: {
      desc: React.PropTypes.string.isRequired
    },
    render: function() {
      return React.createElement('p', {}, this.props.desc);
    }
  });
  
  var Title = React.createClass({
    propTypes: {
      title: React.PropTypes.string.isRequired
    },
    render: function() {
      return React.createElement('h2', {}, this.props.title);
    }
  });
  
  var Movie = React.createClass({
    propTypes: {
      movie: React.PropTypes.object.isRequired
    },
    render: function() {
      return (
        React.createElement('li', {},
          React.createElement(Title,       {title: this.props.movie.title}),
          React.createElement(Description, {desc: this.props.movie.desc}),
          React.createElement(Image,       {img: this.props.movie.img})
        )
      );
    }
  });
  
  var moviesElements = movies.map(function(movie) {
    return React.createElement(Movie, {movie: movie, key: movie.id});
  });
  
  var element = React.createElement( 'div', {},
                React.createElement('h1', {}, 'Lista filmów'),
                React.createElement('ul', {}, moviesElements)
                );
  
  ReactDOM.render(element, document.getElementById('app'));
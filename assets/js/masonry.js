const { render } = ReactDOM;

let brakePoints = [350, 500, 750];
let images = [];
const imgId = [1011, 883, 1074, 823, 64, 65, 839, 314, 256, 316, 92, 643];
for (let i = 0; i < imgId.length; i++) {if (window.CP.shouldStopExecution(0)) break;
  const ih = 200 + Math.floor(Math.random() * 10) * 15;
  images.push("https://unsplash.it/250/" + ih + "?image=" + imgId[i]);
}window.CP.exitedLoop(0);

class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "masonry-container" }, /*#__PURE__*/
      React.createElement("p", null, "ReactJS Responsive/Modular Masonry Grid."), /*#__PURE__*/
      React.createElement(Masonry, { brakePoints: this.props.brakePoints },
      this.props.images.map((image, id) => {
        return /*#__PURE__*/(
          React.createElement(Tile, { src: image }));

      })))));




  }}


const Tile = ({ src }) => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "tile" }, /*#__PURE__*/
    React.createElement("img", { src: src })));


};

class Masonry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { columns: 1 };
    this.onResize = this.onResize.bind(this);
  }
  componentDidMount() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  getColumns(w) {
    return this.props.brakePoints.reduceRight((p, c, i) => {
      return c < w ? p : i;
    }, this.props.brakePoints.length) + 1;
  }

  onResize() {
    const columns = this.getColumns(this.refs.Masonry.offsetWidth);
    if (columns !== this.state.columns) {
      this.setState({ columns: columns });
    }

  }

  mapChildren() {
    let col = [];
    const numC = this.state.columns;
    for (let i = 0; i < numC; i++) {if (window.CP.shouldStopExecution(1)) break;
      col.push([]);
    }window.CP.exitedLoop(1);
    return this.props.children.reduce((p, c, i) => {
      p[i % numC].push(c);
      return p;
    }, col);
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "masonry", ref: "Masonry" },
      this.mapChildren().map((col, ci) => {
        return /*#__PURE__*/(
          React.createElement("div", { className: "column", key: ci },
          col.map((child, i) => {
            return /*#__PURE__*/React.createElement("div", { key: i }, child);
          })));


      })));


  }}



render( /*#__PURE__*/React.createElement(App, { images: images, brakePoints: brakePoints }), app);
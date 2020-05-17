'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VizTog = function (_React$Component) {
    _inherits(VizTog, _React$Component);

    function VizTog(props) {
        _classCallCheck(this, VizTog);

        var _this = _possibleConstructorReturn(this, (VizTog.__proto__ || Object.getPrototypeOf(VizTog)).call(this, props));

        _this.togViz = _this.togViz.bind(_this);
        _this.state = {
            viz: false
        };
        return _this;
    }

    _createClass(VizTog, [{
        key: 'togViz',
        value: function togViz() {
            this.setState(function (prevState) {
                return {
                    viz: !prevState.viz
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.togViz },
                    this.state.viz ? 'Hide' : 'Show',
                    ' deets.'
                ),
                this.state.viz && React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'p',
                        null,
                        'Hey, these are some details you can now see!'
                    )
                )
            );
        }
    }]);

    return VizTog;
}(React.Component);

ReactDOM.render(React.createElement(VizTog, null), document.getElementById('app'));

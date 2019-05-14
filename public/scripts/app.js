"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var IndecisionApp =
/*#__PURE__*/
function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    var _this;

    _classCallCheck(this, IndecisionApp);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IndecisionApp).call(this, props));
    _this.state = {
      options: []
    };
    _this.handleRemoveAll = _this.handleRemoveAll.bind(_assertThisInitialized(_this));
    _this.selectRandom = _this.selectRandom.bind(_assertThisInitialized(_this));
    _this.addNewOption = _this.addNewOption.bind(_assertThisInitialized(_this));
    _this.removeOption = _this.removeOption.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      console.log('Remove ALl');
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: "selectRandom",
    value: function selectRandom() {
      console.log('Selecting Random');
      var randNumber = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randNumber]);
    }
  }, {
    key: "addNewOption",
    value: function addNewOption(new_option) {
      if (!new_option) {
        return 'Add valid Task!';
      } else if (this.state.options.indexOf(new_option) > -1) {
        return 'Task already exists!';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(new_option)
        };
      });
    }
  }, {
    key: "removeOption",
    value: function removeOption(optionToRemove) {
      console.log('removeOption', optionToRemove);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return option !== optionToRemove;
          })
        };
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      try {
        var json = localStorage.getItem('options');
        var options = JSON.parse(json);
        if (options) this.setState(function () {
          return {
            options: options
          };
        });
      } catch (_unused) {// Do nothing at all !
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('Updating something');

      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: "comonentWillUnmount",
    value: function comonentWillUnmount() {
      console.log('Destroying Component');
    }
  }, {
    key: "render",
    value: function render() {
      var subtitle = 'Put your life in hand of computer';
      return React.createElement("div", null, React.createElement(Header, {
        subtitle: subtitle
      }), React.createElement(Action, {
        options: this.state.options,
        handleRemoveAll: this.handleRemoveAll,
        selectRandom: this.selectRandom
      }), React.createElement(Options, {
        options: this.state.options,
        removeOption: this.removeOption
      }), React.createElement(AddOption, {
        addNewOption: this.addNewOption
      }));
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement("div", null, React.createElement("h1", null, props.title), React.createElement("h3", null, props.subtitle));
};

Header.defaultProps = {
  title: 'Indecision App'
};

var Action = function Action(props) {
  return React.createElement("div", null, React.createElement("button", {
    disabled: props.options.length <= 0,
    onClick: props.selectRandom
  }, " What should I do ?"), React.createElement("button", {
    disabled: props.options.length <= 0,
    onClick: props.handleRemoveAll
  }, " Remove All"));
};

var Options = function Options(props) {
  return React.createElement("div", null, props.options.length === 0 && React.createElement("p", null, "Add an option to get started!"), props.options.map(function (option) {
    return React.createElement(Option, {
      key: option,
      optionText: option,
      removeOption: props.removeOption
    });
  }));
};

var Option = function Option(props) {
  return React.createElement("div", null, props.optionText, React.createElement("button", {
    onClick: function onClick(e) {
      props.removeOption(props.optionText);
    }
  }, "Remove"));
};

var AddOption =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    var _this2;

    _classCallCheck(this, AddOption);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(AddOption).call(this, props));
    _this2.state = {
      error: undefined
    };
    _this2.handleAddOption = _this2.handleAddOption.bind(_assertThisInitialized(_this2));
    _this2.addNewOption = _this2.props.addNewOption.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(AddOption, [{
    key: "handleAddOption",
    value: function handleAddOption(e) {
      e.preventDefault();
      var new_option = e.target.elements.new_option.value.trim();
      console.log('Adding new Option :', new_option);
      var error = this.addNewOption(new_option);
      this.setState(function () {
        return {
          error: error
        };
      });
      if (!error) e.target.elements.new_option.value = '';
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", null, React.createElement("form", {
        onSubmit: this.handleAddOption
      }, React.createElement("input", {
        type: "text",
        name: "new_option"
      }), React.createElement("button", null, "Add Option")), this.state.error && React.createElement("p", null, this.state.error));
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));

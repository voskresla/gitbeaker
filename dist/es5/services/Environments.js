"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _getPrototypeOf = _interopRequireDefault(require("@babel/runtime/core-js/object/get-prototype-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _infrastructure = require("../infrastructure");

var Environments =
/*#__PURE__*/
function (_BaseService) {
  (0, _inherits2.default)(Environments, _BaseService);

  function Environments() {
    (0, _classCallCheck2.default)(this, Environments);
    return (0, _possibleConstructorReturn2.default)(this, (Environments.__proto__ || (0, _getPrototypeOf.default)(Environments)).apply(this, arguments));
  }

  (0, _createClass2.default)(Environments, [{
    key: "all",
    value: function all(projectId, options) {
      var pId = encodeURIComponent(projectId);
      return _infrastructure.RequestHelper.get(this, "projects/".concat(pId, "/environments"), options);
    }
  }, {
    key: "create",
    value: function create(projectId, options) {
      var pId = encodeURIComponent(projectId);
      return _infrastructure.RequestHelper.put(this, "projects/".concat(pId, "/environments"), options);
    }
  }, {
    key: "edit",
    value: function edit(projectId, environmentId, options) {
      var _map = [projectId, environmentId].map(encodeURIComponent),
          _map2 = (0, _slicedToArray2.default)(_map, 2),
          pId = _map2[0],
          eId = _map2[1];

      return _infrastructure.RequestHelper.put(this, "projects/".concat(pId, "/environments/").concat(eId), options);
    }
  }, {
    key: "remove",
    value: function remove(projectId, environmentId) {
      var _map3 = [projectId, environmentId].map(encodeURIComponent),
          _map4 = (0, _slicedToArray2.default)(_map3, 2),
          pId = _map4[0],
          eId = _map4[1];

      return _infrastructure.RequestHelper.delete(this, "projects/".concat(pId, "/environments/").concat(eId));
    }
  }, {
    key: "stop",
    value: function stop(projectId, environmentId) {
      var _map5 = [projectId, environmentId].map(encodeURIComponent),
          _map6 = (0, _slicedToArray2.default)(_map5, 2),
          pId = _map6[0],
          eId = _map6[1];

      return _infrastructure.RequestHelper.post(this, "projects/".concat(pId, "/environments/").concat(eId, "/stop"));
    }
  }]);
  return Environments;
}(_infrastructure.BaseService);

var _default = Environments;
exports.default = _default;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _class, _temp;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoapMessage = (_temp = _class = function CoapMessage() {
  (0, _classCallCheck3.default)(this, CoapMessage);
}, _class.Code = {
  EMPTY: 0.0,
  GET: 0.01,
  POST: 0.02,
  PUT: 0.03,
  DELETE: 0.04,
  OK: 2.0,
  CREATED: 2.01,
  DELETED: 2.02,
  NOT_MODIFIED: 2.03,
  CHANGED: 2.04,
  CONTENT: 2.05,
  BAD_REQUEST: 4,
  UNAUTHORIZED: 4.01,
  BAD_OPTION: 4.02,
  FORBIDDEN: 4.03,
  NOT_FOUND: 4.04,
  METHOD_NOT_ALLOWED: 4.05,
  NOT_ACCEPTABLE: 4.06,
  REQUEST_ENTITY_INCOMPLETE: 136,
  PRECONDITION_FAILED: 4.12,
  REQUEST_ENTITY_TOO_LARGE: 4.13,
  UNSUPPORTED_CONTENT_FORMAT: 4.15,
  INTERNAL_SERVER_ERROR: 5,
  NOT_IMPLEMENTED: 5.01,
  BAD_GATEWAY: 5.02,
  SERVICE_UNAVAILABLE: 5.03,
  GATEWAY_TIMEOUT: 5.04,
  PROXYING_NOT_SUPPORTED: 5.05
}, _class.Option = {
  ACCEPT: 'Accept',
  BLOCK1: 'Block1',
  BLOCK2: 'Block2',
  CONTENT_FORMAT: 'Content-Format',
  ETAG: 'ETag',
  If_MATCH: 'If-Match',
  IF_NONE_MATCH: 'If-None-Match',
  LOCATION_PATH: 'Location-Path',
  LOCATION_QUERY: 'Location-Query',
  MAX_AGE: 'Max-Age',
  OBSERVE: 'Observe',
  PROXY_SCHEME: 'Proxy-Scheme',
  PROXY_URI: 'Proxy-Uri',
  SIZE1: 'Size1',
  URI_HOST: 'Uri-Host',
  URI_PATH: 'Uri-Path',
  URI_PORT: 'Uri-Port',
  URI_QUERY: 'Uri-Query'
}, _class.Type = {
  CON: 0,
  NON: 1,
  ACK: 2,
  RST: 3,
  ERROR: 4
}, _temp);
exports.default = CoapMessage;
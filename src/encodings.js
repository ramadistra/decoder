const Base64 = {
  name: "base64",
  encode: value => Buffer.from(value).toString('base64'),
  decode: value => Buffer.from(value, 'base64').toString('ascii')
}

const URI = {
  name: "uri",
  encode: encodeURIComponent,
  decode: decodeURIComponent
}

const Encodings = [Base64, URI]

export default Encodings;
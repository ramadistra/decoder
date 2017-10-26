## Decoder
Simple decoder/encoder built using react.

Check out the live version: [here](https://ramadistra.github.io/decode/)

## Extending Decoder
It's pretty simple to extend. Go to `encodings.js` and add a new encoding format to the `Encodings` array
with the following format:
```javascript
{
  name: "Name of encoding",
  encode: string => string,
  decode: string => string
}
```

## TODO
Handle encoding errors.
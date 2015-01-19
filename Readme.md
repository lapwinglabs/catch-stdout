
# catch-stdout

  Catch stdout (useful for testing)

## Installation

```
npm install catch-stdout
```

## Example

```js
it('should log when true', function(done) {
  var roo = Roo(__dirname)
    .logger()
    .get('/user', function *() { this.body = 'user'; });

  var restore = stdout();

  request(roo.listen())
    .get('/user')
    .expect(200)
    .end(function(err, res) {
      if (err) return done(err);
      assert('user' == res.text);
      var value = restore();
      assert(~value.indexOf('GET'))
    });
})
```

## License

(The MIT License)

Copyright (c) 2015 Matthew Mueller &lt;matt@lapwinglabs.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

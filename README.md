#hype^ rulz.

## Synopsis

hype^ is designed to 'hype' up your website.
In its purist form, it is simply a free hit counter that tracks page loads and 'hypes' or clicks/touches on the hype element.
I've provided a simple jQuery widget in index.html that you can add to your site to 'hype' it up.
The widget is pre-configured to use my dedicated hype^ server, but you can also run your own hype_server.js
Run it yourself if you know what you're doing.

## Code Example

`http://hype-rulz.herokuapp.com/?callback=jQuery111008274388874415308_1396317114129&set=aHR0cDovL3BpcGUuYXV0b2Rlc2suY29tL2h5cGUv&_=1396317114142`

## Motivation

I created hype^ so that your site wouldn't be so.. hype-less.  People want hype, so I help them.
Hype is a stateful micro-liking service that you can use to spruce up your site and track events.
Users shouldn't have to be on any social networks or even log in to 'like' something.  Use hype^ and see the results in real-time.  Use hype on any click-able element of your site too.
If they like your site, or even just a part of your site, they can tell you about it without becoming some sort of food item for the coporate-a-saurus.
The example implementation encourages you to not only like the page, but 'hype' it up with as many clicks as your fingers can stand.
No tracking, no eye of sauron, no bad mojo.  The only thing we store is your site url and site + element id.  Use hype as many times as you want, and let people click the sh1t out of it.
We can store 2^64 clicks per element, or just about 10 billion hypes.

## Installation
`git clone https://github.com/adjavaherian/hype.git`

###hype UI extension
- you'll need jquery and jquery-ui
- check out index.html  it helps.
- if you have no idea what this does, just try copying everything in that script tag and style tag
- maybe a nerdy sibling or cousin can help?
- I like open-sans. use it by copying the style tags too

###hypeServer
- `git clone https://github.com/adjavaherian/hype.git`
- install node.js
- install npm
- `npm install`
- `node hypeServer.js`


## API Reference

- api is pending.
- basically a jsonp request with a 'set' parameter should work.
- caveat, your url needs to be base64 encoded.
- eg. http://hype.heroku.com/?set=b64encoded-url.

## Tests

Please fork and help us write tests

## Contributors

\#adjavaherian

## License

The MIT License (MIT)

Copyright (c) 2014 #adjavaherian

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

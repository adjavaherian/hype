#hype^ rulz.

## Synopsis

Hype^ is the JavaScript equivalent of the Honey Badger. It's designed to 'hype' up your lame website and not give a f$ck when you try to do bad things to it.
In its purist form, it is simply a free site hit counter service.  We've provided a simple jQuery widget that you can add to your lame site to 'hype' it up.  The widget is pre-configured to use our dedicated hype^ servers, but
you can also download and use hypeServer.js to run that $hit yourself if you think you know what you're doing.

## Code Example

http://hype.heroku.net/?callback=jQuery111008274388874415308_1396317114129&set=aHR0cDovL3BpcGUuYXV0b2Rlc2suY29tL2h5cGUv&_=1396317114142

## Motivation

We created hype^ so that your site wouldn't be so lame.  People needed hype, so we helped them.
Hype is a state-ful micro-liking service that you can use to spruce up your $hitbox lame a$$ site.
Users shouldn't have to be on any social networks or even log in to 'like' something.  Use hype^.
If they like your page, or even just a part of your page, they can tell you about it without becoming some sort of food item for mass-market-a-saurus.
In fact, the example implementation encourages you to not only like the page, but 'hype' it up with as many clicks as your lame hands can stand.
No tracking, no eye of sauron, no bad mojo.  The only thing we store is your lame site url and lame element id.  Use hype as many times as you want, and let people click the sh1t out of it.
We can store 2^64 clicks per element.  Good luck with that.

## Installation
git clone https://github.com/adjavaherian/hype.git

###hype UI extension
check out index.html  it helps.
if you have no idea what this does, just try copying everything in that script tag and style tag
maybe a nerdy sibling or cousing can help?

you'll need jquery and jquery-ui
we like open-sans.  use it by copying the style tags too

###hypeServer
git clone https://github.com/adjavaherian/hype.git
install node.js
install npm
npm install
./node hypeServer.js


## API Reference

api is pending.  basically a jsonp request with a 'set' parameter should work.
caveat, your url needs to be base64 encoded.

?set=b64encoded-url.

## Tests

Please fork and help us write tests

## Contributors

#adjavaherian, n3d4 and co.

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

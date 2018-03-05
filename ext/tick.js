// References:
// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// https://gist.github.com/1579671
// http://updates.html5rocks.com/2012/05/requestAnimationFrame-API-now-with-sub-millisecond-precision
// https://gist.github.com/timhall/4078614
// https://github.com/Financial-Times/polyfill-service/tree/master/polyfills/requestAnimationFrame

// Expected to be used with Browserfiy
// Browserify automatically detects the use of `global` and passes the
// correct reference of `global`, `self`, and finally `window`

/**

    TODO 这里需要优化

**/
const ONE_FRAME_TIME = 16;

// Date.now
if (!(Date.now && Date.prototype.getTime))
{
    Date.now = function now()
    {
        return new Date().getTime();
    };
}

// performance.now

const startTime = Date.now();


let performance = {};


performance.now = () => Date.now() - startTime;


// requestAnimationFrame
let lastTime = Date.now();


let requestAnimationFrame = (callback) =>
{
    if (typeof callback !== 'function')
    {
        throw new TypeError(`${callback}is not a function`);
    }

    const currentTime = Date.now();
    let delay = ONE_FRAME_TIME + lastTime - currentTime;

    if (delay < 0)
    {
        delay = 0;
    }

    lastTime = currentTime;

    return setTimeout(() =>
    {
        lastTime = Date.now();
        callback(performance.now());
    }, delay);
};



let cancelAnimationFrame = (id) => clearTimeout(id);

export default {
    requestAnimationFrame,
    cancelAnimationFrame,
    performance
}

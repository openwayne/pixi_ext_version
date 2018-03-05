// export core
export * from './core';

// export libs
import deprecation from './deprecation';
import * as accessibility from './accessibility';
import * as extract from './extract';
import * as extras from './extras';
import * as filters from './filters';
import * as interaction from './interaction';
import * as loaders from './loaders';
import * as mesh from './mesh';
import * as particles from './particles';
import * as prepare from './prepare';

// handle mixins now, after all code has been added, including deprecation
import { utils } from './core';
utils.mixins.performMixins();

/**
 * Alias for {@link PIXI.loaders.shared}.
 * @name loader
 * @memberof PIXI
 * @type {PIXI.loader.Loader}
 */
const loader = loaders.shared || null;

export {
    //accessibility,
    extract,
    extras,
    filters,
    interaction,
    loaders,
    mesh,
    particles,
    prepare,
    loader,
};

// Apply the deprecations
if (typeof deprecation === 'function')
{
    deprecation(exports);
}

// Always export PixiJS globally.
window.PIXI = exports
export default PIXI = exports; // eslint-disable-line

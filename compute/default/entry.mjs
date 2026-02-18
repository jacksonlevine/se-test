import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DZ5m0pwI.mjs';
import { manifest } from './manifest_2bZSgTZw.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/auth/professionallogin.astro.mjs');
const _page2 = () => import('./pages/api/auth/token.astro.mjs');
const _page3 = () => import('./pages/auth/callback.astro.mjs');
const _page4 = () => import('./pages/quality/coa.astro.mjs');
const _page5 = () => import('./pages/_lang_/quality/coa.astro.mjs');
const _page6 = () => import('./pages/_lang_.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/auth/professionallogin.ts", _page1],
    ["src/pages/api/auth/token.ts", _page2],
    ["src/pages/auth/callback.astro", _page3],
    ["src/pages/quality/coa.astro", _page4],
    ["src/pages/[lang]/quality/coa.astro", _page5],
    ["src/pages/[lang]/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "client": "file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/.amplify-hosting/static/",
    "server": "file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/.amplify-hosting/compute/default/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};

const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { pageMap };

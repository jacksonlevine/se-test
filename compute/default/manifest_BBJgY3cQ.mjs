import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import 'piccolore';
import { v as decodeKey } from './chunks/astro/server_BZ_kHWK0.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_ru_12DQ3.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/","cacheDir":"file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/node_modules/.astro/","outDir":"file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/dist/","srcDir":"file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/","publicDir":"file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/public/","buildClientDir":"file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/.amplify-hosting/static/","buildServerDir":"file:///home/jackson/Documents/GitHub/ecommerce/sites/serophan/.amplify-hosting/compute/default/","adapterName":"astro-aws-amplify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"auth/callback/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/auth/callback","isIndex":false,"type":"page","pattern":"^\\/auth\\/callback\\/?$","segments":[[{"content":"auth","dynamic":false,"spread":false}],[{"content":"callback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/auth/callback.astro","pathname":"/auth/callback","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"quality/coa/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/quality/coa","isIndex":false,"type":"page","pattern":"^\\/quality\\/coa\\/?$","segments":[[{"content":"quality","dynamic":false,"spread":false}],[{"content":"coa","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quality/coa.astro","pathname":"/quality/coa","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.D6sK1WDe.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.D6sK1WDe.js"}],"styles":[],"routeData":{"route":"/api/auth/professionallogin","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/professionallogin\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"professionallogin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/professionallogin.ts","pathname":"/api/auth/professionallogin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.D6sK1WDe.js"}],"styles":[],"routeData":{"route":"/api/auth/token","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/auth\\/token\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"token","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/auth/token.ts","pathname":"/api/auth/token","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://main.d2uzqdifrcizo5.amplifyapp.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/pages/[lang]/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/pages/[lang]/quality/coa.astro",{"propagation":"in-tree","containsHead":true}],["/home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/pages/quality/coa.astro",{"propagation":"in-tree","containsHead":true}],["/home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/components/pages/HomePage.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[lang]/quality/coa@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/quality/coa@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/auth/professionallogin@_@ts":"pages/api/auth/professionallogin.astro.mjs","\u0000@astro-page:src/pages/api/auth/token@_@ts":"pages/api/auth/token.astro.mjs","\u0000@astro-page:src/pages/auth/callback@_@astro":"pages/auth/callback.astro.mjs","\u0000@astro-page:src/pages/quality/coa@_@astro":"pages/quality/coa.astro.mjs","\u0000@astro-page:src/pages/[lang]/quality/coa@_@astro":"pages/_lang_/quality/coa.astro.mjs","\u0000@astro-page:src/pages/[lang]/index@_@astro":"pages/_lang_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BBJgY3cQ.mjs","/home/jackson/Documents/GitHub/ecommerce/sites/serophan/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Caap7cMT.mjs","@/src/components/SerotoninGapQuiz":"_astro/SerotoninGapQuiz.BdredeUe.js","@tppc/common/components/PromoBanner.jsx":"_astro/PromoBanner.AOxVmGwc.js","@tppc/common/components/Navbar.jsx":"_astro/Navbar.DSuPsKB5.js","@tppc/common/components/Footer.jsx":"_astro/Footer.H-WIdy76.js","@/src/components/SerophanProductDetails":"_astro/SerophanProductDetails.BdJKHR50.js","@tppc/common/components/BatchNumberOrQRScanner.jsx":"_astro/BatchNumberOrQRScanner.Dv1jiGVJ.js","@tppc/common/components/modals/OfferModal.jsx":"_astro/OfferModal.BHtbGHnB.js","@tppc/common/components/CookieConsentBanner.jsx":"_astro/CookieConsentBanner.lc27cWsR.js","@astrojs/react/client.js":"_astro/client.CVUgDmui.js","/home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/pages/auth/callback.astro?astro&type=script&index=0&lang.ts":"_astro/callback.astro_astro_type_script_index_0_lang.Db9vR4iC.js","/home/jackson/Documents/GitHub/ecommerce/sites/serophan/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.CBOeYAl-.js","astro:scripts/page.js":"_astro/page.D6sK1WDe.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/jackson/Documents/GitHub/ecommerce/sites/serophan/src/pages/auth/callback.astro?astro&type=script&index=0&lang.ts","(async()=>{const o=new URLSearchParams(window.location.search),r=o.get(\"code\"),s=o.get(\"state\");if(!r||!s)return;const n=sessionStorage.getItem(\"oauth_state\");if(!n||n!==s)return;sessionStorage.removeItem(\"oauth_state\");const a=sessionStorage.getItem(\"pkce_verifier\");if(!a)return;const c=`${window.location.origin}/auth/callback`,t=await fetch(\"/api/auth/token\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({code:r,codeVerifier:a,redirectUri:c})});if(!t.ok){console.log(await t.json());return}const e=await t.json();console.log(e),localStorage.setItem(\"customer_access_token\",e.access_token),e.refresh_token&&localStorage.setItem(\"customer_refresh_token\",e.refresh_token),sessionStorage.removeItem(\"pkce_verifier\");const i=sessionStorage.getItem(\"oauth_return_to\")||\"/\";sessionStorage.removeItem(\"oauth_return_to\"),window.location.replace(i)})();"]],"assets":["/_astro/logo.BKAGfiGy.png","/_astro/offermodal.DNq0FMQ4.png","/_astro/index.DiE0qHku.css","/favicon.svg","/llms.txt","/_astro/BatchNumberOrQRScanner.Dv1jiGVJ.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.CBOeYAl-.js","/_astro/CookieConsentBanner.lc27cWsR.js","/_astro/Footer.H-WIdy76.js","/_astro/Navbar.DSuPsKB5.js","/_astro/OfferModal.BHtbGHnB.js","/_astro/PromoBanner.AOxVmGwc.js","/_astro/SerophanProductDetails.BdJKHR50.js","/_astro/SerotoninGapQuiz.BdredeUe.js","/_astro/cartStore.BcV765z4.js","/_astro/client.CVUgDmui.js","/_astro/customerAuth.DHwgnwwP.js","/_astro/index.B-gUmfTx.js","/_astro/index.B9Lqsz3r.js","/_astro/index.BO1yvSFp.js","/_astro/index.BfFOJjEX.js","/_astro/index.Br6pAFfs.js","/_astro/index.Bv6cXHiw.js","/_astro/index.dce0afbe.BitIpo6n.js","/_astro/index.srgjoacm.js","/_astro/index.voUD-miS.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/page.D6sK1WDe.js","/_astro/themeObjects.CpNzzJD1.js","/_astro/transition.DpjJzyN3.js","/_astro/uiOverlayStore.DG-zDXnJ.js","/_astro/use-active-press.403lRAa0.js","/fonts/inter-v20-latin-300.ttf","/fonts/inter-v20-latin-300.woff2","/fonts/inter-v20-latin-500.ttf","/fonts/inter-v20-latin-500.woff2","/fonts/inter-v20-latin-600.ttf","/fonts/inter-v20-latin-600.woff2","/fonts/inter-v20-latin-700.ttf","/fonts/inter-v20-latin-700.woff2","/fonts/inter-v20-latin-italic.ttf","/fonts/inter-v20-latin-italic.woff2","/fonts/inter-v20-latin-regular.ttf","/fonts/inter-v20-latin-regular.woff2","/fonts/playfair-display-v40-latin-600.ttf","/fonts/playfair-display-v40-latin-600.woff2","/fonts/playfair-display-v40-latin-700.ttf","/fonts/playfair-display-v40-latin-700.woff2","/fonts/playfair-display-v40-latin-700italic.ttf","/fonts/playfair-display-v40-latin-700italic.woff2","/fonts/playfair-display-v40-latin-regular.ttf","/fonts/playfair-display-v40-latin-regular.woff2","/images/17025.png","/images/badge.png","/images/dot.png","/images/logo.png","/images/ph32.png","/images/phsquare.png","/images/supplementmock.jpg","/images/vd3truth.jpg","/models/serophan200.glb","/models/serophan400.glb","/images/badges/1.png","/images/badges/2.png","/images/badges/3.png","/images/badges/4.png","/images/badges/5.png","/images/badges/6.png","/_astro/page.D6sK1WDe.js","/auth/callback/index.html","/quality/coa/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"kmDxZk0+NuOuP0EtjDH5bwQLfqMl9i4o8UBDBXb8/9M="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };

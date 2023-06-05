var U = Object.defineProperty;
var $ = (n, e, t) => e in n ? U(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var s = (n, e, t) => ($(n, typeof e != "symbol" ? e + "" : e, t), t);
import { Buffer as B } from "buffer";
import { proxy as L, subscribe as G } from "valtio/vanilla";
import z from "@walletconnect/universal-provider";
import { Web3Modal as V } from "@web3modal/standalone";
function H() {
  typeof window < "u" && (window.Buffer || (window.Buffer = B), window.global || (window.global = window), window.process || (window.process = { env: {} }));
}
const p = L({
  connectors: [],
  chosenChain: {
    chainType: "",
    name: "",
    networkId: "",
    networkMagic: "",
    endpoint: ""
  },
  walletConnectProjectId: "",
  requestId: 0,
  connectorName: ""
});
function P(n, e) {
  p[n] = e;
}
function D(n) {
  return p[n];
}
function m(n) {
  P("address", n);
}
function x(n) {
  const e = p.connectors.map((t) => t.getConnectorName());
  if (e.some((t) => t === n))
    P("connectorName", n);
  else
    throw new Error(`No connector with name ${n} exists,
     available options are: ${e.join(",")} `);
}
function q(n) {
  const { connectors: e } = p, t = e.find(
    (o) => o.getConnectorName() === n
  );
  if (!t)
    throw new Error("Invalid connector id configured");
  return t;
}
function J() {
  const n = p.connectorName;
  return q(n);
}
function le(n) {
  return q(n).isAvailable();
}
function X(n) {
  P("chosenChain", n);
}
function ue(n) {
  return G(p, (t) => {
    t.find((r) => r[1].includes("address")) && n(p.address);
  });
}
function O() {
  return D("chosenChain");
}
function F(n) {
  P("walletConnectProjectId", n);
}
function I() {
  return D("walletConnectProjectId");
}
function K(n) {
  Object.entries(n).forEach(([e, t]) => {
    P(e, t);
  }), x(n.connectorName);
}
function we(n, e) {
  e && F(e), K(n());
}
function he(n) {
  x(n);
}
async function d(n) {
  const e = J();
  return e.isAvailable() ? n(e) : null;
}
async function pe() {
  return d(async (n) => n.enable());
}
async function ge() {
  return d(async (n) => Promise.resolve(n.getConnectorAPI()));
}
async function fe() {
  return d(async (n) => {
    const e = n.getConnectorAPI();
    if (!e)
      throw new Error("API for connector is not enabled.");
    return e.getChangeAddress();
  });
}
async function ve() {
  return d(async (n) => {
    const e = n.getConnectorAPI();
    if (!e)
      throw new Error("API for connector is not enabled.");
    return e.getRewardAddress();
  });
}
async function me() {
  return d(async (n) => {
    const e = n.getConnectorAPI();
    if (!e)
      throw new Error("API for connector is not enabled.");
    return e.getRewardAddresses();
  });
}
async function Pe() {
  return d(async (n) => {
    const e = n.getConnectorAPI();
    if (!e)
      throw new Error("API for connector is not enabled.");
    return e.getBalance();
  });
}
async function be() {
  return d(async (n) => {
    const e = n.getConnectorAPI();
    if (!e)
      throw new Error("API for connector is not enabled.");
    return e.getCollateral();
  });
}
async function Ae() {
  return d(async (n) => {
    const e = n.getConnectorAPI();
    if (!e)
      throw new Error("API for connector is not enabled.");
    return e.getUsedAddresses();
  });
}
async function Ie() {
  return d(async (n) => {
    const e = n.getConnectorAPI();
    if (!e)
      throw new Error("API for connector is not enabled.");
    return e.getUnusedAddresses();
  });
}
function Ce(n) {
  X(n);
}
async function ye() {
  return d(async (n) => {
    const e = n.getConnectorAPI();
    if (!e)
      throw new Error("API for connector is not enabled.");
    return e.getNetworkId();
  });
}
async function Ee() {
  return d(async (n) => n.disconnect());
}
async function Ne(n, e) {
  return d(async (t) => {
    const o = t.getConnectorAPI();
    if (!o)
      throw new Error("API for connector is not enabled.");
    return o.signTx(n, e);
  });
}
async function We(n) {
  return d(async (e) => {
    const t = e.getConnectorAPI();
    if (!t)
      throw new Error("API for connector is not enabled.");
    return t.submitTx(n);
  });
}
async function Te(n, e) {
  return d(async (t) => {
    const o = t.getConnectorAPI();
    if (!o)
      throw new Error("API for connector is not enabled.");
    return o.signData(n, e);
  });
}
const Q = {
  enable: "enable",
  isEnabled: "isEnabled"
}, Y = {
  getCollateral: "getCollateral"
}, Z = {
  openDebug: "openDebug"
}, b = {
  MAINNET: 764824073,
  PREVIEW: 2,
  PREPROD: 1
}, ee = {
  MAINNET: 764824073,
  PREVIEW: 2,
  PREPROD: 1
}, _e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PER_WALLET_NAMESPACE: Q,
  SUPPORTED_EXPERIMENTAL_MESSAGES: Y,
  DEBUG_MESSAGES: Z,
  ProtocolMagic: b,
  NetworkMagic: ee
}, Symbol.toStringTag, { value: "Module" })), C = "cip34", _ = {
  chainType: C,
  name: "mainnet",
  networkId: "1",
  networkMagic: `${b.MAINNET}`,
  endpoint: ""
}, k = {
  chainType: C,
  name: "testnet",
  networkId: "0",
  networkMagic: `${b.PREPROD}`,
  endpoint: ""
}, R = {
  chainType: C,
  name: "preview",
  networkId: "0",
  networkMagic: `${b.PREVIEW}`,
  endpoint: ""
};
function y(n) {
  return `${n.chainType}:${n.networkId}-${n.networkMagic}`;
}
function E(n) {
  return `https://rpc.walletconnect.com/v1?chainId=${y(n)}&projectId=${I()}`;
}
function ke() {
  return { ..._, endpoint: E(_) };
}
function Re() {
  return { ...k, endpoint: E(k) };
}
function Me() {
  return { ...R, endpoint: E(R) };
}
function u() {
  const n = O();
  return y(n);
}
class v {
  constructor(e) {
    s(this, "observers", []);
    s(this, "value");
    this.value = e;
  }
  subscribe(e) {
    this.observers.push(e);
  }
  unsubscribe(e) {
    this.observers = this.observers.filter((t) => t !== e);
  }
  get() {
    return this.value;
  }
  set(e) {
    if (this.value !== e) {
      this.value = e;
      for (const t of this.observers)
        t(this.value);
    }
  }
}
class ne extends Error {
  constructor(e) {
    const t = `It seems that the API of ${te(e)} is not cip30 compatible.`;
    super(t), this.name = "WalletNotCip30CompatibleError";
  }
}
function te(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
class N {
  constructor(e) {
    s(this, "injectedWalletPath");
    s(this, "enabledWallet");
    s(this, "connectedWalletAPI");
    s(this, "enabledObserver", new v(!1));
    s(this, "isConnectingObserver", new v(!1));
    s(this, "enabledWalletObserver", new v(null));
    s(this, "stakeAddressObserver", new v(null));
    s(this, "installedWalletExtensionsObserver", new v([]));
    if (!e)
      throw new Error("Invalid path provided, should match window..*");
    if (e.split(".")[0] !== "window")
      throw new Error("Injected wallet path must start at window");
    this.injectedWalletPath = e;
  }
  isAvailable() {
    if (typeof window > "u" || typeof window.cardano > "u")
      return !1;
    const e = this.injectedWalletPath.split(".").pop();
    return !(typeof window.cardano[e] > "u");
  }
  static connectorName(e) {
    return `injected-${e}`;
  }
  getConnectorName() {
    return N.connectorName(this.injectedWalletPath);
  }
  async disconnect() {
    return this.connectedWalletAPI = void 0, this.enabledWallet = void 0, this.enabledObserver.set(!1), m(""), Promise.resolve();
  }
  async enable() {
    const e = this.injectedWalletPath.split(".").pop();
    this.enabledWallet = e;
    const t = window.cardano;
    if (typeof t > "u")
      throw new Error("Cardano object not found on window");
    const o = t[e];
    if (o != null && typeof o.isEnabled == "function") {
      const r = await o.enable();
      if (typeof r.getRewardAddresses == "function") {
        const i = await r.getRewardAddresses();
        if (i && i.length > 0)
          return this.connectedWalletAPI = r, m(i[0]), r;
      } else
        throw new ne(e);
      return this.connectedWalletAPI = r, r;
    } else
      throw new Error("Wallet does not support CIP-30");
  }
  async isEnabled() {
    var e, t;
    return (t = this.enabledWallet != null && window.cardano[this.enabledWallet] != null && await ((e = window.cardano[this.enabledWallet]) == null ? void 0 : e.isEnabled())) != null ? t : !1;
  }
  getConnectorAPI() {
    return this.connectedWalletAPI;
  }
  async signData(e, t) {
    if (!await this.isConnected())
      throw new Error("Wallet is not connected");
    return this.connectedWalletAPI.signData(e, t);
  }
  async signTx(e, t) {
    if (!await this.isConnected())
      throw new Error("Wallet is not connected");
    return this.connectedWalletAPI.signTx(e, t);
  }
  async isConnected(e = 1e4) {
    return new Promise((t, o) => {
      const r = setTimeout(() => {
        clearTimeout(r), t(!1);
      }, e);
      this.actualConnectionCheck().then((i) => {
        clearTimeout(r), t(i);
      }).catch(() => {
        clearTimeout(r), t(!1);
      });
    });
  }
  async actualConnectionCheck() {
    var e, t;
    return !!(this.enabledWallet != null && window.cardano[this.enabledWallet] != null && await ((e = window.cardano[this.enabledWallet]) == null ? void 0 : e.isEnabled()) && this.getConnectorAPI() && await ((t = this.getConnectorAPI()) == null ? void 0 : t.getNetworkId()) != null);
  }
}
const M = "window.cardano.flint";
class je extends N {
  constructor() {
    super(M);
  }
  static connectorName() {
    return super.connectorName(M);
  }
}
const re = "error", c = class {
  static setSettings(e) {
    c.relayerRegion = e.relayerRegion, c.projectId = e.projectId, c.metadata = e.metadata;
  }
  static async getProvider() {
    if (c.provider || await c.init(), !c.provider)
      throw new Error("Failed to initialize universal provider");
    return c.provider;
  }
  static async init() {
    c.provider = await z.init({
      logger: re,
      relayUrl: c.relayerRegion,
      projectId: c.projectId,
      metadata: c.metadata
    }), c.provider.on(
      "session_ping",
      ({ id: e, topic: t }) => {
        console.log(e, t);
      }
    ), c.provider.on(
      "session_event",
      ({ event: e, chainId: t }) => {
        console.log(e, t);
      }
    ), c.provider.on(
      "session_update",
      ({ topic: e, params: t }) => {
        console.log(e, t);
      }
    ), c.provider.on("session_delete", () => {
      var e, t;
      (t = (e = c.provider) == null ? void 0 : e.session) == null || delete t.namespaces.cardano, m("");
    });
  }
};
let a = c;
s(a, "provider"), s(a, "relayerRegion"), s(a, "projectId"), s(a, "metadata");
class oe {
  async getNetworkId() {
    return (await a.getProvider()).request({ method: "cardano_getNetworkId" }, u());
  }
  async getUtxos(e, t) {
    return (await a.getProvider()).request(
      {
        method: "cardano_getUtxos",
        params: [e, t]
      },
      u()
    );
  }
  async getBalance() {
    return (await a.getProvider()).request({ method: "cardano_getBalance" }, u());
  }
  async getUsedAddresses(e) {
    return (await a.getProvider()).request(
      {
        method: "cardano_getUsedAddresses",
        params: e ? [e] : []
      },
      u()
    );
  }
  async getUnusedAddresses(e) {
    return (await a.getProvider()).request(
      {
        method: "cardano_getUnusedAddresses",
        params: e ? [e] : []
      },
      u()
    );
  }
  async getChangeAddress() {
    return (await a.getProvider()).request(
      { method: "cardano_getChangeAddress" },
      u()
    );
  }
  async getRewardAddress() {
    return (await a.getProvider()).request(
      { method: "cardano_getRewardAddress" },
      u()
    );
  }
  async getRewardAddresses() {
    return (await a.getProvider()).request(
      {
        method: "cardano_getRewardAddresses"
      },
      u()
    );
  }
  async signTx(e, t = !1) {
    return (await a.getProvider()).request(
      {
        method: "cardano_signTx",
        params: [e, t]
      },
      u()
    );
  }
  async signData(e, t) {
    return (await a.getProvider()).request(
      {
        method: "cardano_signData",
        params: [e, t]
      },
      u()
    );
  }
  async submitTx(e) {
    return (await a.getProvider()).request({ method: "cardano_submitTx", params: [e] }, u());
  }
  async getCollateral() {
    return (await a.getProvider()).request(
      {
        method: "cardano_getCollateral"
      },
      u()
    );
  }
  async onAccountChange(e) {
    const t = await a.getProvider();
    return new Promise((o, r) => {
      try {
        t.on("cardano_onAccountChange", e), o(void 0);
      } catch (i) {
        r(i);
      }
    });
  }
  async onNetworkChange(e) {
    const t = await a.getProvider();
    return new Promise((o, r) => {
      try {
        t.on("cardano_onNetworkChange", e), o(void 0);
      } catch (i) {
        r(i);
      }
    });
  }
}
function j(n) {
  try {
    return new V({
      walletConnectVersion: 2,
      projectId: I(),
      standaloneChains: n
    });
  } catch (e) {
    throw new Error(`Error instantiating web3Modal: ${JSON.stringify(e)}`);
  }
}
const W = class {
  constructor({
    relayerRegion: e,
    metadata: t,
    qrcode: o,
    autoconnect: r
  }) {
    s(this, "_provider");
    s(this, "qrcode");
    s(this, "enabled", !1);
    s(this, "currentTopic");
    s(this, "enabledWallet");
    s(this, "connectedWalletAPI");
    this.qrcode = Boolean(o), a.setSettings({
      projectId: I(),
      relayerRegion: e,
      metadata: t,
      qrcode: this.qrcode
    }), a.getProvider().then((i) => {
      this.provider = i;
    }), r && a.getProvider().then((i) => {
      var g, l, w, h, f;
      this.provider = i, (f = (h = (w = (l = (g = this.provider) == null ? void 0 : g.session) == null ? void 0 : l.namespaces) == null ? void 0 : w.cip34) == null ? void 0 : h.accounts) != null && f.length;
    });
  }
  cleanupInternalState() {
    this.enabled = !1, this.currentTopic = void 0, this.connectedWalletAPI = void 0;
  }
  async disconnect() {
    try {
      const e = await a.getProvider();
      await e.disconnect(), await e.cleanupPendingPairings();
    } catch (e) {
      if (!/No matching key/iu.test(e.message))
        throw e;
    } finally {
      this.cleanupInternalState();
    }
    m("");
  }
  getConnectorName() {
    return W.connectorName();
  }
  isAvailable() {
    return !0;
  }
  set provider(e) {
    if (this._provider = e, this._provider) {
      const t = new oe();
      this.connectedWalletAPI = t;
    }
  }
  get provider() {
    return this._provider;
  }
  async isEnabled() {
    return Promise.resolve(this.enabled);
  }
  async getProvider() {
    return a.getProvider();
  }
  async isConnected(e = 1e4) {
    return new Promise((t, o) => {
      const r = setTimeout(() => {
        clearTimeout(r), t(!1);
      }, e);
      this.actualConnectionCheck().then((i) => {
        clearTimeout(r), t(i);
      }).catch(() => {
        clearTimeout(r), t(!1);
      });
    });
  }
  async actualConnectionCheck() {
    if (!this.currentTopic)
      return !1;
    try {
      return await (await this.getProvider()).client.ping({ topic: this.currentTopic }), !0;
    } catch {
      return !1;
    }
  }
  async enable() {
    if (this.cleanupInternalState(), await this.connect(), this.enabled = !0, !this.provider || !this.connectedWalletAPI)
      throw new Error("Provider not initialized");
    return this.connectedWalletAPI;
  }
  getConnectorAPI() {
    return this.connectedWalletAPI;
  }
  async connect() {
    const e = O(), t = y(e), o = {
      cip34: {
        chains: [t],
        methods: [
          "cardano_signTx",
          "cardano_signData",
          "cardano_submitTx",
          "cardano_getBalance",
          "cardano_getCollateral",
          "cardano_getUtxos",
          "cardano_getNetworkId",
          "cardano_getUsedAddresses",
          "cardano_getUnusedAddresses",
          "cardano_getChangeAddress",
          "cardano_getRewardAddress",
          "cardano_getRewardAddresses"
        ],
        events: ["cardano_onNetworkChange", "cardano_onAccountChange"],
        rpcMap: {
          [t]: e.endpoint
        }
      }
    }, r = await a.getProvider();
    return this.provider = r, new Promise((i, g) => {
      r.on("display_uri", (l) => {
        if (this.qrcode) {
          const w = j([t]);
          w.openModal({ uri: l, standaloneChains: [t] }), w.subscribeModal((h) => {
            !this.enabled && !h.open && g(new Error("User closed modal before connecting"));
          });
        } else
          i(l);
      }), r.connect({
        pairingTopic: void 0,
        namespaces: { ...o }
      }).then((l) => {
        var h, f, T;
        if (!l)
          throw new Error("Failed connection.");
        const w = (T = (f = (h = l.namespaces) == null ? void 0 : h.cip34) == null ? void 0 : f.accounts[0]) == null ? void 0 : T.split(":")[2];
        if (w && this.qrcode) {
          m(w);
          const S = j();
          this.enabled = !0, this.currentTopic = l.topic, S.closeModal(), i(w);
        } else
          g(new Error("Could not resolve address"));
      }).catch((l) => {
        if (!/No matching key/iu.test(l.message))
          throw l;
      });
    });
  }
};
let A = W;
s(A, "connectorName", () => "walletconnect");
H();
export {
  je as FlintConnector,
  N as InjectedConnector,
  A as WalletConnectConnector,
  _e as cardano,
  ke as cardanoMainnetWalletConnect,
  Re as cardanoPreprodWalletConnect,
  Me as cardanoPreviewWalletConnect,
  pe as connect,
  Ee as disconnect,
  J as getActiveConnector,
  Pe as getBalance,
  ge as getCardanoAPI,
  fe as getChangeAddress,
  be as getCollateral,
  le as getConnectorIsAvailable,
  ye as getNetworkId,
  I as getProjectId,
  ve as getRewardAddress,
  me as getRewardAddresses,
  Ie as getUnusedAddresses,
  Ae as getUsedAddresses,
  we as init,
  F as setProjectId,
  Te as signData,
  Ne as signTx,
  We as submitTx,
  he as switchConnector,
  Ce as switchNetwork,
  ue as watchAddress
};

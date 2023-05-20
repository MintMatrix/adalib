# Adalib

**Cardano** friendly API

Adalib implements a `Connector` interface that complies with WalletConnect's standards. There are connectors that support both WalletConnect wallets, and browser extension injected wallets.

It attempts to closely emulate the CIP-30 standard within the connectors. A dapp developer can use these connectors to retrieve the enabled CIP-30 API, and benefit from the included typings this library provides.

You will need a Walletconnect Project ID to use this library. You can get one by signing up and registering a dapp at https://walletconnect.com/.

For an examples, see `App.tsx` and `Home.tsx` in [example project](adalib-example/) in this repo.

For further docs, see [docs](docs/docs).
### API

- Provided Connectors:
  - `FlintConnector`: Connect to an injected Flint extension
  - `WalletConnectConnector`: Connect to any wallet that supports WalletConnect
  - `InjectedConnector`: Connect to any browser-injected wallet by providing the window path

### Init

The init function needs to be called to prepare `adalib` to be able to call all
the functions in its API.

```ts
import { 
  init, 
  cardanoMainnetWalletConnect,
  FlintConnector, 
  WalletConnectConnector 
} from 'adalib'

init(
  {
    // The different connector methodologies that will be used.
    // FlintConnector will interact with injected Flint Wallet using the browser
    // extension, while WalletConnectConnector can be used to interact with all
    // wallets that support the WalletConnect protocol.
    // The injected connector is used to interact with any cardano wallet.
    // It requires the full cardano window path.
    connectors: [
      new FlintConnector(),
      new InjectedConnector('window.cardano.eternl'),
      new WalletConnectConnector({
        relayerRegion: 'wss://relay.walletconnect.com',
        metadata: {
          description: 'Test app for adalib',
          name: 'Test Adalib dApp',
          icons: ['https://avatars.githubusercontent.com/u/37784886'],
          url: 'http://localhost:3000'
        },
        autoconnect: true,
        qrcode: true
      })
    ],
    // Name of the connector to be used.
    // The connector needs to be registered in the connectors field above.
    // This can be switched later using `switchConnector` function.
    connectorName: WalletConnectConnector.connectorName(),
    // The name of the chain and network to use.
    // Here, `mainnet` refers to the cardano mainnet network.
    chosenChain: cardanoMainnetWalletConnect()
  },
  WALLETCONNECT_PROJECT_ID
)
```

### Connect Wallet

The connect function can be used to connect a wallet to a dApp. The wallet
chosen needs to be configured in the `init` function above.

With the WalletConnect connector, if the user closes the QR modal without
scanning the QR code, the `connect` function will throw an error. It is important
to catch this error and handle it appropriately to ensure your application does not hang.

```ts
import { connect, getActiveConnector } from 'adalib'

const address = await connect()

// OR

getActiveConnector()
      .enable()
      .then(api => {
        console.log('CIP-30 API Created', { api });
        // Store the enabled CIP-30 api in state and make subsequent calls to it
        setEnabledAPI(api);
      });
```

### Watch Address

Instead of retrieving the address once on the connect function, one can globally
watch address changes using the `watchAddress` API.

```ts
import { watchAddress, connect } from 'adalib'

watchAddress(address => {
  console.log({ address })
})

// calls `enable` on the active connector
connect()
```


### Switch Connector

Sometimes you may want to switch from WalletConnect to an injected
browser extension wallet, such as Flint or vice versa. This can be done using the `switchConnector` function.

Connectors are switched via the connectorName, so it is good to keep a reference to the instance of the connector you want to switch to.


```ts
import { switchConnector, FlintConnector, connect } from 'adalib'

switchConnector(FlintConnector.connectorName())

const flintWalletAPI = await connect()
```

### Checking Connection Health

Sometimes the connection will die and you will need to reconnect.
The connectors have an `isConnected(timeout)` function that can be used to check
if the connection is still alive. If it is not, you can call the `enable` function
again. The timeout is in milliseconds. You typically only need this for the WalletConnect connector. The default is 10,000ms.

The walletconnect connector will ping the connected wallet. If there is no response
before the timeout, it will assume the connection is dead and will return false.

An injected connector will check for the wallet to respond with a network ID. If there is no response before
the timeout, it will assume the connection has been lost and will return false.

```ts
import { getActiveConnector } from 'adalib'

const connector = getActiveConnector()
const isStillConnected = await connector.isConnected(1000)
if (!isStillConnected) {
  await connector.enable()
}
```

<!-- # Folders
 -->
## Example

Example app written in react, for testing in the adalib-example folder.


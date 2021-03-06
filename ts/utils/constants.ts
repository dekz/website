import {
    ExchangeContractErrs,
    PublicNodeUrlsByNetworkId,
    ZeroExJsDocSections,
    SmartContractsDocSections,
    Docs,
    ContractAddresses,
    Networks,
    WebsitePaths,
} from 'ts/types';
import * as BigNumber from 'bignumber.js';

const INFURA_API_KEY = 'T5WSC8cautR4KXyYgsRs';

export const constants = {
    ANGELLIST_URL: 'https://angel.co/0xproject/jobs',
    STAGING_DOMAIN: 'staging-0xproject.s3-website-us-east-1.amazonaws.com',
    PRODUCTION_DOMAIN: '0xproject.com',
    DEVELOPMENT_DOMAIN: '0xproject.dev:3572',
    BIGNUMBERJS_GITHUB_URL: 'http://mikemcl.github.io/bignumber.js',
    BITLY_ACCESS_TOKEN: 'ffc4c1a31e5143848fb7c523b39f91b9b213d208',
    BITLY_ENDPOINT: 'https://api-ssl.bitly.com',
    BLOG_URL: 'https://blog.0xproject.com/latest',
    CUSTOM_BLUE: '#60a4f4',
    DEFAULT_DERIVATION_PATH: `44'/60'/0'`,
    ETHER_FAUCET_ENDPOINT: 'https://faucet.0xproject.com',
    FEE_RECIPIENT_ADDRESS: '0x0000000000000000000000000000000000000000',
    FIREFOX_U2F_ADDON: 'https://addons.mozilla.org/en-US/firefox/addon/u2f-support-add-on/',
    GITHUB_URL: 'https://github.com/0xProject',
    GITHUB_0X_JS_URL: 'https://github.com/0xProject/0x.js',
    GITHUB_CONTRACTS_URL: 'https://github.com/0xProject/contracts',
    GITHUB_WIKI_URL: 'https://github.com/0xProject/wiki',
    HTTP_NO_CONTENT_STATUS_CODE: 204,
    ACCEPT_DISCLAIMER_LOCAL_STORAGE_KEY: 'didAcceptPortalDisclaimer',
    LINKEDIN_0X_URL: 'https://www.linkedin.com/company/0x',
    LEDGER_PROVIDER_NAME: 'Ledger',
    METAMASK_PROVIDER_NAME: 'Metamask',
    GENESIS_ORDER_BLOCK_BY_NETWORK_ID: {
        1: 4145578,
        42: 3117574,
        50: 0,
    } as {[networkId: number]: number},
    PUBLIC_PROVIDER_NAME: '0x Public',
    // The order matters. We first try first node and only then fall back to others.
    PUBLIC_NODE_URLS_BY_NETWORK_ID: {
        [1]: [
            `https://mainnet.infura.io/${INFURA_API_KEY}`,
        ],
        [42]: [
            `https://kovan.infura.io/${INFURA_API_KEY}`,
        ],
    } as PublicNodeUrlsByNetworkId,
    PARITY_SIGNER_PROVIDER_NAME: 'Parity Signer',
    GENERIC_PROVIDER_NAME: 'Injected Web3',
    MAKER_FEE: new BigNumber(0),
    MAINNET_NAME: 'Main network',
    MAINNET_NETWORK_ID: 1,
    METAMASK_CHROME_STORE_URL: 'https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn',
    // tslint:disable-next-line:max-line-length
    PARITY_CHROME_STORE_URL: 'https://chrome.google.com/webstore/detail/parity-ethereum-integrati/himekenlppkgeaoeddcliojfddemadig',
    MIST_DOWNLOAD_URL: 'https://github.com/ethereum/mist/releases',
    NULL_ADDRESS: '0x0000000000000000000000000000000000000000',
    ROLLBAR_ACCESS_TOKEN: 'a6619002b51c4464928201e6ea94de65',
    DOCS_SCROLL_DURATION_MS: 0,
    DOCS_CONTAINER_ID: 'documentation',
    HOME_SCROLL_DURATION_MS: 500,
    REDDIT_URL: 'https://reddit.com/r/0xproject',
    STANDARD_RELAYER_API_GITHUB: 'https://github.com/0xProject/standard-relayer-api/blob/master/README.md',
    SUCCESS_STATUS: 200,
    S3_0XJS_DOCUMENTATION_JSON_ROOT: 'https://s3.amazonaws.com/0xjs-docs-jsons',
    S3_SMART_CONTRACTS_DOCUMENTATION_JSON_ROOT: 'https://s3.amazonaws.com/smart-contracts-docs-json',
    UNAVAILABLE_STATUS: 503,
    TAKER_FEE: new BigNumber(0),
    TESTNET_NAME: 'Kovan',
    TESTNET_NETWORK_ID: 42,
    TESTRPC_NETWORK_ID: 50,
    TWITTER_URL: 'https://twitter.com/0xproject',
    ETH_DECIMAL_PLACES: 18,
    MINT_AMOUNT: new BigNumber('100000000000000000000'),
    WEB3_DOCS_URL: 'https://github.com/ethereum/wiki/wiki/JavaScript-API',
    WEB3_PROVIDER_DOCS_URL: 'https://github.com/ethereum/wiki/wiki/JavaScript-API#example-7',
    ZEROEX_CHAT_URL: 'https://chat.0xproject.com',
    // Projects
    ETHFINEX_URL: 'https://www.bitfinex.com/ethfinex',
    RADAR_RELAY_URL: 'https://radarrelay.com',
    PARADEX_URL: 'https://paradex.io',
    DYDX_URL: 'https://dydx.exchange',
    MELONPORT_URL: 'https://melonport.com',
    DISTRICT_0X_URL: 'https://district0x.io',
    DHARMA_URL: 'https://dharma.io',
    LENDROID_URL: 'https://lendroid.com',
    MAKER_URL: 'https://makerdao.com',
    ARAGON_URL: 'https://aragon.one',
    BLOCKNET_URL: 'https://blocknet.co',
    OCEAN_URL: 'http://the0cean.com',
    STATUS_URL: 'https://status.im',
    AUGUR_URL: 'https://augur.net',
    AUCTUS_URL: 'https://auctus.org',
    OPEN_ANX_URL: 'https://www.openanx.org',

    iconUrlBySymbol: {
        'REP': '/images/token_icons/augur.png',
        'DGD': '/images/token_icons/digixdao.png',
        'WETH': '/images/token_icons/ether_erc20.png',
        'MLN': '/images/token_icons/melon.png',
        'GNT': '/images/token_icons/golem.png',
        'MKR': '/images/token_icons/makerdao.png',
        'ZRX': '/images/token_icons/zero_ex.png',
        'ANT': '/images/token_icons/aragon.png',
        'BNT': '/images/token_icons/bancor.png',
        'BAT': '/images/token_icons/basicattentiontoken.png',
        'CVC': '/images/token_icons/civic.png',
        'EOS': '/images/token_icons/eos.png',
        'FUN': '/images/token_icons/funfair.png',
        'GNO': '/images/token_icons/gnosis.png',
        'ICN': '/images/token_icons/iconomi.png',
        'OMG': '/images/token_icons/omisego.png',
        'SNT': '/images/token_icons/status.png',
        'STORJ': '/images/token_icons/storjcoinx.png',
        'PAY': '/images/token_icons/tenx.png',
        'QTUM': '/images/token_icons/qtum.png',
        'DNT': '/images/token_icons/district0x.png',
        'SNGLS': '/images/token_icons/singularity.png',
        'EDG': '/images/token_icons/edgeless.png',
        '1ST': '/images/token_icons/firstblood.jpg',
        'WINGS': '/images/token_icons/wings.png',
        'BQX': '/images/token_icons/bitquence.png',
        'LUN': '/images/token_icons/lunyr.png',
        'RLC': '/images/token_icons/iexec.png',
        'MCO': '/images/token_icons/monaco.png',
        'ADT': '/images/token_icons/adtoken.png',
        'CFI': '/images/token_icons/cofound-it.png',
        'ROL': '/images/token_icons/etheroll.png',
        'WGNT': '/images/token_icons/golem.png',
        'MTL': '/images/token_icons/metal.png',
        'NMR': '/images/token_icons/numeraire.png',
        'SAN': '/images/token_icons/santiment.png',
        'TAAS': '/images/token_icons/taas.png',
        'TKN': '/images/token_icons/tokencard.png',
        'TRST': '/images/token_icons/trust.png',
    } as {[symbol: string]: string},
    networkNameById: {
        1: Networks.mainnet,
        3: Networks.ropsten,
        4: Networks.rinkeby,
        42: Networks.kovan,
    } as {[symbol: number]: string},
    networkIdByName: {
        [Networks.mainnet]: 1,
        [Networks.ropsten]: 3,
        [Networks.rinkeby]: 4,
        [Networks.kovan]: 42,
    },
    // Note: This needs to be kept in sync with the types exported in index.ts. Unfortunately there is
    // currently no way to extract the re-exported types from index.ts via TypeDoc :(
    public0xjsTypes: [
        'Order',
        'SignedOrder',
        'ECSignature',
        'ZeroExError',
        'EventCallback',
        'EventCallbackAsync',
        'EventCallbackSync',
        'ExchangeContractErrs',
        'ContractEvent',
        'Token',
        'ExchangeEvents',
        'IndexedFilterValues',
        'SubscriptionOpts',
        'BlockParam',
        'OrderFillOrKillRequest',
        'OrderCancellationRequest',
        'OrderFillRequest',
        'ContractEventEmitter',
        'Web3Provider',
        'ContractEventArgs',
        'LogCancelArgs',
        'LogFillArgs',
        'LogErrorContractEventArgs',
        'LogFillContractEventArgs',
        'LogCancelContractEventArgs',
        'TokenEvents',
        'ExchangeContractEventArgs',
        'TransferContractEventArgs',
        'ApprovalContractEventArgs',
        'TokenContractEventArgs',
        'ZeroExConfig',
        'TransactionReceiptWithDecodedLogs',
        'LogWithDecodedArgs',
        'DecodedLogArgs',
        'MethodOpts',
        'ValidateOrderFillableOpts',
        'OrderTransactionOpts',
        'ContractEventArg',
        'LogEvent',
        'LogEntry',
    ],
    menuSmartContracts: {
        introduction: [
            SmartContractsDocSections.Introduction,
        ],
        contracts: [
            SmartContractsDocSections.Exchange,
            SmartContractsDocSections.TokenRegistry,
            SmartContractsDocSections.ZRXToken,
            SmartContractsDocSections.EtherToken,
            SmartContractsDocSections.TokenTransferProxy,
        ],
    },
    menu0xjs: {
        introduction: [
            ZeroExJsDocSections.introduction,
        ],
        install: [
            ZeroExJsDocSections.installation,
        ],
        topics: [
            ZeroExJsDocSections.async,
            ZeroExJsDocSections.errors,
            ZeroExJsDocSections.versioning,
        ],
        zeroEx: [
            ZeroExJsDocSections.zeroEx,
        ],
        contracts: [
            ZeroExJsDocSections.exchange,
            ZeroExJsDocSections.token,
            ZeroExJsDocSections.tokenRegistry,
            ZeroExJsDocSections.etherToken,
            ZeroExJsDocSections.proxy,
        ],
        types: [
            ZeroExJsDocSections.types,
        ],
    },
    menuSubsectionToVersionWhenIntroduced: {
        [ZeroExJsDocSections.etherToken]: '0.7.1',
        [ZeroExJsDocSections.proxy]: '0.8.0',
    },
    docToPath: {
        [Docs.ZeroExJs]: WebsitePaths.ZeroExJs,
        [Docs.SmartContracts]: WebsitePaths.SmartContracts,
    },
    contractAddresses: {
        '1.0.0': {
            [Networks.mainnet]: {
                [SmartContractsDocSections.Exchange]: '0x12459c951127e0c374ff9105dda097662a027093',
                [SmartContractsDocSections.TokenTransferProxy]: '0x8da0d80f5007ef1e431dd2127178d224e32c2ef4',
                [SmartContractsDocSections.ZRXToken]: '0xe41d2489571d322189246dafa5ebde1f4699f498',
                [SmartContractsDocSections.EtherToken]: '0x2956356cd2a2bf3202f771f50d3d14a367b48070',
                [SmartContractsDocSections.TokenRegistry]: '0x926a74c5c36adf004c87399e65f75628b0f98d2c',
            },
            [Networks.ropsten]: {
                [SmartContractsDocSections.Exchange]: '0x479cc461fecd078f766ecc58533d6f69580cf3ac',
                [SmartContractsDocSections.TokenTransferProxy]: '0x4e9aad8184de8833365fea970cd9149372fdf1e6',
                [SmartContractsDocSections.ZRXToken]: '0xa8e9fa8f91e5ae138c74648c9c304f1c75003a8d',
                [SmartContractsDocSections.EtherToken]: '0xc00fd9820cd2898cc4c054b7bf142de637ad129a',
                [SmartContractsDocSections.TokenRegistry]: '0x6b1a50f0bb5a7995444bd3877b22dc89c62843ed',
            },
            [Networks.kovan]: {
                [SmartContractsDocSections.Exchange]: '0x90fe2af704b34e0224bf2299c838e04d4dcf1364',
                [SmartContractsDocSections.TokenTransferProxy]: '0x087Eed4Bc1ee3DE49BeFbd66C662B434B15d49d4',
                [SmartContractsDocSections.ZRXToken]: '0x6ff6c0ff1d68b964901f986d4c9fa3ac68346570',
                [SmartContractsDocSections.EtherToken]: '0x05d090b51c40b020eab3bfcb6a2dff130df22e9c',
                [SmartContractsDocSections.TokenRegistry]: '0xf18e504561f4347bea557f3d4558f559dddbae7f',
            },
        },
    } as ContractAddresses,
};

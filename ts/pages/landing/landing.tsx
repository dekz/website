import * as _ from 'lodash';
import * as React from 'react';
import DocumentTitle = require('react-document-title');
import {Link} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import {colors} from 'material-ui/styles';
import {configs} from 'ts/utils/configs';
import {constants} from 'ts/utils/constants';
import {Styles, WebsitePaths, ScreenWidths} from 'ts/types';
import {utils} from 'ts/utils/utils';
import {TopBar} from 'ts/components/top_bar';
import {Footer} from 'ts/components/footer';

interface BoxContent {
    title: string;
    description: string;
    imageUrl: string;
    classNames: string;
}
interface AssetType {
    title: string;
    imageUrl: string;
    style?: React.CSSProperties;
}
interface UseCase {
    imageUrl: string;
    type: string;
    description: string;
    classNames: string;
    style?: React.CSSProperties;
    projectIconUrls: string[];
}
interface Project {
    logoFileName: string;
    projectUrl: string;
}

const THROTTLE_TIMEOUT = 100;
const CUSTOM_HERO_BACKGROUND_COLOR = '#404040';
const CUSTOM_PROJECTS_BACKGROUND_COLOR = '#343333';
const CUSTOM_WHITE_BACKGROUND = 'rgb(245, 245, 245)';
const CUSTOM_WHITE_TEXT = '#E4E4E4';
const CUSTOM_GRAY_TEXT = '#919191';

const boxContents: BoxContent[] = [
    {
        title: 'Trustless exchange',
        description: 'Built on Ethereum\'s distributed network with no centralized \
                      point of failure and no down time, each trade is settled atomically \
                      and without counterparty risk.',
        imageUrl: '/images/landing/distributed_network.png',
        classNames: '',
    },
    {
        title: 'Shared liquidity',
        description: 'By sharing a standard API, relayers can easily aggregate liquidity pools, \
                      creating network effects around liquidity that compound as more relayers come online.',
        imageUrl: '/images/landing/liquidity.png',
        classNames: 'mx-auto',
    },
    {
        title: 'Open source',
        description: '0x is open source, permissionless and free to use. Trade directly with a known \
                      counterparty for free or pay a relayer some ZRX tokens to access their liquidity \
                      pool.',
        imageUrl: '/images/landing/open_source.png',
        classNames: 'right',
    },
];

const projects: Project[] = [
    {
        logoFileName: 'ethfinex-top.png',
        projectUrl: constants.ETHFINEX_URL,
    },
    {
        logoFileName: 'radar_relay_top.png',
        projectUrl: constants.RADAR_RELAY_URL,
    },
    {
        logoFileName: 'paradex_top.png',
        projectUrl: constants.PARADEX_URL,
    },
    {
        logoFileName: 'the_ocean.png',
        projectUrl: constants.OCEAN_URL,
    },
    {
        logoFileName: 'dydx.png',
        projectUrl: constants.DYDX_URL,
    },
    {
        logoFileName: 'melonport.png',
        projectUrl: constants.MELONPORT_URL,
    },
    {
        logoFileName: 'maker.png',
        projectUrl: constants.MAKER_URL,
    },
    {
        logoFileName: 'dharma.png',
        projectUrl: constants.DHARMA_URL,
    },
    {
        logoFileName: 'lendroid.png',
        projectUrl: constants.LENDROID_URL,
    },
    {
        logoFileName: 'district0x.png',
        projectUrl: constants.DISTRICT_0X_URL,
    },
    {
        logoFileName: 'aragon.png',
        projectUrl: constants.ARAGON_URL,
    },
    {
        logoFileName: 'blocknet.png',
        projectUrl: constants.BLOCKNET_URL,
    },
    {
        logoFileName: 'status.png',
        projectUrl: constants.STATUS_URL,
    },
    {
        logoFileName: 'augur.png',
        projectUrl: constants.AUGUR_URL,
    },
    {
        logoFileName: 'anx.png',
        projectUrl: constants.OPEN_ANX_URL,
    },
    {
        logoFileName: 'auctus.png',
        projectUrl: constants.AUCTUS_URL,
    },
];

export interface LandingProps {
    location: Location;
}

interface LandingState {
    screenWidth: ScreenWidths;
}

export class Landing extends React.Component<LandingProps, LandingState> {
    private throttledScreenWidthUpdate: () => void;
    constructor(props: LandingProps) {
        super(props);
        this.state = {
            screenWidth: utils.getScreenWidth(),
        };
        this.throttledScreenWidthUpdate = _.throttle(this.updateScreenWidth.bind(this), THROTTLE_TIMEOUT);
    }
    public componentDidMount() {
        window.addEventListener('resize', this.throttledScreenWidthUpdate);
        window.scrollTo(0, 0);
    }
    public componentWillUnmount() {
        window.removeEventListener('resize', this.throttledScreenWidthUpdate);
    }
    public render() {
        return (
            <div id="landing" className="clearfix" style={{color: colors.grey800}}>
                <DocumentTitle title="0x Protocol"/>
                <TopBar
                    blockchainIsLoaded={false}
                    location={this.props.location}
                    isNightVersion={true}
                    style={{backgroundColor: CUSTOM_HERO_BACKGROUND_COLOR, position: 'relative'}}
                />
                {this.renderHero()}
                {this.renderProjects()}
                {this.renderTokenizationSection()}
                {this.renderProtocolSection()}
                {this.renderInfoBoxes()}
                {this.renderBuildingBlocksSection()}
                {this.renderUseCases()}
                {this.renderCallToAction()}
                <Footer location={this.props.location} />
            </div>
        );
    }
    private renderHero() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        const buttonLabelStyle: React.CSSProperties = {
            textTransform: 'none',
            fontSize: isSmallScreen ? 12 : 14,
            fontWeight: 400,
        };
        const lightButtonStyle: React.CSSProperties = {
            borderRadius: 6,
            border: '1px solid #D8D8D8',
            lineHeight: '33px',
            height: 38,
        };
        const left  = 'col lg-col-7 md-col-7 col-12 lg-pt4 md-pt4 sm-pt0 mt1 lg-pl4 md-pl4 sm-pl0 sm-px3 sm-center';
        return (
            <div
                className="clearfix py4"
                style={{backgroundColor: CUSTOM_HERO_BACKGROUND_COLOR}}
            >
                <div
                    className="mx-auto max-width-4 clearfix"
                >
                    <div className="lg-pt4 md-pt4 sm-pt2 lg-pb4 md-pb4 lg-my4 md-my4 sm-mt2 sm-mb4 clearfix">
                        <div className="col lg-col-5 md-col-5 col-12 sm-center">
                            <img
                                src="/images/landing/hero_chip_image.png"
                                height={isSmallScreen ? 300 : 395}
                            />
                        </div>
                        <div
                            className={left}
                            style={{color: 'white'}}
                        >
                            <div style={{paddingLeft: isSmallScreen ? 0 : 12}}>
                                <div
                                    className="sm-pb2"
                                    style={{fontFamily: 'Roboto Mono', fontSize: isSmallScreen ? 26 : 34}}
                                >
                                    Powering decentralized exchange
                                </div>
                                <div
                                    className="pt2 h5 sm-mx-auto"
                                    style={{maxWidth: 446, fontFamily: 'Roboto Mono', lineHeight: 1.7, fontWeight: 300}}
                                >
                                    0x is an open, permissionless protocol allowing for ERC20 tokens to
                                    be traded on the Ethereum blockchain.
                                </div>
                                <div className="pt3 clearfix sm-mx-auto" style={{maxWidth: 342}}>
                                    <div className="lg-pr2 md-pr2 col col-6 sm-center">
                                        <Link to={WebsitePaths.ZeroExJs} className="text-decoration-none">
                                            <RaisedButton
                                                style={{borderRadius: 6, minWidth: 157.36}}
                                                buttonStyle={{borderRadius: 6}}
                                                labelStyle={buttonLabelStyle}
                                                label="Build on 0x"
                                                onClick={_.noop}
                                            />
                                        </Link>
                                    </div>
                                    <div className="col col-6 sm-center">
                                        <a
                                            href={constants.ZEROEX_CHAT_URL}
                                            target="_blank"
                                            className="text-decoration-none"
                                        >
                                            <RaisedButton
                                                style={{borderRadius: 6, minWidth: 150}}
                                                buttonStyle={lightButtonStyle}
                                                labelColor="white"
                                                backgroundColor={CUSTOM_HERO_BACKGROUND_COLOR}
                                                labelStyle={buttonLabelStyle}
                                                label="Join the community"
                                                onClick={_.noop}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    private renderProjects() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        const isMediumScreen = this.state.screenWidth === ScreenWidths.MD;
        const projectList = _.map(projects, (project: Project, i: number) => {
            const colWidth = isSmallScreen ? 3 : isMediumScreen ? 4 : 2 - (i % 2);
            return (
                <div
                    key={`project-${project.logoFileName}`}
                    className={`col col-${colWidth} center`}
                >
                    <div>
                        <a
                            href={project.projectUrl}
                            target="_blank"
                            className="text-decoration-none"
                        >
                            <img
                                src={`/images/landing/project_logos/${project.logoFileName}`}
                                height={isSmallScreen ? 60 : 92}
                            />
                        </a>
                    </div>
                </div>
            );
        });
        const titleStyle: React.CSSProperties = {
            fontFamily: 'Roboto Mono',
            color: '#A4A4A4',
            textTransform: 'uppercase',
            fontWeight: 300,
            letterSpacing: 3,
        };
        return (
            <div
                className="clearfix py4"
                style={{backgroundColor: CUSTOM_PROJECTS_BACKGROUND_COLOR}}
            >
                <div className="mx-auto max-width-4 clearfix sm-px3">
                    <div
                        className="h4 pb3 md-pl3 sm-pl2"
                        style={titleStyle}
                    >
                        Projects building on 0x
                    </div>
                    <div className="clearfix">
                        {projectList}
                    </div>
                    <div
                        className="pt3 mx-auto center"
                        style={{color: CUSTOM_GRAY_TEXT, fontFamily: 'Roboto Mono', maxWidth: 300, fontSize: 14}}
                    >
                        view the{' '}
                        <Link
                            to={`${WebsitePaths.Wiki}#List-of-Projects-Using-0x-Protocol`}
                            className="text-decoration-none underline"
                            style={{color: CUSTOM_GRAY_TEXT}}
                        >
                            full list
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    private renderTokenizationSection() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        return (
            <div
                className="clearfix lg-py4 md-py4 sm-pb4 sm-pt2"
                style={{backgroundColor: CUSTOM_WHITE_BACKGROUND}}
            >
                <div className="mx-auto max-width-4 py4 clearfix">
                    {isSmallScreen &&
                        this.renderTokenCloud()
                    }
                    <div className="col lg-col-6 md-col-6 col-12">
                        <div className="mx-auto" style={{maxWidth: 385, paddingTop: 7}}>
                            <div
                                className="lg-h1 md-h1 sm-h2 sm-center sm-pt3"
                                style={{fontFamily: 'Roboto Mono'}}
                            >
                                The world's value is becoming tokenized
                            </div>
                            <div
                                className="pb2 lg-pt2 md-pt2 sm-pt3 sm-px3 h5 sm-center"
                                style={{fontFamily: 'Roboto Mono', lineHeight: 1.7}}
                            >
                                {isSmallScreen ?
                                    <span>
                                        The Ethereum blockchain is an open, borderless financial system that represents
                                        a wide variety of assets as cryptographic tokens. In the future, most digital
                                        assets and goods will be tokenized.
                                    </span> :
                                    <div>
                                        <div>
                                            The Ethereum blockchain is an open, borderless
                                            financial system that represents
                                        </div>
                                        <div>
                                            a wide variety of assets as cryptographic tokens.
                                            In the future, most digital assets and goods will be tokenized.
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="flex pt1 sm-px3">
                                {this.renderAssetTypes()}
                            </div>
                        </div>
                    </div>
                    {!isSmallScreen &&
                        this.renderTokenCloud()
                    }
                </div>
            </div>
        );
    }
    private renderProtocolSection() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        return (
            <div
                className="clearfix lg-py4 md-py4 sm-pt4"
                style={{backgroundColor: CUSTOM_HERO_BACKGROUND_COLOR}}
            >
                <div className="mx-auto max-width-4 lg-py4 md-py4 sm-pt4 clearfix">
                    <div className="col lg-col-6 md-col-6 col-12 sm-center">
                        <img
                            src="/images/landing/relayer_diagram.png"
                            height={isSmallScreen ? 326 : 426}
                        />
                    </div>
                    <div
                        className="col lg-col-6 md-col-6 col-12 lg-pr3 md-pr3 sm-mx-auto"
                        style={{color: CUSTOM_WHITE_TEXT, paddingTop: 8, maxWidth: isSmallScreen ? 'none' : 445}}
                    >
                        <div
                            className="lg-h1 md-h1 sm-h2 pb1 sm-pt3 sm-center"
                            style={{fontFamily: 'Roboto Mono'}}
                        >
                            <div>
                                Off-chain order relay
                            </div>
                            <div>
                                On-chain settlement
                            </div>
                        </div>
                        <div
                            className="pb2 pt2 h5 sm-center sm-px3 sm-mx-auto"
                            style={{fontFamily: 'Roboto Mono', lineHeight: 1.7, fontWeight: 300, maxWidth: 445}}
                        >
                            In 0x protocol, orders are transported off-chain, massively reducing gas
                            costs and eliminating blockchain bloat. Relayers help broadcast orders and
                            collect a fee each time they facilitate a trade. Anyone can build a relayer.
                        </div>
                        <div
                            className="pt3 sm-mx-auto sm-px3"
                            style={{color: CUSTOM_GRAY_TEXT, maxWidth: isSmallScreen ? 412 : 'none'}}
                        >
                            <div className="flex" style={{fontSize: 18}}>
                                <div
                                    className="lg-h4 md-h4 sm-h5"
                                    style={{letterSpacing: isSmallScreen ? 1 : 3, fontFamily: 'Roboto Mono'}}
                                >
                                    RELAYERS BUILDING ON 0X
                                </div>
                                <div className="h5" style={{marginLeft: isSmallScreen ? 26 : 49}}>
                                    <Link
                                        to={`${WebsitePaths.Wiki}#List-of-Projects-Using-0x-Protocol`}
                                        className="text-decoration-none underline"
                                        style={{color: CUSTOM_GRAY_TEXT, fontFamily: 'Roboto Mono'}}
                                    >
                                        view all
                                    </Link>
                                </div>
                            </div>
                            <div className="lg-flex md-flex sm-clearfix pt3" style={{opacity: 0.4}}>
                                <div className="col col-4 sm-center">
                                        <img
                                            src="/images/landing/ethfinex.png"
                                            style={{height: isSmallScreen ? 85 : 107}}
                                        />
                                </div>
                                <div
                                    className="col col-4 center"
                                >
                                        <img
                                            src="/images/landing/radar_relay.png"
                                            style={{height: isSmallScreen ? 85 : 107}}
                                        />
                                </div>
                                <div className="col col-4 sm-center" style={{textAlign: 'right'}}>
                                        <img
                                            src="/images/landing/paradex.png"
                                            style={{height: isSmallScreen ? 85 : 107}}
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    private renderBuildingBlocksSection() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        const underlineStyle: React.CSSProperties = {
            height: isSmallScreen ? 18 : 23,
            lineHeight: 'none',
            borderBottom: '2px solid #979797',
        };
        const descriptionStyle: React.CSSProperties = {
            fontFamily: 'Roboto Mono',
            lineHeight: isSmallScreen ? 1.5 : 2,
            fontWeight: 300,
            fontSize: 15,
            maxWidth: isSmallScreen ? 375 : 'none',
        };
        const callToActionStyle: React.CSSProperties = {
            fontFamily: 'Roboto Mono',
            fontSize: 15,
            fontWeight: 300,
            maxWidth: isSmallScreen ? 375 : 441,
        };
        return (
            <div
                className="clearfix lg-pt4 md-pt4"
                style={{backgroundColor: CUSTOM_HERO_BACKGROUND_COLOR}}
            >
                <div className="mx-auto max-width-4 lg-pt4 md-pt4 lg-mb4 md-mb4 sm-mb2 clearfix">
                    {isSmallScreen &&
                        this.renderBlockChipImage()
                    }
                    <div
                        className="col lg-col-6 md-col-6 col-12 lg-pr3 md-pr3 sm-px3"
                        style={{color: CUSTOM_WHITE_TEXT}}
                    >
                        <div
                            className="pb1 lg-pt4 md-pt4 sm-pt3 lg-h1 md-h1 sm-h2 sm-px3 sm-center"
                            style={{fontFamily: 'Roboto Mono'}}
                        >
                            A building block for dApps
                        </div>
                        <div
                            className="pb3 pt2 sm-mx-auto sm-center"
                            style={descriptionStyle}
                        >
                            0x protocol is a pluggable building block for dApps that require exchange functionality.
                            Join the many developers that are already using 0x in their web applications and smart
                            contracts.
                        </div>
                        <div
                            className="sm-mx-auto sm-center"
                            style={callToActionStyle}
                        >
                            Learn how in our{' '}
                            <Link
                                to={WebsitePaths.ZeroExJs}
                                className="text-decoration-none underline"
                                style={{color: CUSTOM_WHITE_TEXT, fontFamily: 'Roboto Mono'}}
                            >
                                0x.js
                            </Link>
                            {' '}and{' '}
                            <Link
                                to={WebsitePaths.SmartContracts}
                                className="text-decoration-none underline"
                                style={{color: CUSTOM_WHITE_TEXT, fontFamily: 'Roboto Mono'}}
                            >
                                smart contract
                            </Link>
                            {' '}docs
                        </div>
                    </div>
                    {!isSmallScreen &&
                        this.renderBlockChipImage()
                    }
                </div>
            </div>
        );
    }
    private renderBlockChipImage() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        return (
            <div className="col lg-col-6 md-col-6 col-12 sm-center">
                <img
                    src="/images/landing/0x_chips.png"
                    height={isSmallScreen ? 240 : 368}
                />
            </div>
        );
    }
    private renderTokenCloud() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        return (
            <div className="col lg-col-6 md-col-6 col-12 center">
                <img
                    src="/images/landing/tokenized_world.png"
                    height={isSmallScreen ? 280 : 364.5}
                />
            </div>
        );
    }
    private renderAssetTypes() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        const assetTypes: AssetType[] = [
            {
                title: 'Currency',
                imageUrl: '/images/landing/currency.png',
            },
            {
                title: 'Traditional assets',
                imageUrl: '/images/landing/stocks.png',
                style: {paddingLeft: isSmallScreen ? 41 : 56, paddingRight: isSmallScreen ? 41 : 56},
            },
            {
                title: 'Digital goods',
                imageUrl: '/images/landing/digital_goods.png',
            },
        ];
        const assets = _.map(assetTypes, (assetType: AssetType) => {
            const style = _.isUndefined(assetType.style) ? {} : assetType.style;
            return (
                <div
                    key={`asset-${assetType.title}`}
                    className="center"
                    style={{opacity: 0.8, ...style}}
                >
                    <div>
                        <img
                            src={assetType.imageUrl}
                            height="80"
                        />
                    </div>
                    <div style={{fontFamily: 'Roboto Mono', fontSize: 13.5, fontWeight: 400, opacity: 0.75}}>
                        {assetType.title}
                    </div>
                </div>
            );
        });
        return assets;
    }
    private renderLink(label: string, path: string, color: string, style?: React.CSSProperties) {
        return (
            <div
                style={{borderBottom: `1px solid ${color}`, paddingBottom: 1, height: 20, lineHeight: 1.7, ...style}}
            >
                <Link
                    to={path}
                    className="text-decoration-none"
                    style={{color, fontFamily: 'Roboto Mono'}}
                >
                    {label}
                </Link>
            </div>
        );
    }
    private renderInfoBoxes() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        const boxStyle: React.CSSProperties = {
            maxWidth: 252,
            height: 386,
            backgroundColor: '#F9F9F9',
            borderRadius: 5,
            padding: '10px 24px 24px',
        };
        const boxes = _.map(boxContents, (boxContent: BoxContent) => {
            return (
                <div
                    key={`box-${boxContent.title}`}
                    className="col lg-col-4 md-col-4 col-12 sm-pb4"
                >
                    <div
                        className={`center sm-mx-auto ${!isSmallScreen && boxContent.classNames}`}
                        style={boxStyle}
                    >
                        <div>
                            <img src={boxContent.imageUrl} style={{height: 210}} />
                        </div>
                        <div
                            className="h3"
                            style={{color: 'black', fontFamily: 'Roboto Mono'}}
                        >
                            {boxContent.title}
                        </div>
                        <div
                            className="pt2 pb2"
                            style={{fontFamily: 'Roboto Mono', fontSize: 14}}
                        >
                            {boxContent.description}
                        </div>
                    </div>
                </div>
            );

        });
        return (
            <div
                className="clearfix"
                style={{backgroundColor: CUSTOM_HERO_BACKGROUND_COLOR}}
            >
                <div
                    className="mx-auto py4 sm-mt2 clearfix"
                    style={{maxWidth: '60em'}}
                >
                    {boxes}
                </div>
            </div>
        );
    }
    private renderUseCases() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        const isMediumScreen = this.state.screenWidth === ScreenWidths.MD;

        const useCases: UseCase[] = [
            {
                imageUrl: '/images/landing/governance_icon.png',
                type: 'Decentralized governance',
                description: 'Decentralized organizations use tokens to represent ownership and \
                              guide their governance logic. 0x allows decentralized organizations \
                              to seamlessly and safely trade ownership for startup capital.',
                projectIconUrls: ['/images/landing/aragon.png'],
                classNames: 'lg-px2 md-px2',
            },
            {
                imageUrl: '/images/landing/prediction_market_icon.png',
                type: 'Prediction markets',
                description: 'Decentralized prediction market platforms generate sets of tokens that \
                              represent a financial stake in the outcomes of real-world events. 0x allows \
                              these tokens to be instantly tradable.',
                projectIconUrls: ['/images/landing/augur.png'],
                classNames: 'lg-px2 md-px2',
            },
            {
                imageUrl: '/images/landing/stable_tokens_icon.png',
                type: 'Stable tokens',
                description: 'Novel economic constructs such as stable coins require efficient, liquid \
                              markets to succeed. 0x will facilitate the underlying economic mechanisms \
                              that allow these tokens to remain stable.',
                projectIconUrls: ['/images/landing/maker.png'],
                classNames: 'lg-px2 md-px2',
            },
            {
                imageUrl: '/images/landing/loans_icon.png',
                type: 'Decentralized loans',
                description: 'Efficient lending requires liquid markets where investors can buy and re-sell loans. \
                              0x enables an ecosystem of lenders to self-organize and efficiently determine \
                              market prices for all outstanding loans.',
                projectIconUrls: ['/images/landing/dharma.png', '/images/landing/lendroid.png'],
                classNames: 'lg-pr2 md-pr2 lg-col-6 md-col-6',
                style: {width: 291, float: 'right', marginTop: !isSmallScreen ? 38 : 0},
            },
            {
                imageUrl: '/images/landing/fund_management_icon.png',
                type: 'Fund management',
                description: 'Decentralized fund management limits fund managers to investing in pre-agreed \
                              upon asset classes. Embedding 0x into fund management smart contracts enables \
                              them to enforce these security constraints.',
                projectIconUrls: ['/images/landing/melonport.png'],
                classNames: 'lg-pl2 md-pl2 lg-col-6 md-col-6',
                style: {width: 291, marginTop: !isSmallScreen ? 38 : 0},
            },
        ];

        const cases = _.map(useCases, (useCase: UseCase) => {
            const style = _.isUndefined(useCase.style) || isSmallScreen ? {} : useCase.style;
            const useCaseBoxStyle = {
                color: '#A2A2A2',
                border: '1px solid #565656',
                borderRadius: 4,
                maxWidth: isSmallScreen ? 375 : 'none',
                ...style,
            };
            const typeStyle: React.CSSProperties = {
                color: '#EBEBEB',
                fontSize: 13,
                textTransform: 'uppercase',
                fontFamily: 'Roboto Mono',
                fontWeight: 300,
            };
            return (
                <div
                    key={`useCase-${useCase.type}`}
                    className={`col lg-col-4 md-col-4 col-12 sm-pt3 sm-px3 sm-pb3 ${useCase.classNames}`}
                >
                    <div
                        className="relative p2 pb2 sm-mx-auto"
                        style={useCaseBoxStyle}
                    >
                        <div
                            className="absolute center"
                            style={{top: -35, width: 'calc(100% - 32px)'}}
                        >
                            <img src={useCase.imageUrl} style={{height: 50}} />
                        </div>
                        <div className="pt2 center" style={typeStyle}>
                            {useCase.type}
                        </div>
                        <div
                            className="pt2"
                            style={{lineHeight: 1.5, fontSize: 14, overflow: 'hidden', height: 104}}
                        >
                            {useCase.description}
                        </div>
                    </div>
                </div>
            );
        });
        return (
            <div
                className="clearfix pb4 lg-pt2 md-pt2 sm-pt4"
                style={{backgroundColor: CUSTOM_HERO_BACKGROUND_COLOR}}
            >
                <div
                    className="mx-auto pb4 pt3 mt1 sm-mt2 clearfix"
                    style={{maxWidth: '67em'}}
                >
                    {cases}
                </div>
            </div>
        );
    }
    private renderCallToAction() {
        const isSmallScreen = this.state.screenWidth === ScreenWidths.SM;
        const buttonLabelStyle: React.CSSProperties = {
            textTransform: 'none',
            fontSize: 15,
            fontWeight: 400,
        };
        const lightButtonStyle: React.CSSProperties = {
            borderRadius: 6,
            border: '1px solid #a0a0a0',
            lineHeight: '33px',
            height: 49,
        };
        const callToActionClassNames = 'col lg-col-8 md-col-8 col-12 lg-pr3 md-pr3 \
                                        lg-right-align md-right-align sm-center sm-px3 h4';
        return (
            <div
                className="clearfix pb4"
                style={{backgroundColor: CUSTOM_HERO_BACKGROUND_COLOR}}
            >
                <div
                    className="mx-auto max-width-4 pb4 mb3 clearfix"
                >
                    <div
                        className={callToActionClassNames}
                        style={{fontFamily: 'Roboto Mono', color: 'white', lineHeight: isSmallScreen ? 1.7 : 3}}
                    >
                        Get started on building the decentralized future
                    </div>
                    <div className="col lg-col-4 md-col-4 col-12 sm-center sm-pt2">
                        <Link to={WebsitePaths.ZeroExJs} className="text-decoration-none">
                            <RaisedButton
                                style={{borderRadius: 6, minWidth: 150}}
                                buttonStyle={lightButtonStyle}
                                labelColor={colors.white}
                                backgroundColor={CUSTOM_HERO_BACKGROUND_COLOR}
                                labelStyle={buttonLabelStyle}
                                label="Build on 0x"
                                onClick={_.noop}
                            />
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
    private updateScreenWidth() {
        const newScreenWidth = utils.getScreenWidth();
        if (newScreenWidth !== this.state.screenWidth) {
            this.setState({
                screenWidth: newScreenWidth,
            });
        }
    }
}

import * as _ from 'lodash';
import * as React from 'react';
import {
    Link as ScrollLink,
    animateScroll,
} from 'react-scroll';
import {Link} from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {colors} from 'material-ui/styles';
import ReactTooltip = require('react-tooltip');
import {configs} from 'ts/utils/configs';
import {constants} from 'ts/utils/constants';
import {Identicon} from 'ts/components/ui/identicon';
import {NestedSidebarMenu} from 'ts/pages/shared/nested_sidebar_menu';
import {typeDocUtils} from 'ts/utils/typedoc_utils';
import {PortalMenu} from 'ts/components/portal_menu';
import {Styles, TypeDocNode, MenuSubsectionsBySection, WebsitePaths, Docs} from 'ts/types';
import {TopBarMenuItem} from 'ts/components/top_bar_menu_item';
import {DropDownMenuItem} from 'ts/components/ui/drop_down_menu_item';

const CUSTOM_DARK_GRAY = '#231F20';
const SECTION_HEADER_COLOR = 'rgb(234, 234, 234)';

interface TopBarProps {
    userAddress?: string;
    blockchainIsLoaded: boolean;
    location: Location;
    docsVersion?: string;
    availableDocVersions?: string[];
    menuSubsectionsBySection?: MenuSubsectionsBySection;
    shouldFullWidth?: boolean;
    doc?: Docs;
    style?: React.CSSProperties;
    isNightVersion?: boolean;
}

interface TopBarState {
    isDrawerOpen: boolean;
}

const styles: Styles = {
    address: {
        marginRight: 12,
        overflow: 'hidden',
        paddingTop: 4,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 70,
    },
    addressPopover: {
        backgroundColor: colors.blueGrey500,
        color: 'white',
        padding: 3,
    },
    topBar: {
        backgroundColor: 'white',
        height: 59,
        width: '100%',
        position: 'fixed',
        top: 0,
        zIndex: 1100,
        paddingBottom: 1,
    },
    bottomBar: {
        boxShadow: 'rgba(0, 0, 0, 0.187647) 0px 1px 3px',
    },
    menuItem: {
        fontSize: 14,
        color: CUSTOM_DARK_GRAY,
        paddingTop: 6,
        paddingBottom: 6,
        marginTop: 17,
        cursor: 'pointer',
        fontWeight: 400,
    },
};

export class TopBar extends React.Component<TopBarProps, TopBarState> {
    public static defaultProps: Partial<TopBarProps> = {
        shouldFullWidth: false,
        style: {},
        isNightVersion: false,
    };
    constructor(props: TopBarProps) {
        super(props);
        this.state = {
            isDrawerOpen: false,
        };
    }
    public render() {
        const isNightVersion = this.props.isNightVersion;
        const isFullWidthPage = this.props.shouldFullWidth;
        const parentClassNames = `flex mx-auto ${isFullWidthPage ? 'pl2' : 'max-width-4'}`;
        const developerSectionMenuItems = [
            <Link
                key="subMenuItem-zeroEx"
                to={WebsitePaths.ZeroExJs}
                className="text-decoration-none"
            >
                <MenuItem style={{fontSize: styles.menuItem.fontSize}} primaryText="0x.js" />
            </Link>,
            <Link
                key="subMenuItem-smartContracts"
                to={WebsitePaths.SmartContracts}
                className="text-decoration-none"
            >
                <MenuItem style={{fontSize: styles.menuItem.fontSize}} primaryText="Smart Contracts" />
            </Link>,
            <a
                key="subMenuItem-standard-relayer-api"
                target="_blank"
                className="text-decoration-none"
                href={constants.STANDARD_RELAYER_API_GITHUB}
            >
                <MenuItem style={{fontSize: styles.menuItem.fontSize}} primaryText="Standard Relayer API" />
            </a>,
            <a
                key="subMenuItem-github"
                target="_blank"
                className="text-decoration-none"
                href={constants.GITHUB_URL}
            >
                <MenuItem style={{ fontSize: styles.menuItem.fontSize }} primaryText="GitHub" />
            </a>,
            <a
                key="subMenuItem-whitePaper"
                target="_blank"
                className="text-decoration-none"
                href={`${WebsitePaths.Whitepaper}`}
            >
                <MenuItem style={{fontSize: styles.menuItem.fontSize}} primaryText="Whitepaper" />
            </a>,
        ];
        const bottomBorderStyle = this.shouldDisplayBottomBar() ? styles.bottomBar : {};
        const fullWithClassNames = isFullWidthPage ? 'pr4' : '';
        const logoUrl = isNightVersion ? '/images/protocol_logo_white.png' : '/images/protocol_logo_black.png';
        return (
            <div style={{...styles.topBar, ...bottomBorderStyle, ...this.props.style}} className="pb1">
                <div className={parentClassNames}>
                    <div className="col col-2 sm-pl2 md-pl2 lg-pl0" style={{paddingTop: 15}}>
                        <Link to={`${WebsitePaths.Home}`} className="text-decoration-none">
                            <img src={logoUrl} height="30" />
                        </Link>
                    </div>
                    <div className={`col col-${isFullWidthPage ? '8' : '9'} lg-hide md-hide`} />
                    <div className={`col col-${isFullWidthPage ? '6' : '5'} sm-hide xs-hide`} />
                    {!this.isViewingPortal() &&
                        <div className={`col col-${isFullWidthPage ? '4' : '5'} ${fullWithClassNames} lg-pr0 md-pr2 sm-hide xs-hide`}>
                            <div className="flex justify-between">
                                <DropDownMenuItem
                                    title="Developers"
                                    subMenuItems={developerSectionMenuItems}
                                    style={styles.menuItem}
                                    isNightVersion={isNightVersion}
                                />
                                <TopBarMenuItem
                                    title="Wiki"
                                    path={`${WebsitePaths.Wiki}`}
                                    style={styles.menuItem}
                                    isNightVersion={isNightVersion}
                                />
                                <TopBarMenuItem
                                    title="About"
                                    path={`${WebsitePaths.About}`}
                                    style={styles.menuItem}
                                    isNightVersion={isNightVersion}
                                />
                                <TopBarMenuItem
                                    title="Portal DApp"
                                    path={`${WebsitePaths.Portal}`}
                                    isPrimary={true}
                                    style={styles.menuItem}
                                    className={`${isFullWidthPage && 'md-hide'}`}
                                    isNightVersion={isNightVersion}
                                />
                            </div>
                        </div>
                    }
                    {this.props.blockchainIsLoaded && !_.isEmpty(this.props.userAddress) &&
                        <div className="col col-5">
                            {this.renderUser()}
                        </div>
                    }
                    {!this.isViewingPortal() &&
                        <div
                            className={`col ${isFullWidthPage ? 'col-2 pl2' : 'col-1'} md-hide lg-hide`}
                        >
                            <div
                                style={{fontSize: 25, color: isNightVersion ? 'white' : 'black', cursor: 'pointer', paddingTop: 16}}
                            >
                                <i
                                    className="zmdi zmdi-menu"
                                    onClick={this.onMenuButtonClick.bind(this)}
                                />
                            </div>
                        </div>
                    }
                </div>
                {this.renderDrawer()}
            </div>
        );
    }
    private renderDrawer() {
        return (
            <Drawer
                open={this.state.isDrawerOpen}
                docked={false}
                openSecondary={true}
                onRequestChange={this.onMenuButtonClick.bind(this)}
            >
                {this.renderPortalMenu()}
                {this.renderDocsMenu()}
                {this.renderWiki()}
                <div className="pl1 py1 mt3" style={{backgroundColor: SECTION_HEADER_COLOR}}>Website</div>
                <Link to={WebsitePaths.Home} className="text-decoration-none">
                    <MenuItem className="py2">Home</MenuItem>
                </Link>
                <Link to={`${WebsitePaths.Wiki}`} className="text-decoration-none">
                    <MenuItem className="py2">Wiki</MenuItem>
                </Link>
                {!this.isViewing0xjsDocs() &&
                    <Link to={WebsitePaths.ZeroExJs} className="text-decoration-none">
                        <MenuItem className="py2">0x.js Docs</MenuItem>
                    </Link>
                }
                {!this.isViewingSmartContractsDocs() &&
                    <Link to={WebsitePaths.SmartContracts} className="text-decoration-none">
                        <MenuItem className="py2">Smart Contract Docs</MenuItem>
                    </Link>
                }
                {!this.isViewingPortal() &&
                    <Link to={`${WebsitePaths.Portal}`} className="text-decoration-none">
                        <MenuItem className="py2">Portal DApp</MenuItem>
                    </Link>
                }
                <a
                    className="text-decoration-none"
                    target="_blank"
                    href={`${WebsitePaths.Whitepaper}`}
                >
                    <MenuItem className="py2">Whitepaper</MenuItem>
                </a>
                <Link to={`${WebsitePaths.About}`} className="text-decoration-none">
                    <MenuItem className="py2">About</MenuItem>
                </Link>
                <a
                    className="text-decoration-none"
                    target="_blank"
                    href={constants.BLOG_URL}
                >
                    <MenuItem className="py2">Blog</MenuItem>
                </a>
                <Link to={`${WebsitePaths.FAQ}`} className="text-decoration-none">
                    <MenuItem
                        className="py2"
                        onTouchTap={this.onMenuButtonClick.bind(this)}
                    >
                        FAQ
                    </MenuItem>
                </Link>
            </Drawer>
        );
    }
    private renderDocsMenu() {
        if (!this.isViewing0xjsDocs() && !this.isViewingSmartContractsDocs()) {
            return;
        }

        const topLevelMenu = this.isViewing0xjsDocs() ?
            typeDocUtils.getFinal0xjsMenu(this.props.docsVersion) :
            constants.menuSmartContracts;

        const sectionTitle = this.isViewing0xjsDocs() ? '0x.js Docs' : 'Smart contract Docs';
        return (
            <div className="lg-hide md-hide">
                <div className="pl1 py1" style={{backgroundColor: SECTION_HEADER_COLOR}}>{sectionTitle}</div>
                <NestedSidebarMenu
                    topLevelMenu={topLevelMenu}
                    menuSubsectionsBySection={this.props.menuSubsectionsBySection}
                    shouldDisplaySectionHeaders={false}
                    onMenuItemClick={this.onMenuButtonClick.bind(this)}
                    selectedVersion={this.props.docsVersion}
                    doc={this.props.doc}
                    versions={this.props.availableDocVersions}
                />
            </div>
        );
    }
    private renderWiki() {
        if (!this.isViewingWiki()) {
            return;
        }

        return (
            <div className="lg-hide md-hide">
                <div className="pl1 py1" style={{backgroundColor: SECTION_HEADER_COLOR}}>0x Protocol Wiki</div>
                <NestedSidebarMenu
                    topLevelMenu={this.props.menuSubsectionsBySection}
                    menuSubsectionsBySection={this.props.menuSubsectionsBySection}
                    shouldDisplaySectionHeaders={false}
                    onMenuItemClick={this.onMenuButtonClick.bind(this)}
                />
            </div>
        );
    }
    private renderPortalMenu() {
        if (!this.isViewingPortal()) {
            return;
        }

        return (
            <div className="lg-hide md-hide">
                <div className="pl1 py1" style={{backgroundColor: SECTION_HEADER_COLOR}}>Portal DApp</div>
                <PortalMenu
                    menuItemStyle={{color: 'black'}}
                    onClick={this.onMenuButtonClick.bind(this)}
                />
            </div>
        );
    }
    private renderUser() {
        const userAddress = this.props.userAddress;
        const identiconDiameter = 26;
        return (
            <div
                className="flex right lg-pr0 md-pr2 sm-pr2"
                style={{paddingTop: 16}}
            >
                <div
                    style={styles.address}
                    data-tip={true}
                    data-for="userAddressTooltip"
                >
                    {!_.isEmpty(userAddress) ? userAddress : ''}
                </div>
                <ReactTooltip id="userAddressTooltip">{userAddress}</ReactTooltip>
                <div>
                    <Identicon address={userAddress} diameter={identiconDiameter} />
                </div>
            </div>
        );
    }
    private onMenuButtonClick() {
        this.setState({
            isDrawerOpen: !this.state.isDrawerOpen,
        });
    }
    private isViewingPortal() {
        return _.includes(this.props.location.pathname, WebsitePaths.Portal);
    }
    private isViewingFAQ() {
        return _.includes(this.props.location.pathname, WebsitePaths.FAQ);
    }
    private isViewing0xjsDocs() {
        return _.includes(this.props.location.pathname, WebsitePaths.ZeroExJs);
    }
    private isViewingSmartContractsDocs() {
        return _.includes(this.props.location.pathname, WebsitePaths.SmartContracts);
    }
    private isViewingWiki() {
        return _.includes(this.props.location.pathname, WebsitePaths.Wiki);
    }
    private shouldDisplayBottomBar() {
        return this.isViewingWiki() || this.isViewing0xjsDocs() || this.isViewingFAQ() ||
               this.isViewingSmartContractsDocs();
    }
}

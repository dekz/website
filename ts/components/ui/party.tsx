import * as _ from 'lodash';
import * as React from 'react';
import {CopyIcon} from 'ts/components/ui/copy_icon';
import ReactTooltip = require('react-tooltip');
import {Identicon} from 'ts/components/ui/identicon';
import {Styles} from 'ts/types';

const MIN_ADDRESS_WIDTH = 70;

interface PartyProps {
    label: string;
    address: string;
    identiconDiameter: number;
    identiconStyle?: React.CSSProperties;
    noAddressLabel?: string;
}

interface PartyState {}

export class Party extends React.Component<PartyProps, PartyState> {
    public static defaultProps: Partial<PartyProps> = {
        identiconStyle: {},
        noAddressLabel: 'Anybody',
    };
    public render() {
        const label = this.props.label;
        const address = this.props.address;
        const tooltipId = `${label}-${address}-tooltip`;
        const identiconDiameter = this.props.identiconDiameter;
        const addressWidth = identiconDiameter > MIN_ADDRESS_WIDTH ?
                             identiconDiameter : MIN_ADDRESS_WIDTH;
        const addressEnds = `${address.substring(0, 6)}...${address.substr(-4)}`;
        return (
            <div style={{overflow: 'hidden'}}>
                <div className="pb1 center">{label}</div>
                <Identicon
                    address={this.props.address}
                    diameter={identiconDiameter}
                    style={this.props.identiconStyle}
                />
                <div
                    className="mx-auto center pt1"
                >
                    {!_.isEmpty(address) &&
                        <div className="pr1 inline">
                            <CopyIcon data={address}/>
                        </div>
                    }
                    <div
                        className="inline"
                        style={{fontSize: 13}}
                        data-tip={true}
                        data-for={tooltipId}
                    >
                        {!_.isEmpty(address) ? addressEnds : this.props.noAddressLabel}
                    </div>
                </div>
                {!_.isEmpty(address) && <ReactTooltip id={tooltipId}>{address}</ReactTooltip>}
            </div>
        );
    }
}

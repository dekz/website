import * as _ from 'lodash';
import * as React from 'react';

const CUSTOM_GRAY = '#4A4A4A';

interface DistributionProps {}

const distributionEntities = [
    {
        percentage: '50%',
        recipient: 'Token Launch',
    },
    {
        percentage: '15%',
        recipient: 'Retained by 0x',
    },
    {
        percentage: '15%',
        recipient: 'External Developer Fund',
    },
    {
        percentage: '10%',
        recipient: 'Founding Team',
    },
    {
        percentage: '10%',
        recipient: 'Early Investors & Advisors',
    },
];

export function Distribution(props: DistributionProps) {
    return (
        <div className="pb4">
            <div className="mx-auto max-width-4 center pt2">
                <h1 className="thin">TOKEN SALE TERMS</h1>
                <div className="flex pt2">
                    <div className="col col-6">
                        <div
                            className="pb2 thin"
                            style={{textAlign: 'center', fontSize: 24, color: CUSTOM_GRAY}}
                        >
                            ZRX Distribution
                        </div>
                        <div className="center" style={{width: '100%'}}>
                            <img
                                style={{width: 350}}
                                src="/images/zrx_pie_chart.png"
                            />
                        </div>
                    </div>
                    <div className="col col-6" style={{textAlign: 'left', fontSize: 20}}>
                        <div className="pb2 thin">
                            <span style={{color: CUSTOM_GRAY}}>
                                Maximum cap on token sale:{' '}
                            </span>
                            <span className="bold">
                                $24 million
                            </span>
                        </div>
                        <div>
                            <span className="thin" style={{color: CUSTOM_GRAY}}>
                                Total token supply:{' '}
                            </span>
                            <span className="bold">
                                1 billion (1,000,000,000) ZRX
                            </span>
                            <div className="thin" style={{color: CUSTOM_GRAY}}>
                                of which:
                            </div>
                            {renderBreakdownList()}
                            <div className="thin" style={{color: CUSTOM_GRAY}}>
                                <div className="pb1">Token type: <span className="bold">Ethereum ERC20</span></div>
                                <div>Purchase method accepted: <span className="bold">ETH</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function renderBreakdownList() {
    const listItems = _.map(distributionEntities, distributionEntity => {
        return (
            <li>
                <span className="bold">{distributionEntity.percentage}</span>{' '}
                <span className="pl1" style={{color: CUSTOM_GRAY}}>
                    {distributionEntity.recipient}
                </span>
            </li>
        );
    });
    return (
        <ul>
            {listItems}
        </ul>
    );
}

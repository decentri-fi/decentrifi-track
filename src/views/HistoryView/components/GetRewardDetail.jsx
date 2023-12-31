import BigNumber from "bignumber.js";
import React from "react";
import tw from "twin.macro";
import FallbackImage from "../../../components/Image/FallbackImage";

const Container = tw.div`w-full flex flex-col lg:flex-row px-2 py-2`
const TypeColumn = tw.div`lg:w-1/6 w-full text-center `
const TypeLabel = tw.span`py-1 px-3 font-medium rounded bg-yellow-200 mx-4 my-3 `

const AmountColumn = tw.div`lg:w-1/3 w-1/2 text-xs flex flex-col items-center text-center font-mono`
const SymbolColumn = tw.div`w-full lg:w-1/5 text-right grid  justify-items-center lg:justify-items-end`
const Center = tw.div`flex items-center`

const AssetText = tw.span`text-green-500 font-thin`
const AssetLogo = tw.div`w-5 h-5`

const FromOrToColumn = tw.div`lg:w-1/3 w-1/2  lg:text-right font-mono text-xs font-thin`

export default function GetRewardDetail({event, index}) {

    const TheContainer = (() => {
        if (index % 2 === 0) {
            return tw(Container)`bg-white`
        } else {
            return tw(Container)`bg-gray-100`
        }
    })();

    return (
        <TheContainer>
            <TypeColumn>
                <TypeLabel>get reward</TypeLabel>
            </TypeColumn>
            <AmountColumn>
                {normalized('+', event.metadata.amount, event.metadata.asset.decimals)}
            </AmountColumn>
            <SymbolColumn>
                <Center>
                    <AssetText> {event.metadata.asset.symbol}</AssetText>
                    &nbsp;
                    <AssetLogo><FallbackImage src={event.metadata.asset.logo}
                                              alt={event.metadata.asset.symbol}/></AssetLogo>
                </Center>
            </SymbolColumn>
            <FromOrToColumn>
            </FromOrToColumn>
        </TheContainer>
    );
}

const normalized = function (sign, amount, decimals = 18) {
    if (amount == null) {
        return "0.00"
    } else {
        const result = new BigNumber(amount).dividedBy(
            new BigNumber(10).exponentiatedBy(decimals)
        )
        if (new BigNumber(0).isLessThan(result)) {
            return `~ ${sign}${result.toFixed(6, 0)}`;
        } else {
            return <>&nbsp;&nbsp;&nbsp;0.00</>;
        }
    }
};
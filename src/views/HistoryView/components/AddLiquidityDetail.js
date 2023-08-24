import BigNumber from "bignumber.js";
import React from "react";
import FallbackImage from "../../../components/Image/FallbackImage";
import tw from "twin.macro";

const Container = tw.div`w-full flex px-2`
const TypeColumn = tw.div`lg:w-1/6 w-1/2 `
const TypeLabel = tw.span`px-2 font-medium  rounded bg-blue-100 mx-4 my-1`

const AmountColumn = tw.div`lg:w-1/3 w-1/2 flex items-center text-center font-mono`
const SymbolColumn = tw.div`w-1/2 lg:w-1/5 text-right grid  justify-items-center lg:justify-items-end`
const Center = tw.div`flex items-center`

const AssetLogo = tw.div`w-5 h-5`
const AssetText = tw.span`text-green-500 font-thin`
const FromOrToColumn = tw.div`lg:w-1/3 w-1/2  lg:text-right font-mono`

export default function AddLiquidityDetail({event, owner}) {
    console.log(event);

    const amounts = event.metadata.deposits.map(deposit =>  {
        return <div>
            ~ +{deposit.amount}
        </div>
    });

    const symbols = event.metadata.deposits.map(deposit =>  {
        return <>
            <AssetText>
                {deposit.token.symbol}
            </AssetText>
            &nbsp;
            <AssetLogo><FallbackImage src={deposit.token?.logo} alt={deposit.token.symbol}/></AssetLogo>
        </>
    });

    return (
        <Container>
            <TypeColumn>
                <TypeLabel>add liquidity</TypeLabel>
            </TypeColumn>
            <AmountColumn>
                {amounts}
            </AmountColumn>
            <SymbolColumn>
                <Center>
                    {symbols}
                </Center>
            </SymbolColumn>
            <FromOrToColumn>
            </FromOrToColumn>
        </Container>
    );
}
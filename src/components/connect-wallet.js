import { ReactComponent as BitGoIcon } from "../assets/svg/bit-go-icon.svg"
import { ReactComponent as MetaTaskicon } from "../assets/svg/meta-mask-icon.svg"
import { ReactComponent as CoinbaseIcon } from "../assets/svg/coinbase-icon.svg"
import { ReactComponent as TrustWalletIcon } from "../assets/svg/trust-wallet-icon.svg"
import { ReactComponent as ExodusTextIcon } from "../assets/svg/exodus-text-icon.svg"
import { ReactComponent as ExodusIcon } from "../assets/svg/exodus-icon.svg"

const ConnectWallet = () => {
    return (
        <div className="flex items-center justify-between mt-20 w-full space-x-14">
            <BitGoIcon />
            <MetaTaskicon />
            <CoinbaseIcon />
            <TrustWalletIcon />
            <div className="flex items-center space-x-3">
                <ExodusIcon />
                <ExodusTextIcon />
            </div>
        </div>)
}
export default ConnectWallet
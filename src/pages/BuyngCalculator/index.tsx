import { Layout } from "../../components/Page/Layout";
import { PAGE_TYPE } from "../../common/constants";
import { HomePrice } from "./components/HomePrice";
import { Deposit } from "./components/Deposit";

export const BuyingCalculator = () => {
  return (
    <Layout
      pageType={PAGE_TYPE.BUYING_CALCULATOR}
    >
      <form>
        <HomePrice />
        <Deposit />
        {/* Initial deposit (25%)	50,000
Stamp duty	10,000
Valuation fee	1000
Survayors fee	600
Legal fees	1500
Electronic transfer fee	50
EPC certificate	120
Mortgage fees	1000
Total fees to pay	64,270 */}
      </form>
    </Layout>
  )
}
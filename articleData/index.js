const activeAccounts = require("./accounts");
const activeService = require("./services");

const activeAccountsList = [
  { list: activeAccounts.productLimitedItemsAccounts, name: "Limited Items" },
  {
    list: activeAccounts.productCallOfDutyAccounts,
    name: "Call of Duty Accounts",
  },
  {
    list: activeAccounts.productCallOfDutyStoreBoughtItemsAccounts,
    name: "Call of Duty Store Bought Accounts",
  },
  {
    list: activeAccounts.productCallOfDutyBlackOpsAccounts,
    name: "Call of Duty Black Ops Accounts",
  },
  {
    list: activeAccounts.productCallOfDutyWarZoneAccounts,
    name: "Call of Duty War Zone Accounts",
  },
  { list: activeAccounts.productVpnAccounts, name: "VPN Accounts" },
  { list: activeAccounts.productOtherAccounts, name: "Other Accounts" },
];

const activeServicesList = [
  { list: activeService.productInstagramServices, name: "Instagram Services" },
  { list: activeService.productYouTubeServices, name: "Youtube Services" },
  { list: activeService.productOnlyFansService, name: "OnlyFans Services" },
  { list: activeService.productTwitchServices, name: "Twitch Services" },
  { list: activeService.productTikTokServices, name: "TikTok  Services" },
  {
    list: activeService.productCallOfDutyServices,
    name: "Call of Duty Services",
  },
];

module.exports.activeAccountsList = activeAccountsList;
module.exports.activeServicesList = activeServicesList;

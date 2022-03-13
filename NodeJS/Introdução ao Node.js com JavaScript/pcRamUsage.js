const os = require("os");

setInterval(() => {
  const { arch, platform, totalmem, freemem } = os;
  const totalRamInGigabytes = totalmem() / 1024 / 1024;
  const freeRamInGigabytes = freemem() / 1024 / 1024;
  const freeRamPercentage = parseInt(freeRamInGigabytes / totalRamInGigabytes * 100);

  const stats = {
    OS: platform(),
    Arch: arch(),
    TotalRAM: `${parseInt(totalRamInGigabytes)} MB`,
    FreeRAM: `${parseInt(freeRamInGigabytes)} MB`,
    UsageRAM: `${100 - freeRamPercentage}%`
  };

  console.clear();
  console.table(stats);
  exports.stats = stats;
}, 2000);



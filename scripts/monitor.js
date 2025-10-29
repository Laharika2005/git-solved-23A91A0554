/**
 * DevOps Simulator - Unified System Monitoring Script
 * Version: 2.1.0
 * Supports both Production and Development modes
 */

const ENV = process.env.NODE_ENV || "development";

const monitorConfig = {
  interval: ENV === "production" ? 60000 : 5000, // 1 min for prod, 5s for dev
  alertThreshold: ENV === "production" ? 80 : 90,
  metricsEndpoint:
    ENV === "production"
      ? "http://localhost:8080/metrics"
      : "http://localhost:3000/metrics",
  debugMode: ENV !== "production",
  verboseLogging: ENV !== "production"
};

console.log("=================================");
console.log("DevOps Simulator - Monitor v2.1");
console.log(`Environment: ${ENV.toUpperCase()}`);
console.log("=================================");

function checkSystemHealth() {
  const timestamp = new Date().toISOString();

  if (monitorConfig.debugMode) {
    console.log(`\n[${timestamp}] === DETAILED HEALTH CHECK ===`);
  } else {
    console.log(`[${timestamp}] Checking system health...`);
  }

  // Simulated metric readings
  const cpuUsage = Math.random() * 100;
  const memUsage = Math.random() * 100;
  const diskUsage = Math.random() * 100;

  console.log(`✓ CPU usage: ${cpuUsage.toFixed(2)}%`);
  console.log(`✓ Memory usage: ${memUsage.toFixed(2)}%`);
  console.log(`✓ Disk usage: ${diskUsage.toFixed(2)}%`);

  // Development-only features
  if (monitorConfig.debugMode) {
    console.log("✓ Hot reload: Active");
    console.log("✓ Debug port: 9229");
    console.log("✓ Source maps: Enabled");
  }

  // Determine system status
  const maxUsage = Math.max(cpuUsage, memUsage, diskUsage);
  if (maxUsage > monitorConfig.alertThreshold) {
    console.log("⚠️  System Status: WARNING - High resource usage");
  } else {
    console.log("✅ System Status: HEALTHY");
  }

  if (monitorConfig.verboseLogging) {
    console.log(`Next check in ${monitorConfig.interval}ms`);
  }
}

console.log(`Monitoring every ${monitorConfig.interval}ms`);
if (monitorConfig.debugMode) console.log("Debug features enabled");

// Run first check immediately, then schedule
checkSystemHealth();
setInterval(checkSystemHealth, monitorConfig.interval);

// Extra dev-only memory usage logging
if (monitorConfig.debugMode) {
  setInterval(() => {
    const memUsage = process.memoryUsage();
    console.log("\n--- Memory Usage ---");
    console.log(`RSS: ${(memUsage.rss / 1024 / 1024).toFixed(2)} MB`);
    console.log(`Heap Used: ${(memUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
  }, 30000);
}

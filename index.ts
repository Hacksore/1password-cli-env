const bucket = process.env.R2_BUCKET ?? "none";
console.log({
  bucket: bucket,
  pulledFromVault: bucket !== "none",
});

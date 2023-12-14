const userEmail = "p@pranab.ai";

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// false values
// false, 0, "", null, undefined, NaN, 0n, -0, BigInt(0)

// truthy values
// true, 1, " ", "0", {}, [], -1, 0n, BigInt(-1), "false", function() {}

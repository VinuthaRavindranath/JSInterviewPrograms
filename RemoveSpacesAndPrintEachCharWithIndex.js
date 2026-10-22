const str = "Automation Test Engineer";

// Remove all spaces
const noSpaces = str.replace(/\s+/g, "");

// Print each character with its index
noSpaces.split("").forEach((char, index) => {
  console.log(`Index ${index}: ${char}`);
});
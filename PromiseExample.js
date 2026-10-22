const orderFoodOnSwiggy = new Promise((resolve, reject) => {
    let isDelivered = true; // Change to false to simulate cancellation/failure
    let isProcessing = true;
    console.log("Order placed! Status: Processing / Pending...");
    setTimeout(() => {
        if (isDelivered) {
            resolve("Food delivered successfully! Enjoy your meal.");
        } else {
            reject("Order cancelled. Refund initiated.");
        }
    }, 3000); // Simulates 3 seconds of delivery time
});
orderFoodOnSwiggy
    .then((message) => {
        console.log(message); // Runs if resolved
    })
    .catch((error) => {
        console.log(error); // Runs if rejected
    }); 
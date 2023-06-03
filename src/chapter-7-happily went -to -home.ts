function alicesAdventure(): void {
    console.log("Alice wakes  from dream.");
    console.log("Alice and her mom walk to the grocery store.");
  
    // Implement  adventure logic here
    const groceryList: string[] = ["fruits", "vegetables"];
  
    console.log("Alice and her mom arrive at the grocery store.");
    console.log("Alice and her mom enter the store.");
  
    for (const item of groceryList) {
      console.log(`Alice and her mom select ${item}.`);
    }
  
    console.log("Alice and her mom proceed to the checkout.");
  
    // Implement card payment logic
    const cardNumber: string = "1234 5678 9012 3456";
    const cardHolderName: string = "Alice's Mom";
    const expirationDate: string = "12/25";
    const cvv: string = "123";
  
    function makePayment(amount: number): void {
      console.log(`Card payment of $${amount} initiated.`);
      // Implement the logic to process the payment with the given card details
      console.log(`Card payment of $${amount} successful.`);
    }
  
    const totalAmount: number = 50; // Total amount to be paid
  
    makePayment(totalAmount);
  
    console.log("Alice and her mom complete their grocery shopping.");
    console.log("Alice and her mom head back home with their groceries.");
    console.log("They are happy and excited about the delicious fruits and vegetables they bought!");
  }
  
  alicesAdventure();
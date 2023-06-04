import { endAdventure, haveAdventures } from '../..';
import { askQuestion, clear, print } from '../ui/console';

interface WakeUp {
  wakeUp: () => void;
}

interface GoHome {
  goHome: (callback: () => void) => void;
}

interface BuyGroceries {
  buyGroceries: () => void;
}

// ...

export function wakeUp(): void {
  clear(true);
  print('Wait... was this all a dream?');

  const awoken: WakeUp = {
    wakeUp: () => {
      print('You have awoken in your garden 🛏 What a lovely dream.');
      print('Although...❓❓❓');
      print('What are these tarts doing here?! 🥧🥧🥧🥧🥧🥧 🤔');

      print('✅ CONGRATULATIONS! You successfully made it through Wonderland! 🥳');

      goHome();
    },
  };

  awoken.wakeUp();
}

function goHome(): void {
  const goHome: GoHome = {
    goHome: (callback: () => void) => {
      print('Alice goes back home to meet her mom.');
      print("Alice: Hi, Mom! I'm back from my adventure.");

      callback();
    },
  };

  goHome.goHome(buyGroceries);
}

function buyGroceries(): void {
  const buyGroceries: BuyGroceries = {
    buyGroceries: () => {
      clear(true);
      print("Alice and her mom went to the grocery store.");

      // Logic for buying fruits and vegetables
      const fruits: string[] = ['apple', 'banana', 'orange'];
      const vegetables: string[] = ['carrot', 'tomato', 'broccoli'];

      print("Alice and her mom are buying groceries...");
      print(`Fruits: ${fruits.join(', ')}`);
      print(`Vegetables: ${vegetables.join(', ')}`);

      print("Alice and her mom say hello to the shopkeeper.");

      // Make a card payment
      const totalAmount: number = 50; // Total amount in pounds
      const cardNumber: string = "1234567890"; // Card number

      print(`Alice and her mom make a card payment of ${totalAmount} pounds.`);
      print(`Card Number: ${cardNumber}`);

      print("Payment successful! Groceries are bought.");

      // ...

      print("Alice and her mom head back home with their groceries.");
      print("They are happy and excited about the delicious food they bought!");

      return askQuestion("Press ENTER to start your next adventure! ", haveAdventures);
    },
  };

  buyGroceries.buyGroceries();
}

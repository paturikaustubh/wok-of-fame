import { createContext, Component } from "react";

const Context = createContext();

export class Data extends Component {
  updateCart = (newItem) => {
    console.log(newItem);
    if (newItem.qnty === 0) {
      let indx = this.state.cart.findIndex(
        (element) => element.name === newItem.name
      );
      this.state.cart.splice(indx, 1);
      this.setState({
        cart: [...this.state.cart],
      });
    } else {
      if (
        this.state.cart.filter(
          (element) => element.name === newItem.name && element.name !== ""
        ).length > 0
      ) {
        const indx = this.state.cart.findIndex(
          (element) => element.name === newItem.name
        );
        this.setState(() => {
          this.state.cart[indx].qnty = newItem.qnty;
        });
        this.setState({
          cart: [...this.state.cart],
        });
      } else {
        this.setState({
          cart: [newItem, ...this.state.cart],
        });
      }
    }
  };

  setTotalPayment = (grandTotal) => {
    this.setState({ totalPayment: grandTotal });
  };

  handleEmoji = () => {
    this.setState({ enableEmojis: !this.state.enableEmojis });
  };

  setTableDetails = (newDetails) => {
    this.setState({ tableDetails: newDetails });
  };

  setLoading = (loadingState) => {
    this.setState({ loading: loadingState });
  };

  state = {
    updateCart: this.updateCart,
    handleEmoji: this.handleEmoji,
    setLoading: this.setLoading,
    setTotalPayment: this.setTotalPayment,
    setTableDetails: this.setTableDetails,
    enableEmojis: true,
    loading: false,
    specials: [
      {
        name: "Veg Chowmein",
        img: "Chowmein",
        veg: true,
        category: "main-course",
        cost: 150,
        rating: 3.0,
        details:
          "Popular Chinese item of stir fried noodles with mix vegetables soy sauce, aromatics and spices.",
        serves: 1,
      },
      {
        name: "Hot Pot",
        img: "HotPot",
        veg: true,
        category: "main-course",
        cost: 350,
        rating: 3.0,
        details:
          "The Hot Pot is a flavorsome broth and one of the most popular dishes in China, mainly in the Szechuan and Chongqing provinces.",
        serves: 1,
      },
      {
        name: "Dumplings",
        img: "Dumplings",
        veg: true,
        category: "starter",
        cost: 200,
        rating: 3.0,
        details:
          "A broad className of dishes that consist of pieces of cooked dough (made from a variety of starch sources), often wrapped around a filling.",
        serves: 1,
      },
      {
        name: "Kung Pao Chicken",
        img: "KungPaoChicken",
        veg: false,
        category: "main-course",
        cost: 300,
        rating: 3.0,
        details: `Chinese-style stir-fried chicken cubes with dried chili peppers.`,
        serves: 1,
      },
      {
        name: "Ma Po Tofu",
        img: "MaPoTofu",
        veg: false,
        category: "starter",
        cost: 200,
        rating: 3.0,
        details:
          "Set in a spicy sauce, typically a thin, oily, and bright red suspension, based on douban, and douchi, along with minced meat.",
        serves: 1,
      },
      {
        name: "Wonton Soup",
        img: "WontonSoup",
        veg: false,
        category: "starter",
        cost: 250,
        rating: 3.0,
        details:
          "Standard of Chinese cuisine and made from seasoned chicken broth with filled wontons.",
        serves: 1,
      },
    ],
    menu: [
      {
        title: "Starters🍲",
        items: [
          {
            name: "Veg Soup",
            img: "VegSoup",
            veg: true,
            category: "starter",
            item: "soup",
            cost: 60,
            rating: 2.5,
            serves: 1,
            details:
              "A medley of garden-fresh vegetables in seasoned broth, delivering comfort and flavor.",
          },
          {
            name: "Veg Sweet Corn Soup",
            img: "SweetCornSoup",
            veg: true,
            category: "starter",
            item: "soup",
            cost: 60,
            rating: 3.0,
            serves: 1,
            details:
              "A flavorful blend of garden-fresh vegetables and tender sweet corn in a delectably seasoned broth.",
          },
          {
            name: "Veg Hot and Sour Soup",
            img: "VegHotAndSourSoup",
            veg: true,
            category: "starter",
            item: "soup",
            cost: 60,
            rating: 3.5,
            serves: 1,
            details:
              "Fresh vegetables in a flavorful, well-seasoned broth with a zesty kick.",
          },
          {
            name: "Tomato Soup",
            img: "TomatoSoup",
            veg: true,
            category: "starter",
            item: "soup",
            cost: 70,
            rating: 4.0,
            serves: 1,
            details:
              "A Chinese culinary delight, crafted from ripe tomatoes and expertly simmered to offer a comforting and richly flavorful experience.",
          },
          {
            name: "Chicken Soup",
            img: "ChickenSoup",
            veg: false,
            category: "starter",
            item: "soup",
            cost: 70,
            rating: 3.5,
            serves: 1,
          },
          {
            name: "Chicken Manchow",
            img: "ChickenManchow",
            veg: false,
            category: "starter",
            item: "soup",
            cost: 80,
            rating: 4,
            serves: 1,
            details:
              "A delectable fusion of tender chicken, vibrant vegetables, and aromatic spices in a rich broth, capturing the essence of Chinese cuisine.",
          },
          {
            name: "Chicken Noodles Soup",
            img: "ChickenNoodlesSoup",
            veg: false,
            category: "starter",
            item: "soup",
            cost: 80,
            rating: 3.5,
            serves: 1,
            details:
              "A comforting blend of succulent chicken, hearty noodles, and aromatic herbs in a soothing broth, delivering a warm and satisfying taste of Chinese comfort.",
          },
          {
            name: "Wonton Soup",
            img: "WontonSoup",
            veg: false,
            category: "starter",
            cost: 250,
            rating: 3.0,
            details:
              "Standard of Chinese cuisine and made from seasoned chicken broth with filled wontons.",
            serves: 1,
          },
          {
            name: "Paneer 65",
            img: "Paneer65",
            veg: true,
            category: "starter",
            item: "paneer",
            cost: 160,
            rating: 4.0,
            serves: 4,
          },
          {
            name: "Chilli Paneer",
            img: "ChilliPaneer",
            veg: true,
            category: "starter",
            item: "paneer",
            cost: 130,
            rating: 3.5,
            serves: 4,
          },
          {
            name: "Veg Manchurian",
            img: "VegManchurian",
            veg: true,
            category: "starter",
            item: "manchurian",
            cost: 120,
            rating: 4.0,
            details: "This is a very good starter for starting with a starter.",
            serves: 4,
          },
          {
            name: "Veg Gravy Manchurian",
            img: "VegGravyManchurian",
            veg: true,
            category: "starter",
            item: "manchurian",
            cost: 150,
            rating: 3.0,
            serves: 4,
          },
          {
            name: "Garlic Paneer",
            img: "GarlicPaneer",
            veg: true,
            category: "starter",
            item: "paneer",
            cost: 140,
            rating: 3.0,
            serves: 4,
          },
          {
            name: "Chicken 65",
            img: "Chicken65",
            veg: false,
            category: "starter",
            item: "chicken",
            cost: 160,
            rating: 4,
            serves: 4,
          },
          {
            name: "Chilli Chicken",
            img: "ChilliChicken",
            veg: false,
            category: "starter",
            item: "chicken",
            cost: 130,
            rating: 3.5,
            serves: 4,
          },
          {
            name: "Chicken Manchurian",
            img: "ChickenManchurian",
            veg: false,
            category: "starter",
            item: "chicken",
            cost: 130,
            rating: 3.0,
            serves: 4,
          },
          {
            name: "Chicken Garlic",
            img: "ChickenGarlic",
            veg: false,
            category: "starter",
            item: "chicken",
            cost: 140,
            rating: 3.5,
            serves: 4,
          },
          {
            name: "Ma Po Tofu",
            img: "MaPoTofu",
            veg: false,
            category: "starter",
            cost: 200,
            rating: 3.0,
            details:
              "Set in a spicy sauce, typically a thin, oily, and bright red suspension, based on douban, and douchi, along with minced meat.",
            serves: 4,
          },
          {
            name: "Dumplings",
            img: "Dumplings",
            veg: true,
            category: "starter",
            cost: 200,
            rating: 3.0,
            details:
              "A broad className of dishes that consist of pieces of cooked dough (made from a variety of starch sources), often wrapped around a filling.",
            serves: 2,
          },
        ],
      },
      {
        title: "Main Course🍛",
        items: [
          {
            name: "Veg Fried Rice",
            img: "VegFriedRice",
            veg: true,
            category: "main-course",
            item: "rice",
            cost: 90,
            rating: 3.0,
            serves: 2,
          },
          {
            name: "Schezwan Fried Rice",
            img: "SchezwanFriedRice",
            veg: true,
            category: "main-course",
            item: "rice",
            cost: 100,
            rating: 3.5,
            serves: 2,
          },
          {
            name: "Hong Kong Fried Rice",
            img: "HongKongFriedRice",
            veg: true,
            category: "main-course",
            item: "rice",
            cost: 110,
            rating: 3.5,
            serves: 2,
          },
          {
            name: "Triple Schezwan Fried Rice",
            img: "TrippleSchezwanFriedRice",
            veg: true,
            category: "main-coure",
            item: "rice",
            cost: 140,
            rating: 4.0,
            serves: 2,
          },
          {
            name: "Chicken Fried Rice",
            img: "ChickenFriedRice",
            veg: false,
            category: "main-course",
            item: "rice",
            cost: 100,
            rating: 3.0,
            serves: 2,
          },
          {
            name: "Chicken Schezwan Fried Rice",
            img: "ChickenSchezwanFriedRice",
            veg: false,
            category: "main-course",
            item: "rice",
            cost: 130,
            rating: 3.5,
            serves: 2,
          },
          {
            name: "Chicken Triple Schezwan Fried Rice",
            img: "ChickenTripleSchezwanFriedRice",
            veg: false,
            category: "main-course",
            item: "rice",
            cost: 150,
            rating: 4.0,
            serves: 2,
          },
          {
            name: "Egg Fried Rice",
            img: "EggFriedRice",
            veg: false,
            category: "main-course",
            item: "rice",
            cost: 90,
            rating: 3.0,
            serves: 2,
          },
          {
            name: "Chicken Hong Kong Fried Rice",
            img: "ChickenHongKongFriedRice",
            veg: false,
            category: "main-course",
            item: "rice",
            cost: 130,
            rating: 3.5,
            serves: 2,
          },
          {
            name: "Veg Noodles",
            img: "VegNoodles",
            veg: true,
            category: "main-course",
            item: "noodles",
            cost: 80,
            rating: 3.0,
            serves: 2,
          },
          {
            name: "Veg Hakka Noodles",
            img: "VegHakkaNoodles",
            veg: true,
            category: "main-course",
            item: "noodles",
            cost: 90,
            rating: 3.5,
            serves: 2,
          },
          {
            name: "Veg Chowmein",
            img: "Chowmein",
            veg: true,
            category: "main-course",
            cost: 150,
            rating: 3.0,
            details:
              "Popular Chinese item of stir fried noodles with mix vegetables soy sauce, aromatics and spices.",
            serves: 2,
          },
          {
            name: "Hot Pot",
            img: "HotPot",
            veg: true,
            category: "main-course",
            cost: 350,
            rating: 3.0,
            details:
              "The Hot Pot is a flavorsome broth and one of the most popular dishes in China, mainly in the Szechuan and Chongqing provinces.",
            serves: 4,
          },
          {
            name: "Veg Schezwan Noodles",
            img: "VegSchezwanNoodles",
            veg: true,
            category: "main-course",
            item: "noodles",
            cost: 100,
            rating: 4.0,
            serves: 2,
          },
          {
            name: "Veg Hong Kong Noodles",
            img: "VegHongKongNoodles",
            veg: true,
            category: "main-course",
            item: "noodles",
            cost: 110,
            rating: 4.0,
            serves: 2,
          },
          {
            name: "Egg Noodles",
            img: "EggNoodles",
            veg: false,
            category: "main-course",
            item: "noodles",
            cost: 90,
            rating: 3.0,
            serves: 2,
          },
          {
            name: "Chicken Noodles",
            img: "ChickenNoodles",
            veg: false,
            category: "main-course",
            item: "noodles",
            cost: 100,
            rating: 3.0,
            serves: 2,
          },
          {
            name: "Chicken Schezwan Noodles",
            img: "ChickenSchezwanNoodles",
            veg: false,
            category: "main-course",
            item: "noodles",
            cost: 120,
            rating: 3.5,
            serves: 2,
          },
          {
            name: "Kung Pao Chicken",
            img: "KungPaoChicken",
            veg: false,
            category: "main-course",
            cost: 300,
            rating: 3.0,
            details: `Chinese-style stir-fried chicken cubes with dried chili peppers.`,
            serves: 2,
          },
          {
            name: "Chicken Hong Kong Noodles",
            img: "ChickenHongKongNoodles",
            veg: false,
            category: "main-course",
            item: "noodles",
            cost: 130,
            rating: 3.5,
            serves: 2,
          },
          {
            name: "Chicken Chowmein",
            img: "ChickenChowmein",
            veg: false,
            category: "main-course",
            item: "noodles",
            cost: 100,
            rating: 4.0,
            serves: 2,
          },
        ],
      },
      {
        title: "Desserts🍨",
        items: [
          {
            name: "Vanilla Ice Cream",
            img: "VanillaIceCream",
            veg: true,
            category: "dessert",
            item: "ice-cream",
            cost: 30,
            rating: 3.0,
            serves: 1,
          },
          {
            name: "Chocolate Ice Cream",
            img: "ChocolateIceCream",
            veg: true,
            category: "dessert",
            item: "ice-cream",
            cost: 40,
            rating: 3.5,
            serves: 1,
          },
          {
            name: "Butterscotch Ice Cream",
            img: "ButterscotchIceCream",
            veg: true,
            category: "dessert",
            item: "ice-cream",
            cost: 40,
            rating: 3.0,
            serves: 1,
          },
          {
            name: "Blueberry Ice Cream",
            veg: true,
            img: "BlueberryIceCream",
            category: "dessert",
            item: "ice-cream",
            cost: 40,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Strawberry Ice Cream",
            img: "StrawberryIceCream",
            veg: true,
            category: "dessert",
            item: "ice-cream",
            cost: 40,
            rating: 3.0,
            serves: 1,
          },
        ],
      },
      {
        title: "Baverages☕",
        items: [
          {
            name: "Coca Cola",
            img: "CocaCola",
            veg: true,
            category: "baverage",
            item: "aerated",
            cost: 40,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Sprite",
            img: "Sprite",
            veg: true,
            category: "baverage",
            item: "aerated",
            cost: 40,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Thums Up",
            img: "ThumsUp",
            veg: true,
            category: "baverage",
            item: "aerated",
            cost: 40,
            rating: 3.5,
            serves: 1,
          },
          {
            name: "Lassi",
            img: "Lassi",
            veg: true,
            category: "baverage",
            item: "shake",
            cost: 30,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Lemon Tea",
            img: "LemonTea",
            veg: true,
            category: "baverage",
            items: "tea",
            cost: 30,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Coffee",
            img: "Coffee",
            veg: true,
            category: "baverage",
            items: "coffee",
            cost: 30,
            rating: 4.5,
            serves: 1,
          },
        ],
      },
    ],
    cart: [],
    totalPayment: 0,
    tableDetails: {
      table: "A/C",
      count: 4,
      date: "",
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export let Consumer = Context.Consumer;
export let ConsumerEffect = Context;

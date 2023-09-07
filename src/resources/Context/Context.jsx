import { createContext, Component } from "react";

const Context = createContext();

export class Data extends Component {
  updateCart = (newItem) => {
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
        category: 1,
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
        category: 1,
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
        category: 0,
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
        category: 1,
        cost: 300,
        rating: 3.0,
        details: `Chinese-style stir-fried chicken cubes with dried chili peppers.`,
        serves: 1,
      },
      {
        name: "Ma Po Tofu",
        img: "MaPoTofu",
        veg: false,
        category: 0,
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
        category: 0,
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
            category: 0,
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
            category: 0,
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
            category: 0,
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
            category: 0,
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
            category: 0,
            item: "soup",
            cost: 70,
            rating: 3.5,
            serves: 1,
            details:
              "Simmered to perfection with tender chicken pieces and an aromatic blend of herbs and vegetables, offering warmth and comfort in every spoonful.",
          },
          {
            name: "Chicken Manchow",
            img: "ChickenManchow",
            veg: false,
            category: 0,
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
            category: 0,
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
            category: 0,
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
            category: 0,
            item: "paneer",
            cost: 160,
            rating: 4.0,
            serves: 4,
            details:
              "A popular vegetarian delight featuring bite-sized cubes of paneer marinated in a spicy and tangy blend of Indian spices, fried to crispy perfection, and served as a mouthwatering appetizer.",
          },
          {
            name: "Chilli Paneer",
            img: "ChilliPaneer",
            veg: true,
            category: 0,
            item: "paneer",
            cost: 130,
            rating: 3.5,
            serves: 4,
            details:
              "A delightful Indo-Chinese creation, showcasing succulent paneer cubes stir-fried with colorful bell peppers, onions, and a spicy, flavorful sauce, delivering a perfect balance of heat and tanginess.",
          },
          {
            name: "Veg Manchurian",
            img: "VegManchurian",
            veg: true,
            category: 0,
            item: "manchurian",
            cost: 120,
            rating: 4.0,
            details:
              "A delectable dish that features vegetable dumplings soaked in a flavorful Manchurian sauce, creating a harmonious blend of savory and tangy flavors, making it a favorite among Chinese cuisine enthusiasts.",
            serves: 4,
          },
          {
            name: "Veg Gravy Manchurian",
            img: "VegGravyManchurian",
            veg: true,
            category: 0,
            item: "manchurian",
            cost: 150,
            rating: 3.0,
            serves: 4,
            details:
              "A delicious fusion of crispy vegetable balls bathed in a rich, savory gravy with an enticing blend of aromatic spices, creating a harmonious mix of flavors and textures.",
          },
          {
            name: "Garlic Paneer",
            img: "GarlicPaneer",
            veg: true,
            category: 0,
            item: "paneer",
            cost: 140,
            rating: 3.0,
            serves: 4,
            details:
              "A savory vegetarian delight featuring tender paneer cubes tossed in a fragrant garlic-infused sauce, resulting in a delightful blend of creamy and garlicky goodness.",
          },
          {
            name: "Chicken 65",
            img: "Chicken65",
            veg: false,
            category: 0,
            item: "chicken",
            cost: 160,
            rating: 4,
            serves: 4,
            details:
              "A spicy and tangy South Indian delicacy, featuring bite-sized, marinated chicken pieces, deep-fried to golden perfection, and seasoned with a symphony of aromatic spices, offering an explosion of flavors in every bite.",
          },
          {
            name: "Chilli Chicken",
            img: "ChilliChicken",
            veg: false,
            category: 0,
            item: "chicken",
            cost: 130,
            rating: 3.5,
            serves: 4,
            details:
              "An Indo-Chinese favorite, showcasing succulent chicken pieces tossed in a fiery chili sauce with vibrant bell peppers and onions, delivering a spicy and savory experience that's hard to resist.",
          },
          {
            name: "Chicken Manchurian",
            img: "ChickenManchurian",
            veg: false,
            category: 0,
            item: "chicken",
            cost: 130,
            rating: 3.0,
            serves: 4,
            details:
              "A tantalizing Indo-Chinese dish featuring tender chicken pieces coated in a flavorful batter, fried to a crispy texture, and then simmered in a delectable Manchurian sauce, resulting in a delightful blend of crunch and savory goodness.",
          },
          {
            name: "Chicken Garlic",
            img: "ChickenGarlic",
            veg: false,
            category: 0,
            item: "chicken",
            cost: 140,
            rating: 3.5,
            serves: 4,
            details:
              "A mouthwatering dish where succulent chicken pieces are cooked to perfection in a fragrant garlic-infused sauce, creating a delightful symphony of tender meat and rich garlic flavor.",
          },
          {
            name: "Ma Po Tofu",
            img: "MaPoTofu",
            veg: false,
            category: 0,
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
            category: 0,
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
            category: 1,
            item: "rice",
            cost: 90,
            rating: 3.0,
            serves: 2,
            details:
              "A classic Asian dish showcasing fluffy rice stir-fried with a colorful medley of fresh vegetables and aromatic seasonings, delivering a satisfying and flavorful combination that's both hearty and delicious.",
          },
          {
            name: "Schezwan Fried Rice",
            img: "SchezwanFriedRice",
            veg: true,
            category: 1,
            item: "rice",
            cost: 100,
            rating: 3.5,
            serves: 2,
            details:
              "An exciting fusion of Chinese and Indian cuisines, where steamed rice is wok-fried with vibrant vegetables and bold Schezwan sauce, resulting in a fiery and flavorful culinary experience.",
          },
          {
            name: "Hong Kong Fried Rice",
            img: "HongKongFriedRice",
            veg: true,
            category: 1,
            item: "rice",
            cost: 110,
            rating: 3.5,
            serves: 2,
            details:
              "A delightful dish that combines the goodness of fluffy rice with a diverse mix of vegetables and subtle seasonings, creating a harmonious blend of textures and flavors inspired by Hong Kong cuisine.",
          },
          {
            name: "Triple Schezwan Fried Rice",
            img: "TrippleSchezwanFriedRice",
            veg: true,
            category: 1,
            item: "rice",
            cost: 140,
            rating: 4.0,
            serves: 2,
            details:
              "An adventurous fusion dish featuring a trio of fiery Schezwan sauces, aromatic spices, and a medley of colorful vegetables, all stir-fried with rice to create a tantalizing explosion of flavors and heat.",
          },
          {
            name: "Chicken Fried Rice",
            img: "ChickenFriedRice",
            veg: false,
            category: 1,
            item: "rice",
            cost: 100,
            rating: 3.0,
            serves: 2,
            details:
              "A delectable Asian classic, where tender pieces of chicken are wok-fried with fluffy rice, fresh vegetables, and savory seasonings, offering a satisfying and flavorful meal.",
          },
          {
            name: "Chicken Schezwan Fried Rice",
            img: "ChickenSchezwanFriedRice",
            veg: false,
            category: 1,
            item: "rice",
            cost: 130,
            rating: 3.5,
            serves: 2,
            details:
              "A spicy and flavorful delicacy that combines succulent chicken pieces, aromatic Schezwan sauce, and a medley of vegetables, all wok-fried with rice to create a fiery and satisfying culinary experience.",
          },
          {
            name: "Chicken Triple Schezwan Fried Rice",
            img: "ChickenTripleSchezwanFriedRice",
            veg: false,
            category: 1,
            item: "rice",
            cost: 150,
            rating: 4.0,
            serves: 2,
            details:
              "An indulgent fusion dish featuring a trio of bold Schezwan sauces, tender chicken pieces, and a colorful assortment of vegetables, all expertly stir-fried with rice to create a mouthwatering blend of flavors and heat.",
          },
          {
            name: "Egg Fried Rice",
            img: "EggFriedRice",
            veg: false,
            category: 1,
            item: "rice",
            cost: 90,
            rating: 3.0,
            serves: 2,
            details:
              "A classic Asian favorite, where fluffy rice is stir-fried with scrambled eggs, fresh vegetables, and a touch of seasoning, resulting in a simple yet satisfying dish with a delightful balance of flavors and textures.",
          },
          {
            name: "Chicken Hong Kong Fried Rice",
            img: "ChickenHongKongFriedRice",
            veg: false,
            category: 1,
            item: "rice",
            cost: 130,
            rating: 3.5,
            serves: 2,
            details:
              "A delightful blend of tender chicken pieces, fluffy rice, and an assortment of vegetables, all wok-fried to perfection and seasoned with a hint of Hong Kong-inspired flavors, offering a delicious and hearty meal.",
          },
          {
            name: "Veg Noodles",
            img: "VegNoodles",
            veg: true,
            category: 1,
            item: "noodles",
            cost: 80,
            rating: 3.0,
            serves: 2,
            details:
              "A delightful dish featuring thin noodles stir-fried with a colorful mix of fresh vegetables and savory seasonings, resulting in a flavorful and satisfying combination that's perfect for noodle lovers.",
          },
          {
            name: "Veg Hakka Noodles",
            img: "VegHakkaNoodles",
            veg: true,
            category: 1,
            item: "noodles",
            cost: 90,
            rating: 3.5,
            serves: 2,
            details:
              "A flavorful dish featuring thin noodles stir-fried with a colorful mix of fresh vegetables and aromatic Hakka seasonings, creating a savory and satisfying combination for noodle enthusiasts.",
          },
          {
            name: "Veg Chowmein",
            img: "Chowmein",
            veg: true,
            category: 1,
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
            category: 1,
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
            category: 1,
            item: "noodles",
            cost: 100,
            rating: 4.0,
            serves: 2,
            details:
              "A zesty fusion dish that pairs thin noodles with a spicy Schezwan sauce and a medley of vibrant vegetables, creating a tantalizing and fiery noodle experience for those craving bold flavors.",
          },
          {
            name: "Veg Hong Kong Noodles",
            img: "VegHongKongNoodles",
            veg: true,
            category: 1,
            item: "noodles",
            cost: 110,
            rating: 4.0,
            serves: 2,
            details:
              "A savory delight that combines thin noodles with a diverse selection of vegetables and subtle seasonings, inspired by Hong Kong cuisine, offering a harmonious blend of textures and flavors.",
          },
          {
            name: "Egg Noodles",
            img: "EggNoodles",
            veg: false,
            category: 1,
            item: "noodles",
            cost: 90,
            rating: 3.0,
            serves: 2,
            details:
              "A comforting dish where thin noodles are stir-fried with scrambled eggs and a touch of seasonings, resulting in a simple yet satisfying meal that highlights the deliciousness of eggs.",
          },
          {
            name: "Chicken Noodles",
            img: "ChickenNoodles",
            veg: false,
            category: 1,
            item: "noodles",
            cost: 100,
            rating: 3.0,
            serves: 2,
            details:
              "A mouthwatering creation featuring tender chicken pieces paired with thin noodles, fresh vegetables, and savory seasonings, offering a hearty and flavorful noodle experience.",
          },
          {
            name: "Chicken Schezwan Noodles",
            img: "ChickenSchezwanNoodles",
            veg: false,
            category: 1,
            item: "noodles",
            cost: 120,
            rating: 3.5,
            serves: 2,
            details:
              "A spicy and flavorful dish that marries tender chicken pieces with thin noodles, vibrant vegetables, and a zesty Schezwan sauce, creating a tantalizing and fiery noodle sensation.",
          },
          {
            name: "Kung Pao Chicken",
            img: "KungPaoChicken",
            veg: false,
            category: 1,
            cost: 300,
            rating: 3.0,
            details: `Chinese-style stir-fried chicken cubes with dried chili peppers.`,
            serves: 2,
          },
          {
            name: "Chicken Hong Kong Noodles",
            img: "ChickenHongKongNoodles",
            veg: false,
            category: 1,
            item: "noodles",
            cost: 130,
            rating: 3.5,
            serves: 2,
            details:
              "A delightful blend of tender chicken pieces, thin noodles, and an assortment of vegetables, all expertly wok-fried and seasoned with a hint of Hong Kong-inspired flavors, delivering a delicious and hearty noodle dish.",
          },
          {
            name: "Chicken Chowmein",
            img: "ChickenChowmein",
            veg: false,
            category: 1,
            item: "noodles",
            cost: 100,
            rating: 4.0,
            serves: 2,
            details:
              "A classic Chinese stir-fry dish featuring tender chicken pieces, crispy noodles, and a flavorful mix of vegetables, all cooked to perfection and seasoned with savory sauces, creating a satisfying and mouthwatering meal.",
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
            category: 2,
            item: "ice-cream",
            cost: 30,
            rating: 3.0,
            serves: 1,
            details:
              "A timeless favorite characterized by its creamy, smooth texture and the sweet, comforting taste of pure vanilla, making it a delightful treat for all ages.",
          },
          {
            name: "Chocolate Ice Cream",
            img: "ChocolateIceCream",
            veg: true,
            category: 2,
            item: "ice-cream",
            cost: 40,
            rating: 3.5,
            serves: 1,
            details:
              "A luscious dessert infused with rich, velvety chocolate flavors that provide a decadent and indulgent experience for chocolate lovers.",
          },
          {
            name: "Butterscotch Ice Cream",
            img: "ButterscotchIceCream",
            veg: true,
            category: 2,
            item: "ice-cream",
            cost: 40,
            rating: 3.0,
            serves: 1,
            details:
              "A delightful dessert featuring creamy ice cream infused with the sweet and buttery flavor of butterscotch, offering a perfect balance of richness and sweetness in every scoop.",
          },
          {
            name: "Blueberry Ice Cream",
            veg: true,
            img: "BlueberryIceCream",
            category: 2,
            item: "ice-cream",
            cost: 40,
            rating: 4.0,
            serves: 1,
            details:
              "A fruity delight that combines the creamy goodness of ice cream with the vibrant taste of juicy blueberries, resulting in a refreshing and flavorful frozen treat.",
          },
          {
            name: "Strawberry Ice Cream",
            img: "StrawberryIceCream",
            veg: true,
            category: 2,
            item: "ice-cream",
            cost: 40,
            rating: 3.0,
            serves: 1,
            details:
              "A delightful frozen dessert that showcases the sweet and tangy essence of ripe strawberries, delivering a burst of fruity freshness with every spoonful.",
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
            category: 3,
            item: "aerated",
            cost: 40,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Sprite",
            img: "Sprite",
            veg: true,
            category: 3,
            item: "aerated",
            cost: 40,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Thums Up",
            img: "ThumsUp",
            veg: true,
            category: 3,
            item: "aerated",
            cost: 40,
            rating: 3.5,
            serves: 1,
          },
          {
            name: "Lassi",
            img: "Lassi",
            veg: true,
            category: 3,
            item: "shake",
            cost: 30,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Lemon Tea",
            img: "LemonTea",
            veg: true,
            category: 3,
            items: "tea",
            cost: 30,
            rating: 4.0,
            serves: 1,
          },
          {
            name: "Coffee",
            img: "Coffee",
            veg: true,
            category: 3,
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

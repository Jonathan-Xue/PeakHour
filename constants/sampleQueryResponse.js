// TODO: Remove Once Server Requests Are Set Up
export const sampleRestaurant = {
    _id: 0,
    name: "Cravings",
    address: "603 S Wright St, Champaign, IL 61820",
    image: require("../assets/bangkok_thai.jpg"),
    rating: 4.9,
    menu: {
        "Beverages": [
            {
                _id: 0,
                name: "Coffee",
                price: 2.99,
                description: "",
                image: ""
            },
            {
                _id: 1,
                name: "Tea",
                price: 0.99,
                description: "",
                image: ""
            },
        ],
        "Appetizers": [
            {
                _id: 2,
                name: "Potstickers", 
                price: 6.99, 
                description: "These popular dumplings, steamed on one side and pan-fried on the other, are very easy to make and always a crowd-pleaser. Choose a basic pork recipe for the same flavor you've enjoyed before. This version also includes instructions for making the dough, but you can buy pre-made wrappers too, if you prefer. They're delicious served with soy sauce and ginger, hot chili oil or dumpling dipping sauce.",
                image: "https://www.thespruceeats.com/thmb/yfR4ypNeQqiwKohgoD2RE2vYKKo=/2116x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/panfried-pork-potstickers-694859-hero-01-be8c9ec44fd94ecb878be3f55e7f567b.jpg"
            },
            {
                _id: 3,
                name: "Crab Rangoon",
                price: 4.99,
                description: "Crab rangoon, also called crab puffs, are an American-Chinese invention featuring a crispy fried wrapper and a creamy crab and cheese interior. Instead of rolling into a log or pinching into a half moon, crab rangoon are formed into triangles or flower shapes before frying, which makes them especially pretty on your appetizer platter. Dip them in a little soy or hoisin sauce for extra zing.",
                image: "https://www.thespruceeats.com/thmb/6zsRDfdaoWJdAbVdb6DkeO77r9M=/2130x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/5941980816_f8a5614bd5_o-56a1434a3df78cf77268f4bf.jpg"
            },
            {
                _id: 4,
                name: "Chicken Legs",
                price: 9.99,
                description: "No matter the flavor, you just can't go wrong with chicken wings. The Chinese-inspired kind have become popular to serve in place of the spicy Buffalo version— these have the same addictive crispy exterior but are coated in Asian-inspired flavors. With a garlic, hoisin, and honey marinade, these are bound to get people licking their fingers.",
                image: "https://www.thespruceeats.com/thmb/vdtOsr5QiluFeYpa8V2AtbTHE18=/1960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-wings-with-hoisin-sauce-in-a-roasting-dish-56297066-5ae152821f4e130036f3c593.jpg"
            }
        ],
        "Entrees": [
            {
                _id: 5,
                name: "Kung Pao Chicken", 
                price: 9.99,
                description: "Named after a late Qing dynasty official and governor of the Szechuan province, Kung Pao Chicken is a spicy Szechuan dish made with diced chicken, peanuts, and dried chili peppers. This recipe calls for deep-frying the chicken, adding a delicious, crispy texture. However, if you'd like something a bit lighter, try stir-fry Kung Pao chicken.",
                image: "https://www.thespruceeats.com/thmb/nPVPIaTwRJDQmOBWfMlC3djreK8=/2080x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/7192503632_a2ec4ebe39_o-56a1433c5f9b58b7d0bd976d.jpg"
            },
            {
                _id: 6,
                name: "Peking Duck",
                price: 19.99,
                description: "In Chinese culture, duck represents fidelity. This recipe for the famous Beijing dish, consisting of juicy slices of duck with crispy skin, is served with Mandarin pancakes and hoisin sauce. The recipe states that you need to hang the duck in a cool, windy place for four hours; this is to make sure the duck is completely dry, inside and out, so it will get nice and crispy. If you don't have the proper place to hang the duck, you can place it in a cool room with a fan blowing on it.",
                image: "https://www.thespruceeats.com/thmb/K1T-mkv0crZtPwx04GmHO3DzTcw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-185287808-581ab2fd5f9b581c0b368b10.jpg"
            },
            {
                _id: 7,
                name: "Salt & Pepper Shrimp",
                price: 9.99,
                description: "This colorful Cantonese dish makes an eye-catching appetizer or main course as the deep-fried shrimp shells turn a wonderful orange color. The shells protect the shrimp meat during deep-frying so that it tastes extra tender and juicy. The deep-fried shrimp are then stir-fried in a salt and pepper mixture until coated nicely.",
                image: "https://www.thespruceeats.com/thmb/HbucBZkSqEXn2pLYT9HydDRerOA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/1614210289_08aa3d164d_o-5830c1b53df78c6f6ac1a6ec.jpg"
            },
            {
                _id: 8,
                name: "Steamed Whole Fish",
                price: 15.99,
                description: "The word for fish in Chinese is yu, which sounds like abundance and wish. Therefore, eating fish at the end of the meal represents a wish for abundance in the year to come. Serving the fish with the head and tail intact is also symbolic, meaning a good beginning and good ending to the new year. In this recipe, the whole fish is rubbed inside and out with a mixture of ginger, black beans, garlic, soy sauce, and sesame oil and then steamed until tender and flaky.",
                image: "https://www.thespruceeats.com/thmb/Gkt0S84wmvKcsk6jW4ZnBQTn0Pc=/2128x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cooked-mackerel-fish-served-with-steamed-rice-565295593-142750b1dbae42a7bacba18ecb653471.jpg"
            }
        ],
    },
    orders: [],
    charity: ["Teach For America", "Feed The Children"],
    location : {
        type : "Point",
        coordinates : [40.111490, -88.229010]
    }
};
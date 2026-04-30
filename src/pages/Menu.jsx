import { useState, useEffect } from "react";

// ============================================================
// WEEK 3: Uncomment these two imports AFTER setting up Firebase:
// ============================================================
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

// ============================================================
// SAMPLE MENU DATA
// This lets the menu page work BEFORE Firebase is set up.
// In Week 3, you will delete this and load from Firebase instead.
//
// TODO (Week 2): You can update these items to match YOUR
// restaurant if you want, but it's not required yet.
// ============================================================
const sampleMenuItems = [
  {
    id: "1",
    name: "Brisket Tacos",
    description: "Smoked brisket with onions and cilantro",
    price: 12.99,
    category: "Entrees",
  },
  {
    id: "2",
    name: "BBQ Burrito",
    description: "Brisket, rice, beans, and BBQ sauce",
    price: 13.99,
    category: "Entrees",
  },
  {
    id: "3",
    name: "Loaded Nachos",
    description: "Chips with meat, cheese, and toppings",
    price: 11.99,
    category: "Appetizers",
  },
  {
    id: "4",
    name: "Street Corn",
    description: "Grilled corn with cheese and seasoning",
    price: 4.99,
    category: "Appetizers",
  },
  {
    id: "5",
    name: "Pulled Pork Plate",
    description: "Smoked pork served with sides",
    price: 15.99,
    category: "Entrees",
  },
  {
    id: "6",
    name: "Quesadilla",
    description: "Cheese and meat of your choice in a grilled tortilla",
    price: 14.99,
    category: "Entrees",
  },
  {
    id: "7",
    name: "Churros",
    description: "Fried dough with sugar and cinnamon (4-count)",
    price: 5.99,
    category: "Desserts",
  },
  {
    id: "8",
    name: "Tres Leches Cake",
    description: "Soft cake soaked in milk",
    price: 6.99,
    category: "Desserts",
  },
  {
    id: "9",
    name: "Carne Asada Fries",
    description: "Fries topped with grilled steak, cheese, sour cream, and pico",
    price: 12.99,
    category: "Appetizers",
  },
  {
    id: "10",
    name: "Smoked Chicken Tacos",
    description: "Smoked chicken with fresh toppings and salsa",
    price: 12.99,
    category: "Entrees",
  },
];

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMenu() {
      try {
        // ==========================================================
        // WEEK 3: FIREBASE VERSION
        // Uncomment the block below and DELETE the sample data block
        // AFTER you set up Firebase and add your menu items.
        // ==========================================================
        const querySnapshot = await getDocs(collection(db, "menuItems"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMenuItems(items);

        // ==========================================================
        // SAMPLE DATA VERSION (delete this block in Week 3)
        // ==========================================================
        // await new Promise((resolve) => setTimeout(resolve, 500));
        // setMenuItems(sampleMenuItems);
      } catch (err) {
        console.error("Error fetching menu:", err);
        setError("Failed to load menu. Please try again later.");
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  if (loading) {
    return (
      <div className="page">
        <p className="loading-message">Loading menu...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <p className="error-message">{error}</p>
      </div>
    );
  }

  // Group items by category
  const categories = [...new Set(menuItems.map((item) => item.category))];

  return (
    <div className="page">
      <div className="menu-header">
        {/* TODO: Customize this heading for YOUR restaurant */}
        <h1>That Good 'ol Menu</h1>
        <p>Smoked BBQ favorites, street-style Mexican dishes, and them good ol' homemade desserts.</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuItems
              .filter((item) => item.category === category)
              .map((item) => (
                <div key={item.id} className="menu-item">
                  <h3>{item.name}</h3>
                  <p className="description">{item.description}</p>
                  <p className="price">${item.price.toFixed(2)}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
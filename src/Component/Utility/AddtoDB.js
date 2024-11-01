import { toast } from "react-toastify";

// Function to retrieve the "read-list" from localStorage, or return an empty array if not found
const getStoreReadList = () => {
    const storeListStr = localStorage.getItem('read-list');
    if (storeListStr) {
        const storeList = JSON.parse(storeListStr);
        return storeList;
    } else {
        return [];
    }
};

// Function to add an item to the "read-list" in localStorage
const addStoreReadList = (id) => {
    const storeList = getStoreReadList();
    if (storeList.includes(id)) {
        console.log('already exists in the read list');
    } else {
        storeList.push(id);
        const storeListStr = JSON.stringify(storeList);
        localStorage.setItem('read-list', storeListStr);
        toast('this is add to your read list')
    }
};

// Function to retrieve the "wish-list" from localStorage, or return an empty array if not found
const getStoreWishList = () => {
    const storeWishListStr = localStorage.getItem('wish-list');
    if (storeWishListStr) {
        const storeWishList = JSON.parse(storeWishListStr);
        return storeWishList;
    } else {
        return [];
    }
};

// Function to add an item to the "wish-list" in localStorage
const addToStoreWishList = (id) => {
    const storeWishList = getStoreWishList();
    if (storeWishList.includes(id)) {
        console.log(id, "already exists in the wishlist.");
    } else {
        storeWishList.push(id);
        const storeWishListStr = JSON.stringify(storeWishList);
        localStorage.setItem("wish-list", storeWishListStr);
      
    }
};

// Export the functions for use in other modules
export { addStoreReadList, addToStoreWishList, getStoreReadList };

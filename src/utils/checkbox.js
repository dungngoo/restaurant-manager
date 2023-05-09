// utils.js

// handle sự kiện khi check vào nút checkbox All

const handleCheckboxAll = (event, checkboxes, items, setIsCheckedAll, setIsCheckedItems) => {
    setIsCheckedAll(event.target.checked);

    if (event.target.checked) {
        setIsCheckedItems(items.map((item) => item._id));
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true;
        }
    } else {
        setIsCheckedItems([]);
        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = false;
        }
    }
};
// handle sự kiện khi check vào từng item checkbox
const handleCheckItem = (event, item, checkboxes, setIsCheckedAll, isCheckedItems, setIsCheckedItems) => {
    if (event.target.checked) {
        setIsCheckedItems([...isCheckedItems, item._id]);
    } else {
        setIsCheckedItems(isCheckedItems.filter((isCheckedItem) => isCheckedItem !== item._id));
        setIsCheckedAll(false); // uncheck "select all" if at least one checkbox is unchecked
    }

    let count = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count++;
        }
    }

    if (count === isCheckedItems.length && count === item.length) {
        setIsCheckedAll(true);
    } else {
        setIsCheckedAll(false);
    }
};

export { handleCheckItem, handleCheckboxAll };

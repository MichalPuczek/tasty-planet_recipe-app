import React from "react";

import "./CheckBox.css";

const CheckBox = ({ onChange, type = "checkbox", name, checked = false }) => {
  return (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  );
};

export default CheckBox;


/* useEffect(() => {
  console.log("checkedItems: ", filteredChecks);
}, [filteredChecks]);

const checkBoxes = [
  {
    name: 'Gluten',
    key: 'checkBox1',
    label: 'Check Box 1',
  },
  {
    name: 'Sulfites',
    key: 'checkBox2',
    label: 'Check Box 2',
  }
];

const handleCheckBox = (e) => {
  setFilteredChecks({ ...filteredChecks, [e.target.name]: e.target.checked });
}

console.log('tadam', filteredChecks); */

/* {
  checkBoxes.map(item => (
    <label key={item.key}>
      {item.name}
      <CheckBox name={item.name} checked={filteredChecks[item.name]} onChange={handleCheckBox} />
    </label>
  ))
} */
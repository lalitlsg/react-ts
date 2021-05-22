import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  const [guest, setGuest] = useState<string[]>([]);

  const addGuestHandler = () => {
    setGuest([...guest, name]);
    setName("");
  };

  const guestList = guest.map((g) => <li key={g}>{g}</li>);

  return (
    <div>
      <h3>Guest List</h3>
      <ul>{guestList}</ul>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addGuestHandler}>Add</button>
      </div>
    </div>
  );
};

export default GuestList;

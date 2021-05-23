import { useState, useEffect, useRef } from "react";

const users = [
  { name: "Lalit", age: 20 },
  { name: "Nikhil", age: 20 },
  { name: "Akshay", age: 20 },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();
  const [isFindClicked, setIsFindClicked] = useState(false);

  useEffect(() => {
    if (!name) {
      setIsFindClicked(false);
    }
  }, [name]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const findUserHandler = () => {
    const foundUser = users.find((u) => u.name === name);
    setUser(foundUser);
    setIsFindClicked(true);
  };

  const userDetails = user ? (
    <div>
      {user.name} - {user.age}
    </div>
  ) : (
    <div>User not Found</div>
  );

  return (
    <div>
      <h1>User Search</h1>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <button onClick={findUserHandler}>Find</button>
      </div>
      {isFindClicked && userDetails}
    </div>
  );
};

export default UserSearch;

import React, { useState, useRef, useEffect } from 'react';

interface UserSearchProps {}

const UserSearch: React.FC<UserSearchProps> = () => {
  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const users: { name: string; age: number }[] = [
    { name: 'Arthur', age: 25 },
    { name: 'Mariah', age: 32 },
    { name: 'Samuelson', age: 54 },
  ];

  const inputRef = useRef<HTMLInputElement | null>(null);

  const [searchInput, setSearchInput] = useState<string>('');
  const [foundUser, setFoundUser] = useState<
    { name: string; age: number } | undefined
  >();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const foundUser = users.find((user) => user.name === searchInput);

    if (foundUser) {
      setFoundUser(foundUser);
    } else {
      setFoundUser(undefined);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <h2>Search user</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          ref={inputRef}
          type="text"
          onChange={handleInputChange}
          value={searchInput}
        />
        <button>Search user</button>
      </form>
      <div>
        <p>
          {foundUser ? `${foundUser.name}, ${foundUser.age}` : 'User not found'}
        </p>
      </div>
    </div>
  );
};

export default UserSearch;

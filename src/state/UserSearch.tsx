import React, { useState } from 'react';

interface UserSearchProps {}

const UserSearch: React.FC<UserSearchProps> = () => {
  const users: { name: string; age: number }[] = [
    { name: 'Arthur', age: 25 },
    { name: 'Mariah', age: 32 },
    { name: 'Samuelson', age: 54 },
  ];

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
        <input type="text" onChange={handleInputChange} value={searchInput} />
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

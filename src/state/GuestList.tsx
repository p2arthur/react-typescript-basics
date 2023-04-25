import React, { useState } from 'react';
interface GuestListProps {}

const GuestList: React.FC<GuestListProps> = () => {
  const [name, setName] = useState<string>('');
  const [guestsList, setGuestsList] = useState<string[]>([]);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleGuestSubmit = () => {
    event?.preventDefault();
    setGuestsList([...guestsList, name]);
    setName('');
  };

  return (
    <div>
      <h3>Guest List</h3>
      <form onSubmit={handleGuestSubmit}>
        <input onChange={handleNameChange} value={name} type="text" />
        <button>Add guest</button>
      </form>
      <ul>
        {guestsList.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
    </div>
  );
};

export default GuestList;

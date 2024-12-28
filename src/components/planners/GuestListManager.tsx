import React, { useState } from 'react';
import { Users, UserPlus, Search } from 'lucide-react';

interface Guest {
  id: string;
  name: string;
  email: string;
  rsvpStatus: 'pending' | 'confirmed' | 'declined';
}

const GuestListManager = () => {
  const [guests, setGuests] = useState<Guest[]>([]);
  const [newGuest, setNewGuest] = useState({ name: '', email: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const addGuest = () => {
    if (newGuest.name && newGuest.email) {
      setGuests([
        ...guests,
        {
          id: Date.now().toString(),
          ...newGuest,
          rsvpStatus: 'pending'
        }
      ]);
      setNewGuest({ name: '', email: '' });
    }
  };

  const updateRsvpStatus = (id: string, status: Guest['rsvpStatus']) => {
    setGuests(guests.map(guest => 
      guest.id === id ? { ...guest, rsvpStatus: status } : guest
    ));
  };

  const filteredGuests = guests.filter(guest =>
    guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    guest.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-6">
        <Users className="h-6 w-6 text-rose-500 mr-2" />
        <h3 className="text-2xl font-serif">Guest List Manager</h3>
      </div>

      <div className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newGuest.name}
            onChange={(e) => setNewGuest({ ...newGuest, name: e.target.value })}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Guest name"
          />
          <input
            type="email"
            value={newGuest.email}
            onChange={(e) => setNewGuest({ ...newGuest, email: e.target.value })}
            className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Guest email"
          />
          <button
            onClick={addGuest}
            className="px-4 py-2 bg-rose-500 text-white rounded-lg hover:bg-rose-600 transition-colors flex items-center"
          >
            <UserPlus className="h-5 w-5 mr-1" />
            Add
          </button>
        </div>

        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
            placeholder="Search guests..."
          />
        </div>

        <div className="space-y-2">
          {filteredGuests.map((guest) => (
            <div key={guest.id} className="flex justify-between items-center p-3 bg-gray-50 rounded">
              <div>
                <div className="font-medium">{guest.name}</div>
                <div className="text-sm text-gray-500">{guest.email}</div>
              </div>
              <select
                value={guest.rsvpStatus}
                onChange={(e) => updateRsvpStatus(guest.id, e.target.value as Guest['rsvpStatus'])}
                className="px-3 py-1 border rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent"
              >
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="declined">Declined</option>
              </select>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="font-medium">Total Guests</div>
            <div className="text-2xl text-rose-500">{guests.length}</div>
          </div>
          <div>
            <div className="font-medium">Confirmed</div>
            <div className="text-2xl text-green-500">
              {guests.filter(g => g.rsvpStatus === 'confirmed').length}
            </div>
          </div>
          <div>
            <div className="font-medium">Pending</div>
            <div className="text-2xl text-yellow-500">
              {guests.filter(g => g.rsvpStatus === 'pending').length}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestListManager;
import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Users, Calendar, ExternalLink, Check } from 'lucide-react';
import { ClipLoader } from 'react-spinners';
import eventService from '../services/eventService';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState(new Set());
  const [registeringEvent, setRegisteringEvent] = useState(null);
  const [filter, setFilter] = useState('all'); // all, upcoming, past
  const [searchTerm, setSearchTerm] = useState('');

  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const response = await eventService.getAllEvents();
        setEvents(response.data || response || []);
        
        // If user is authenticated, fetch their registered events
        if (isAuthenticated) {
          try {
            const myEventsResponse = await eventService.getMyEvents();
            const eventsData = myEventsResponse.events || myEventsResponse || [];
            const registeredIds = new Set(eventsData.map(event => event._id));
            setRegisteredEvents(registeredIds);
          } catch (myEventsError) {
            console.error('Error fetching user registered events:', myEventsError);
            // Continue without registered events if there's an error
          }
        }
      } catch (err) {
        setError('Failed to load events');
        console.error('Error fetching events:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [isAuthenticated]);

  // Filter and search events
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'upcoming') {
      return matchesSearch && new Date(event.date) >= new Date();
    } else if (filter === 'past') {
      return matchesSearch && new Date(event.date) < new Date();
    }
    return matchesSearch;
  });

  const handleRegisterForEvent = async (eventId) => {
    if (!isAuthenticated) {
      toast.error('Please log in to register for events');
      return;
    }
    
    setRegisteringEvent(eventId);
    try {
      await eventService.registerForEvent(eventId);
      setRegisteredEvents(prev => new Set([...prev, eventId]));
      toast.success('Successfully registered for event!');
    } catch (error) {
      console.error('Error registering for event:', error);
      toast.error('Failed to register for event');
    } finally {
      setRegisteringEvent(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center">
          <ClipLoader color="#07A698" size={50} />
          <p className="mt-4 text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
        <div className="text-center">
          <p className="text-red-600 text-xl">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-[#07A698] text-white rounded-lg hover:bg-[#05857a]"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Events & Webinars</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our upcoming events and webinars to enhance your learning experience
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'all'
                  ? 'bg-[#07A698] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setFilter('upcoming')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'upcoming'
                  ? 'bg-[#07A698] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setFilter('past')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                filter === 'past'
                  ? 'bg-[#07A698] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Past Events
            </button>
          </div>
          
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#07A698] focus:border-transparent"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <div
                key={event._id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={event.thumbnail || event.image || 'https://via.placeholder.com/400x300'}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                      new Date(event.date) >= new Date()
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {new Date(event.date) >= new Date() ? 'Upcoming' : 'Past'}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {event.eventType || 'Event'}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-[#07A698]" />
                      {new Date(event.date).toLocaleDateString()} at {event.time || 'TBD'}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-[#07A698]" />
                      {event.location || 'Online'}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-[#07A698]" />
                      {event.seatsAvailable || 'Unlimited'} seats available
                    </div>
                  </div>
                  
                  {isAuthenticated ? (
                    registeredEvents.has(event._id) ? (
                      <button
                        disabled
                        className="w-full flex items-center justify-center px-4 py-2 bg-green-500 text-white rounded-lg opacity-80 cursor-not-allowed"
                      >
                        <Check className="h-4 w-4 mr-2" />
                        Registered
                      </button>
                    ) : (
                      <button
                        onClick={() => handleRegisterForEvent(event._id)}
                        disabled={registeringEvent === event._id}
                        className="w-full flex items-center justify-center px-4 py-2 bg-[#07A698] text-white rounded-lg hover:bg-[#05857a] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {registeringEvent === event._id ? (
                          <>
                            <ClipLoader color="#ffffff" size={16} className="mr-2" />
                            Registering...
                          </>
                        ) : (
                          <>
                            Register Now <ExternalLink className="h-4 w-4 ml-2" />
                          </>
                        )}
                      </button>
                    )
                  ) : (
                    <button
                      onClick={() => toast.info('Please log in to register for events')}
                      className="w-full px-4 py-2 bg-gray-300 text-white rounded-lg cursor-not-allowed"
                    >
                      Login Required
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-500">
                {searchTerm ? 'Try adjusting your search terms.' : 'Check back later for upcoming events.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
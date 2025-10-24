/* eslint-disable react/jsx-key */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

export default function IndexPage() {
  const [events, setEvents] = useState([]);

  //! Fetch events from the server ---------------------------------------------------------------
  useEffect(() => {
    axios
      .get("/createEvent")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  //! Like Functionality --------------------------------------------------------------
  const handleLike = (eventId) => {
    axios
      .post(`/event/${eventId}`)
      .then((response) => {
        setEvents((prevEvents) =>
          prevEvents.map((event) =>
            event._id === eventId
              ? { ...event, likes: event.likes + 1 }
              : event
          )
        );
        console.log("done", response);
      })
      .catch((error) => {
        console.error("Error liking ", error);
      });
  };

  return (
    <>
      <div className="mt-1 flex flex-col">

        {/* ================= Hero Section ================= */}
        <div className="relative hidden sm:block">
          {/* Background Hero Image */}
          <img
            src="../src/assets/hero.png"
            alt="College Event Management"
            className="w-full h-[60vh] object-cover brightness-75"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-lg">
              College Event Management System
            </h1>
            <p className="mt-3 text-lg sm:text-xl font-medium text-gray-200">
              Simplify, Manage, and Celebrate Your Campus Events Effortlessly 🎉
            </p>
          </div>
        </div>

        {/* ================= Event Cards Section ================= */}
        <div className="mx-10 my-5 grid gap-x-6 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:mx-5">
          {/*-------------------------- Checking whether there is an event or not-------------------  */}
          {events.length > 0 &&
            events.map((event) => {
              const eventDate = new Date(event.eventDate);
              const currentDate = new Date();

              //! Check the event date is passed or not ---------------------------------------------------------------------------------------
              if (
                eventDate > currentDate ||
                eventDate.toDateString() === currentDate.toDateString()
              ) {
                return (
                  <div className="bg-white rounded-xl relative shadow-md hover:shadow-lg transition-all" key={event._id}>
                    <div className="rounded-tl-[0.75rem] rounded-tr-[0.75rem] object-fill aspect-16:9 relative">

                      {event.image && (
                        <img
                          src={`http://localhost:4000/api/${event.image}`}
                          alt={event.title}
                          width="300"
                          height="200"
                          className="w-full h-full rounded-t-xl object-cover"
                        />
                      )}

                      {/* Like Button */}
                      <div className="absolute bottom-3 right-3">
                        <button onClick={() => handleLike(event._id)}>
                          <BiLike className="w-auto h-10 bg-white p-2 rounded-full shadow-md transition-all hover:text-primary" />
                        </button>
                      </div>
                    </div>

                    {/* FIXME: Demo image — remove after create event is completed */}
                    <img
                      src="../src/assets/paduru.png"
                      alt=""
                      className="rounded-tl-[0.75rem] rounded-tr-[0.75rem] object-fill aspect-16:9 hidden"
                    />

                    <div className="m-2 grid gap-2">
                      <div className="flex justify-between items-center">
                        <h1 className="font-bold text-lg mt-2">
                          {event.title.toUpperCase()}
                        </h1>
                        <div className="flex gap-2 items-center mr-4 text-red-600">
                          <BiLike /> {event.likes}
                        </div>
                      </div>

                      <div className="flex text-sm flex-nowrap justify-between text-primarydark font-bold mr-4">
                        <div>
                          {event.eventDate.split("T")[0]}, {event.eventTime}
                        </div>
                        <div>
                          {event.ticketPrice === 0
                            ? "Free"
                            : "Rs. " + event.ticketPrice}
                        </div>
                      </div>

                      <div className="text-xs flex flex-col flex-wrap truncate-text">
                        {event.description}
                      </div>

                      <div className="flex justify-between items-center my-2 mr-4">
                        <div className="text-sm text-primarydark ">
                          Organized By: <br />
                          <span className="font-bold">{event.organizedBy}</span>
                        </div>
                        <div className="text-sm text-primarydark ">
                          Created By: <br />
                          <span className="font-semibold">
                            {event.owner.toUpperCase()}
                          </span>
                        </div>
                      </div>

                      <Link to={"/event/" + event._id} className="flex justify-center">
                        <button className="primary flex items-center gap-2">
                          Book Ticket <BsArrowRightShort className="w-6 h-6" />
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    </>
  );
}

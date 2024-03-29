import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";

function Suggestions() {
    const [suggestions, setSuggestions] = useState([]);
    /* I'm using faker because i don't have the API yet.
       So, I need to create the interface and I need a model.
       When we have the API, I'm going to change it
    */
    const generateFakeUser = () => {
      return {
        id: faker.datatype.uuid(),
        avatar: faker.internet.avatar(),
        username: faker.internet.userName(),
        company: faker.company.bsBuzz()
      }
    };

    useEffect(() => {
        const suggestions = [...Array(7)].map((_, i ) => ({
          ...generateFakeUser(),
          id: i,
        }));
        setSuggestions(suggestions);
      }, []);

  return (
    <div className='mt-4 ml-10'>
      <div className='flex justify-between text-sm mb-5'>
        <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
        <button className='text-gray-600 font-semibold'> See all</button>
      </div>

        {suggestions.map((profile)=>(
              <div key={profile.id} className='flex items-center justify-between mt-3'>
                <img className='w-10 h-10 rounded-full border p-[2px]' src={profile.avatar} alt=""/>
               <div className='flex-1 ml-4'>
                  <h2 className='font-semibold text-sm '>{profile.username}</h2>
                  <h3 className='text-xs text-gray-400'>Works at {profile.company} </h3>
                </div>
                <button className='text-blue-400 text-xs'>Follow</button>
              </div>


        ))}


    </div>
  )
}

export default Suggestions;

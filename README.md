#Introduction
While frustrating at first, I ended up having a lot of fun making this project and watching it come together, despite all of the other things happening in my life at the time. But if this was developed during an actual job, and all these things were just other job responsibilities, I would say that things turn out quite well since everything works as intended and as requested. 


Overall I found that there is some satisfaction in watching new things get created and then updated on the fly, it's just great when a plan comes together. On that note, getting the New Item component to work and using it to get the Edit Item component to work as well, was very satisfying.

I would say the biggest challenge of this whole project was learning the MERN stack in general. I struggled a lot with understanding what plug goes into what outlet and making sure things were wired properly, thankfully, Net Ninja's MERN stack tutorials really helped me understand everything.

The biggest challenge with this project was getting through it. Full Stack development is hefty work. It's one thing to make one or the other, but making both work in harmony with each other changes the game completely. I found that my biggest takeaways from this project was that you need to be mindful of how data is being passed around, and WHY it is being passed certain ways.

Also Thunder Client (or it's equivalent) made things so much better. Using it to test all back end processes made getting it sorted out vastly easier.
=========================================================
#Technologies Used
    Backend dependencies:
        "bcrypt": "^5.1.1",
        "dotenv": "^16.3.1",
        "express": "^4.18.2",
        "jsonwebtoken": "^9.0.2",
        "mongoose": "^7.5.0",
        "validator": "^13.11.0"

    Frontend dependencies:
        "date-fns": "^2.30.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.15.0",
        "react-scripts": "5.0.1",
        "web-vitals": "^2.1.4"
=========================================================
#Trello Board & Diagrams
https://trello.com/invite/b/bxelf2Y5/ATTI82799cdf7e1a3f8295bc93c7e3c1472e55ADF05C/mern-project
https://drive.google.com/drive/u/0/folders/1cd55lKbkj-Uhp_l1m9b4vYaNQDMgunX_ - Wireframes
=========================================================
#Unsolved Problems
EditForm does not refresh dynamically akin to the New Form - probably need to use useEffect hook
=========================================================
#The Future
There was a lot I wanted to do with this project, but only so much I could do given the timespan and other "job responsibilities" if we want to frame it that way. Some things in particular I really wanted to add that was included on the original wireframes were:

Adding separate objects for locations and categories so they could be searched for and filtered through.
Using Regex or another method to add a search bar and proper filter to find certain items

Having recently viewed and recently updated items shown on lists on the homepage
Having most viewed items, categories, and locations shown on lists on the homepage

Using a camera on your phone and uploading pictures to an item as part of edit or the new form so you knew exactly what it was
Exporting all stored data as a .csv to manage it in other ways on Excel or other programs.

Multi-user communication via sending stores items or merging inventories if users moved in together
Admin interface so user data can be corrected if errors arise

Track supply costs if you stores items like tools, screws, tape, etc.

Be able to view recently deleted items and then permanently delete them or let them expire

Neat keyframe movements akin to that of an actual Rolodex upon which this project was partially inspired by, along with Ellen Sandbeck's "Green Housekeeping".

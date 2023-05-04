import { createServer, Response } from "miragejs";

// all the van images 
import modestExplorer from  "./img/modest-explorer.png";
import beachBum from "./img/beach-bum.png";
import reliableRed from "./img/reliable-red.png";
import dreamFinder from "./img/dreamfinder.png";
import cruiser from "./img/the-cruiser.png";
import greenWonder from "./img/green-wonder.png";


    const data = [
        {
            id: 1,
            name: "Modest Explorer",
            price: 60,
            category: "Simple",
            img: modestExplorer,
            description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty     is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
            hostId: 123,
        },
        {
            id: 2,
            name: "Beach Bum",
            price: 80,
            category: "Rugged",
            img: beachBum,
            description: "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
            hostId: 123,
        },
        {
            id: 3,
            name: "Reliable Red",
            price: 100,
            category: "Luxary",
            img: reliableRed,
            description: "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it."
        },
        {
            id: 4,
            name: "Dreamfinder",
            price: 65,
            category: "Simple",
            img: dreamFinder,
            description: "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated."
        },
        {
            id: 5,
            name: "The Cruiser",
            price: 120,
            category: "Luxary",
            img: cruiser,
            description: "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go."
        },
        {
            id: 6,
            name: "Green Wonder",
            price: 70,
            category: "Rugged",
            img: greenWonder,
            description: "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
            hostId: 123,
        },]

    createServer({
        routes() {
            this.get("/api/van",() => {
                return {vans: [...data]}
                // return new Response(400, { some: 'header' }, { errors: [ 'name cannot be blank'] });
            })

            // route for each van 
            this.get("/api/van/1", () => {
                return data[0];
            })
            this.get("/api/van/2", () => {
                return data[1];
            })
            this.get("/api/van/3", () => {
                return data[2];
            })
            this.get("/api/van/4", () => {
                return data[3];
            })
            this.get("/api/van/5", () => {
                return data[4];
            })
            this.get("/api/van/6", () => {
                return data[5];
            })

            // host id van request 
            this.get("/api/vans/123", () => {
                const filtredVans = data.filter(van => van.hostId === 123);
                return filtredVans;
            })
        }
    })

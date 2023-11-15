import "./portfolio.css";

import IMG1 from "../../assets/Mental.png";
import IMG2 from "../../assets/Hostel.png";
import IMG3 from "../../assets/Quiz.png";
import IMG4 from "../../assets/Recommendation.jpg";
import IMG5 from "../../assets/decentralized.png";
import IMG6 from "../../assets/Aquarium.png";
import IMG7 from "../../assets/grocery.png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Mental-Fitness-Tracker",
      img: IMG1,
      description:
        "The AI Mental Fitness Tracker project aims to develop a machine learning-based system that monitors and enhances users' mental well-being. By collecting data from various sources, extracting meaningful features, and training a model, the project provides personalized insights, feedback, and interventions.In this project, Algorithm used are Linear Regression, RandomForest and MLPRegressor. Random Forest Regressor model performs well on both training and testing data. The objectives include developing the AI-powered tracker, training a model to identify patterns related to mental well-being, improving the system through adaptive learning.",
      github: "https://github.com/Anuurag2318/Hostel-Management-System",
    },
    {
      id: 4,
      title: "Recommender-System",
      img: IMG4,
      description:
        "Grocery Recommendation System aims to enhance user experience by predicting preferred purchases, leveraging past interactions for accurate item recommendations. Recognizing challenges in manual systems, the objective is to ensure precise product statistics. This project focuses on developing a web-based application with swift processing and a user-friendly interface, streamlining the shopping experience. Embrace the future of grocery retail with data-driven recommendations and an efficient online platform. 🛒💻.",
      github: "https://github.com/Anuurag2318/Recommender-System",
    },
    
    {
      id: 7,
      title: "Grocery-Comparison-Website",
      img: IMG7,
      description:
        "This price comparison website uses web scraping tools to extract data from Dmart, Jiomart and Bigbasket, such as product image, price, and reviews. It then suggests the user to buy products from the cheapest mart. This Django-based website uses Selenium to automate the scraping process.",
      github: "https://github.com/Anuurag2318/Grocery-Comparison-Website",
    },
    
    {
      id: 3,
      title: "A-Quiz-Website",
      img: IMG3,
      description: "Access and play quizzes anytime, anywhere, earning a credit score for each correct answer. This online platform revolutionizes assessments, replacing paperwork and lightening faculty workloads. Students enjoy the flexibility to quiz remotely, receiving instant results and insights into their proficiency levels. Quiz-Vault is more than a website; it's a time-saving system fostering learning and self-assessment. Join us in this educational adventure where efficiency meets knowledge enrichment. Explore programming languages effortlessly with Quiz-Vault—your go-to online quiz examination solution.",
      github: "https://github.com/Anuurag2318/A-Quiz-Website",
    },
    
    {
      id: 5,
      title: "Decentralized-Voting-Application",
      img: IMG5,
      description:
        "Created a voting application using Blockchain Technology like Hardhat for the backend, solidity for writing smart contracts and React.js for Frontend",
      github: "https://github.com/Anuurag2318/Decentralized-Voting-Application",
    },
    {
      id: 2,
      title: "Hostel-Management-System",
      img: IMG2,
      description:
        "HOSTEL MANAGEMENT SYSTEM streamlines hostel activities efficiently with a user-friendly Java-based solution. Leveraging Java's platform independence, multithreading, and object-oriented features, the project ensures simplicity and speed. Developed on Apache NetBeans, an open-source IDE, it supports various languages, enhancing versatility. The interactive GUI, featuring buttons and labels, offers a seamless experience. Source codes, hosted on Apache NetBeans, maintain functionality and connect to Apache Derby for database management. The application begins with a welcoming screen, guiding users through registration and providing instant notifications. Data is stored, ensuring a functional, efficient, and effective hostel management experience. 💻🏨",

      github: "https://github.com/Anuurag2318/Hostel-Management-System",
    },
    {
      id: 6,
      title: "Aquarium",
      img: IMG6,
      description:"A captivating dive into image generation using C and Turbo C. I've crafted a vibrant fish aquarium, where fishes gracefully traverse horizontally, their speed customizable. The aquatic aesthetic extends with rising bubbles, pebbles, and water plants, creating a visually complete experience. This colorful project is more than an artistic display—it's a testament to our pursuit of mastering computer graphics. The aquarium's allure isn't just visual; it's highly interactive, showcasing control over content, structure, and appearance. As, I navigate this endeavor, I aim to not just create a simple aquarium but to captivate any onlooker, merging art and technology seamlessly. 🐠🌿🎨 ",
      github: "https://github.com/Anuurag2318/Aquarium",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              {/* <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a> */}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

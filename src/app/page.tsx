import { Button, ServiceCard } from "@/components";
import CardComponent from "@/components/card";
import RatingCard from "@/components/rating-card";
import { cards } from "@/utils/constants/card";
import { ratingCard } from "@/utils/constants/rating-card";
import { cardsOne, cardsTwo } from "@/utils/constants/services-cards";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <main>
      {/* <h1>Landing</h1>
      <div style={{ padding: "10px", backgroundColor: "black" }}>
        <Button variant="contained">Learn More</Button>
        <Button variant="outlined">Learn More</Button>
      </div> */}

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {cardsOne.map((card) => (
          <ServiceCard
            url={card.url}
            title={card.title}
            description={card.description}
          />
        ))}
      </Box> */}

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {cardsTwo.map((card) => (
          <ServiceCard
            url={card.url}
            title={card.title}
            description={card.description}
          />
        ))}
      </Box> */}

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {cards.map((card) => (
          <CardComponent url={card.url} text={card.text} />
        ))}
      </Box> */}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {ratingCard.map((card) => (
          <RatingCard comment={card.comment} author={card.author} />
        ))}
      </Box>
    </main>
  );
}

import React from "react";
import { Container, Grid, Card, Text, Image } from "@nextui-org/react";

export const Introduction = () => {
  return (
    <div>
      <Container className="max-w-6xl mx-auto">
        <Grid.Container gap={2} justify="center">
          <Grid sm={8}>
            <Text
              blockquote
              className="text-[22px] font-[roboto] font-light text-gray-300 bg-transparent"
            >
              Hello! I'm{" "}
              <strong className="font-bold">Dharmendra Sharma</strong>, a
              tech-savvy explorer with a passion for innovation and a hunger for
              knowledge—a software engineer ready to embark on exciting coding
              adventures. With a knack for problem-solving, a love for
              cutting-edge technologies, and a commitment to delivering
              exceptional results, I thrive in dynamic environments where
              creativity and collaboration are the guiding forces. Join me on
              this journey of endless possibilities as we shape the future
              through groundbreaking software solutions. Together, let's code
              the path to success!
            </Text>
          </Grid>
          <Grid sm={4} className="">
            <Image src="/background.jpg" width={300} height={300} />
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

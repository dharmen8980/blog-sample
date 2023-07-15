import React from "react";
import { Container, Text, Grid, Card, Divider, Link, Spacer } from "@nextui-org/react";

export const Footer = () => {
  return (
    <footer className="bg-white shadow-lg">
      <Container fluid className="max-w-6xl bg-white rounded-lg p-0">
        <Grid.Container>
          <Grid sm={4}>
            <Card variant="flat" className="bg-white border-0 rounded-none">
              <Card.Header>
                <Text light className="text-xl">
                  Bytes of Wisdom
                </Text>
              </Card.Header>
              <Divider />
              <Card.Body>
                <Text>
                  Bytes of Wisdom is a blog dedicated to helping you get the
                  most out of your devices. We provide tips and tricks to boost
                  your productivity, tutorials to help you master your favorite
                  software, and insights into the latest technologies.
                </Text>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card variant="flat" className="bg-white border-0 rounded-none">
              <Card.Header>
                <Text light className="text-xl">
                  Topics Covered
                </Text>
              </Card.Header>
              <Divider />
              <Card.Body>
                <ul>
                  <li>Shortcuts</li>
                  <li>Hacks</li>
                  <li>Tutorials</li>
                  <li>About Me</li>
                </ul>
              </Card.Body>
            </Card>
          </Grid>
          <Grid sm={4}>
            <Card variant="flat" className="bg-white border-0 rounded-none">
              <Card.Header>
                <Text light className="text-xl">
                  Contact Information
                </Text>
              </Card.Header>
              <Divider />
              <Card.Body>
                <ul>
                  <li>Created by: Dharmendra Sharma</li>
                  <li>Email: dharmen8980@gmail.com</li>
                  <li>Phone: +1-504-401-6830</li>
                  <Link href="#">
                    Linkedin
                  </Link>
                  {" "}
                  <Link href="#">GitHub</Link>
                </ul>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </footer>
  );
};

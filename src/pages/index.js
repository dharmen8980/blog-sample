import React from "react";
import {
  Container,
  Text,
  Card,
  Grid,
  Popover,
  Button,
  Spacer,
} from "@nextui-org/react";
import Image from "next/image";
import { IoIosExpand } from "react-icons/io";
import { shortcuts } from "./contents/shortcuts";

const Home = () => {
  return (
    <main>
      <title>Bytes of Wisdom - Home</title>
      <meta
        name="description"
        content="Welcome to Bytes of Wisdom, your go-to resource for helpful tech tips, software tutorials, and productivity hacks. Join our vibrant community of tech enthusiasts as we explore the latest technologies and provide actionable insights to enhance your digital experience. Boost your productivity, unlock the full potential of your devices, and stay up to date with the exciting world of technology."
      />{" "}
      <meta
        name="keywords"
        content="tech tips, software tutorials, productivity hacks, tech enthusiasts, latest technologies, actionable insights, digital experience, boost productivity, unlock potential, stay up to date, exciting world of technology"
      />
      <Container fluid="true" className=" max-w-6xl bg-white my-8 rounded-3xl shadow-md">
        <Grid.Container gap={2} justify="center">
          <Grid sm={5}>
            <Container>
              <Text className="text-7xl font-semibold" color="primary">
                Max Productivity? Challenge Accepted.
              </Text>
              <Text blockquote className="text-xl mt-6">
                Get tips and tricks to boost your software development skills
                using{" "}
                <span className="text-semibold text-orange-600">macOS </span>...
              </Text>
            </Container>
          </Grid>
          <Grid sm={7}>
            <Container display="flex" alignItems="center">
              <Image
                src="/macOS.png"
                width={900}
                height={200}
                className="rounded-lg"
              />
            </Container>
          </Grid>
        </Grid.Container>
      </Container>
      <div className="sm:flex sm:flex-row max-w-6xl mx-auto">
        <Container
          fluid="true"
          className=" max-w-6xl bg-white mb-8 rounded-3xl shadow-md">
          <Text className="text-transparent bg-clip-text bg-gradient-to-bl from-violet-700 to-orange-700 font-light font-[helvetica] text-[24px] px-4 py-12 text-center">
            Let&apos;s begin our productivity journey with the mighty keyboard – the
            ultimate tool for unlocking efficiency. Get ready to dive into the
            world of Mac keyboard shortcuts, where a few simple key combinations
            can work wonders. From blazing through tasks to maximizing your
            workflow, these shortcuts will revolutionize the way you interact
            with your Mac. Let&apos;s unleash the power of the keyboard and elevate
            our productivity to new heights!
          </Text>
        </Container>
        <Spacer x={1} />
        <Container
          fluid="true"
          className=" max-w-6xl bg-white mb-8 rounded-3xl py-10 shadow-md"
        >
          <Text className="text-[28px] font-[roboto] text-green-600 p-4 text-center">
            Mac Keyboard Shortcuts
          </Text>
          <Grid.Container justify="space-around">
            {shortcuts.map((category, index) => (
              <Grid key={index}>
                <Popover placement="bottom">
                  <Popover.Trigger>
                    <Button
                      size={"xl"}
                      iconRight={<IoIosExpand />}
                      className="hover:bg-blue-200 text-blue-500 z-10 "
                    >
                      {Object.keys(category)[0]}
                    </Button>
                  </Popover.Trigger>
                  {category[Object.keys(category)[0]].map((shortcut, i) => (
                    <Popover.Content key={i}>
                      <Card className="rounded-2xl p-6 shadow-2xl">
                        <Card.Body>
                          {Object.entries(shortcut).map(([key, value]) => (
                            <Text blockquote key={key} className="rounded-none">
                              <strong>{key}: </strong>
                              {value}
                            </Text>
                          ))}
                        </Card.Body>
                      </Card>
                    </Popover.Content>
                  ))}
                </Popover>
              </Grid>
            ))}
          </Grid.Container>
        </Container>
      </div>
      <Container fluid className="max-w-6xl">
        <Text className="text-[52px] font-semibold text-purple-700 p-4 text-center">
          Mouse Shortcuts
        </Text>
        <Text className="text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-orange-400 font-light  p-4 text-center">
          Now if you have invested in mouse that has more than just primary keys,
          you can always take advantage of the extra keys to perform some of the
          most common tasks. All you need is to go to settings and search for
          mouse shortcuts. You can also customize the shortcuts to your liking.
        </Text>
        <Image
          src="/mouseShortcut.png"
          width={700}
          height={300}
          className="mx-auto"
        />
      </Container>
    </main>
  );
};

export default Home;

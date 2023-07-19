import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { Card, Container, Text, Loading } from "@nextui-org/react";

const Hacks = () => {
  const [hacks, setHacks] = useState(null);
  const [test, setTest] = useState(null);
  const collectionName = "hacks";
  // useEffect(() => {
  //   Axios.get("/api/database", {
  //     params: { collectionName: collectionName },
  //   }).then((response) => {
  //     setHacks(response.data.collectionData);
  //   });
  // }, []);
  useEffect(() => {
    Axios.get("/api/hello").then((response) => {
      setTest(response.data.credentials);
    });
  }, []);
  return hacks ? (
    <main>
      <Container className="max-w-6xl py-8 space-y-6">
        {hacks.map((hacks, key) => {
          return (
            <Card key={key} variant="bordered" className="max-w-4xl mx-auto">
              <Card.Header className="justify-center mt-4">
                <Text className="text-4xl text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500  to-blue-500 font-[roboto]">
                  {hacks.title}
                </Text>
              </Card.Header>
              <Card.Body className="p-8">
                <Text className="text-gray-600 font-light text-[22px] font-[helvetica]">
                  {hacks.introduction}
                </Text>
                {hacks.bodyContent.map((paragraph, key) => {
                  return (
                    <div key={key}>
                      <Text className="text-[32px] my-2 font-[roboto]">
                        {paragraph.title}
                      </Text>
                      <Text className="text-gray-600 font-light text-[22px] font-[helvetica]">
                        {paragraph.content}
                      </Text>
                    </div>
                  );
                })}
                <Text className="text-right text-[24px]">{hacks.author}</Text>
                <Text className="text-right text-[24px]">
                  {hacks.createdAt}
                </Text>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </main>
  ) : (
    // <Loading
    //   type="points"
    //   size="xl"
    //   className="w-full h-[73svh] flex flex-col justify-center"
    // />
    <div>{test}</div>
  );
};

export default Hacks;

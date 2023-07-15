import React, { useEffect } from "react";
import {
  Button,
  Container,
  Text,
  Card,
  Input,
  Textarea,
  Collapse,
  Modal,
  Progress,
} from "@nextui-org/react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import Axios from "axios";

const UpdateBlogs = () => {
  const { user } = useUser();
  const [authorized, setAuthorized] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const router = useRouter();

  const [blogInfo, setBlogInfo] = React.useState({
    collectionName: "",
    title: "",
    introduction: "",
    media: "",
    author: "",
    date: null,
  });

  const handleChange = (e) => {
    setBlogInfo({
      ...blogInfo, // spread operator
      [e.target.name]: e.target.value,
    });
  };

  const [bodyContent, setBodyContent] = React.useState([
    { title: "", content: "" }, // Initial paragraph with empty title and content
  ]);

  const addParagraph = () => {
    setBodyContent((prevContent) => [
      ...prevContent,
      { title: "", content: "" },
    ]);
  };

  const handleParagraphChange = (index, field, value) => {
    setBodyContent((prevContent) => {
      const updatedContent = [...prevContent];
      updatedContent[index][field] = value;
      return updatedContent;
    });
  };

  const [hacksModal, setHacksModal] = React.useState(false);
  const [hacksMessage, setHacksMessage] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  const verifyUser = () => {
    Axios.post("/api/verify", { email: user.email }).then((response) => {
      if (response.data.authorized) {
        setAuthorized(true);
      } else {
        setMessage(
          "You are not authorized to view this page! You will be logged out in 5 seconds."
        );
        setTimeout(() => {
          router.push("/api/auth/logout");
        }, 5000);
      }
    });
  };

  const onSubmitHacks = () => {
    setIsLoading(true);
    Axios.post("/api/database", {
      collectionName: blogInfo.collectionName,
      title: blogInfo.title,
      introduction: blogInfo.introduction,
      bodyContent: bodyContent,
      media: blogInfo.media,
      author: blogInfo.author,
      createdAt: blogInfo.date,
    }).then((response) => {
      setHacksMessage(response.data.message);
      setIsLoading(false);
      setHacksModal(true);
    });
  };

  const handleReset = () => {
    setBlogInfo({
      ...blogInfo,
      title: "",
      introduction: "",
      bodyContent: "",
      media: "",
      author: "",
      date: null,
    });
    setBodyContent([{ title: "", content: "" }]);
  };
  return authorized ? (
    <Container className="max-w-6xl my-8 space-y-6" fluid>
      <Collapse.Group splitted>
        <Collapse title="Hacks">
          <Card variant="bordered">
            <Card.Header className="justify-center">
              <Text className="text-2xl">Update Blogs</Text>
            </Card.Header>
            <Card.Body>
              <form className="space-y-4" onSubmit={onSubmitHacks} id="hacks">
                <label className="text-lg  text-gray-600">
                  Select Collection Name:{" "}
                </label>
                <select
                  name="collectionName"
                  onChange={handleChange}
                  className="border-2 p-1 rounded-lg border-slate-500 text-gray-600"
                >
                  <option value={"hacks"}>Hacks</option>
                  <option value={"tutorials"}>Tutorials</option>
                </select>
                <Input
                  label="Blog Title"
                  placeholder="Enter the title of the blog"
                  fullWidth
                  name="title"
                  value={blogInfo.title}
                  onChange={handleChange}
                />
                <Textarea
                  label="Introduction of the Blog"
                  fullWidth
                  placeholder="Enter your amazing ideas"
                  name="introduction"
                  value={blogInfo.introduction}
                  onChange={handleChange}
                />
                {bodyContent.map((paragraph, index) => (
                  <div key={index}>
                    <Input
                      label={`Title ${index + 1}`}
                      placeholder="Enter the title"
                      fullWidth
                      value={paragraph.title}
                      onChange={(e) =>
                        handleParagraphChange(index, "title", e.target.value)
                      }
                    />
                    <Textarea
                      label={`Content ${index + 1}`}
                      fullWidth
                      placeholder="Enter the content"
                      minRows={4}
                      maxRows={20}
                      value={paragraph.content}
                      onChange={(e) =>
                        handleParagraphChange(index, "content", e.target.value)
                      }
                    />
                  </div>
                ))}
                <Button onClick={addParagraph} bordered className="border-gray-300 text-gray-600 hover:bg-blue-200 w-full">
                  Add Paragraph
                </Button>
                <Input
                  label="Your media files for the blog"
                  placeholder="Paste links of images and videos"
                  fullWidth
                  name="media"
                  value={blogInfo.media}
                  onChange={handleChange}
                  clearable
                />
                <Input
                  label="Author's Name"
                  placeholder="Enter your name"
                  fullWidth
                  name="author"
                  value={blogInfo.author}
                  onChange={handleChange}
                  clearable
                />
                <Input
                  label="Today's Date"
                  placeholder="Enter today's date"
                  fullWidth
                  type="date"
                  name="date"
                  value={blogInfo.date}
                  onChange={handleChange}
                />
                {isLoading && (
                  <Progress indeterminated value={50} color="success" />
                )}
                <div className="flex flex-row justify-end space-x-2">
                  <Button onPress={handleReset} className="bg-orange-600 hover:opacity-90">
                    Reset
                  </Button>
                  <Button onClick={onSubmitHacks} className="bg-green-600 hover:opacity-90">
                    Submit
                  </Button>
                </div>
              </form>
              <Modal
                closeButton
                blur
                open={hacksModal}
                onClose={() => setHacksModal(false)}
              >
                <Modal.Header>
                  <Text>Submission message</Text>
                </Modal.Header>
                <Modal.Body>
                  <Text>{hacksMessage}</Text>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    auto
                    flat
                    color="error"
                    onPress={() => setHacksModal(false)}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        </Collapse>
        <Collapse title="Tutorials"></Collapse>
        <Collapse title="Personal Info"></Collapse>
      </Collapse.Group>
    </Container>
  ) : (
    <Container className="max-w-6xl my-6 py-24">
      <Card
        variant="bordered"
        className="max-w-2xl mx-auto h-[50vh] flex flex-col justify-between items-center bg-gradient-to-br from-cyan-400 to-indigo-400"
      >
        <Card.Header className="justify-center mt-14">
          <Text className="text-4xl bg-transparent bg-clip-text text-center">
            Welcome to the Admin page of Bytes of Wisdom !!!{" "}
          </Text>
        </Card.Header>
        <Card.Body>
          <Text> </Text>
          <Text className="text-xl text-center">
            You need to verify first to access this page. Click on the{" "}
            <strong>Verify</strong> button below to verify your identity.{" "}
          </Text>
          <Button
            onClick={verifyUser}
            auto
            flat
            bordered
            className="border-white text-white"
          >
            Verify
          </Button>
          <Text className="text-xl">{message}</Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default withPageAuthRequired(UpdateBlogs);

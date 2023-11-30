import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormLabel,
  Input,
  FormControl,
  Select,
  Textarea,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Text,
  Image,
  Container,
  Badge,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { createQuestion, getQuestions } from "../Redux/QuestionReducer/action";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Forum() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();
  const Dispatch = useDispatch();

  const user = useSelector((store) => {
    return store.AuthReducer;
  });
  console.log(user);

  const [askQuestion, setQuestion] = useState({
    question: {
      userAvatar: user?.avatarUrl,
      username: user?.username,
      questionTitle: "",
      questionDescription: "",
      language: "",
      upvotes: 0,
      answers: 0,
      postedDate: "",
    },
    answers: [],
  });

  const handelaskQuestion = (e) => {
    setQuestion((prev) => {
      return {
        ...prev,
        question: {
          ...prev.question,
          userAvatar: user?.avatarUrl,
          username: user?.username,
          [e.target.name]: e.target.value,
          upvotes: 0,
          answers: 0,
        },
        answers: [],
      };
    });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(askQuestion);
    createQuestion(askQuestion)
      .then((res) => {
        toast({
          title: "Login Successful!.",
          description: "success.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: "Login Successful!.",
          description: "success.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const AllQuestions = useSelector((store) => {
    return store.QuestionReducer;
  });

  const [page, setpage] = useState(1);

  useEffect(() => {

    const paramsobj ={
        params :{
            _page : page,
            _limit : 5
        }
    }
    
    Dispatch(getQuestions(paramsobj));
  }, [page]);
  console.log(AllQuestions.questions);

  return (
    <div>
      <Button onClick={onOpen}>Ask Question</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ask your Question</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>UserName</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First name"
                value={user?.username}
                disabled={true}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Question Title</FormLabel>
              <Input
                value={askQuestion.question.questionTitle}
                name="questionTitle"
                type="text"
                onChange={handelaskQuestion}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Question Description</FormLabel>
              <Textarea
                placeholder="Describe your Question"
                value={askQuestion.question.questionDescription}
                name="questionDescription"
                type="text"
                onChange={handelaskQuestion}
              />
            </FormControl>

            <FormControl mt={4}>
              <Select
                name="language"
                value={askQuestion.question.language}
                onChange={handelaskQuestion}
              >
                <option value="">Select Language</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>
                <option value="Other">Other </option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input
                value={askQuestion.question.postedDate}
                name="postedDate"
                type="date"
                onChange={handelaskQuestion}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handelSubmit}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* ------------------- */}

      <Container maxW="container.sm">
        {AllQuestions.questions?.map((ele) => {
          return (
            <Link to={`/answer/${ele.id}`} key={ele.id}>
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
                key={ele.id}
              >
                <Image
                  objectFit="cover"
                  maxW={{ base: "100%", sm: "200px" }}
                  src={ele.question?.userAvatar}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="md">{ele.question?.questionTitle}</Heading>
                    <Stack direction="row" mt={5}>
                      <Badge colorScheme="gray">{ele.question?.language}</Badge>
                      <Badge>{ele.question?.postedDate}</Badge>
                      <Badge>{ele.question?.answers} Answers</Badge>
                    </Stack>
                  </CardBody>

                  <CardFooter>
                    {user.username == ele.question.username ? (
                      <Button variant="solid" colorScheme="blue">
                        Edit
                      </Button>
                    ) : null}
                    {user.username == ele.question.username ? (
                      <Button variant="solid" colorScheme="blue">
                        Delete
                      </Button>
                    ) : null}
                  </CardFooter>
                </Stack>
              </Card>
            </Link>
          );
        })}

        <Button variant="solid" colorScheme="blue" onClick={()=>{setpage(page-1)}} disabled ={page==1}>
          Prev
        </Button>
        <Button colorScheme='blue'>{page}</Button>
        <Button variant="solid" colorScheme="blue" onClick={()=>{setpage(page+1)}}>
          Next
        </Button>
      </Container>
    </div>
  );
}

export default Forum;

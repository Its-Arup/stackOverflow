import React, { useEffect } from "react";
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
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSingleQuestions } from "../Redux/QuestionReducer/action";
function Answer() {
  const { id } = useParams();
  console.log(id);

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(getSingleQuestions(id))
    },[id])

  return (
    <div>
      {/* <Card
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
      </Card> */}
    </div>
  );
}

export default Answer;

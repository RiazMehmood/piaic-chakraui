import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";

export default function Cards() {
  return (
    <Box p="5px 10px">
      <Flex justify={"center"} direction="row">
        <SimpleGrid spacing={6} columns={[1, 1, 4]}>
          <Card border="2px" borderColor="gray.200">
            <CardHeader>
              <Heading size="md">Artificial Intelligence</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS. GETTING
                PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED BY THE RISE
                OF AI.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card border="2px" borderColor="gray.200">
            <CardHeader>
              <Heading size="md">Cloud Native & Mobile Web</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE
                BEGINNERS. GETTING PAKISTAN READY FOR THE NEW ERA OF
                MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
          <Card border="2px" borderColor="gray.200">
            <CardHeader>
              <Heading size="md">Blockchain</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS
                GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN, FINTECH
                AND SMART CONTRACTS
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>

          <Card border="2px" borderColor="gray.200">
            <CardHeader>
              <Heading size="md">Internet of Things & AI</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                A FIFTEEN MONTHS IOT AND AI PROGRAM DESIGNED FOR ABSOLUTE
                BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF INTERNET OF
                THINGS AND AI
              </Text>
            </CardBody>
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Flex>
    </Box>
  );
}

import { useState, useEffect } from 'react';
import { Heading, Box, Image, Flex, Text, Spacer, Tag } from '@chakra-ui/react';
import { HiCalendar } from "react-icons/hi";
import * as API from './services/launches';
import logo from './assets/SpaceX-logo.png';

export function App() {

  const [launches, setLaunches] = useState([]);


  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Image m={4} src={logo} alt="Logo SpaceX" width={300} />
      <Heading as="h1" size="lg" m={4}>SpaceX Lanzamientos</Heading>
      <section>
          { launches.map(launch => (
            <Box 
            key={launch.flight_number} 
            bg="gray.100" 
            p={4} 
            m={4} 
            borderRadius="lg"
            >
              <Flex display="flex">
                <Text fontSize="2xl">
                  Misión <strong>{launch.mission_name}</strong> (
                    {launch.launch_year})
                </Text>
                <Spacer/>
                <Tag p={4} colorScheme={launch.launch_success ? "green" : "red"}>
                    {launch.launch_success ? "Éxito" : "Fallo" } 
                </Tag>
              </Flex>
              <Flex align="center">
                <HiCalendar/>{" "}
                <Text fontSize="sm" ml={1}>
                    {launch.launch_date_local.split("T")[0]}
                </Text>
              </Flex>
            </Box>
          ))}
      </section>
    </>
  );
}


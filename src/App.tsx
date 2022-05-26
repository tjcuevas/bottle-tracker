import "./App.css";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useOunces } from "./hooks/useOunces";
import AddDrawer from "./AddDrawer";
import { useState } from "react";
import RemoveDrawer from "./RemoveDrawer";

function App() {
  const [isAddDrawerOpen, setIsAddDrawerOpen] = useState(false);
  const [isRemoveDrawerOpen, setIsRemoveDrawerOpen] = useState(false);

  const { data: ouncesLeft } = useOunces();
  return (
    <>
      <Flex as="main" gap="2rem" direction="column" justifyContent="center" alignItems="center" bg="pink.50">
        <Box textAlign="center">
        <Heading size="3xl">{ouncesLeft}</Heading>
        <p>ounces left</p>
        </Box>
        <Flex gap="1rem">
          <Button size="lg" colorScheme="purple" onClick={() => setIsRemoveDrawerOpen(true)}>Remove</Button>
          <Button size="lg" colorScheme="teal" onClick={() => setIsAddDrawerOpen(true)}>Add</Button>
        </Flex>
      </Flex>
      <AddDrawer
        isOpen={isAddDrawerOpen}
        onClose={() => setIsAddDrawerOpen(false)}
      />
      <RemoveDrawer
        isOpen={isRemoveDrawerOpen}
        onClose={() => setIsRemoveDrawerOpen(false)}
      />
    </>
  );
}

export default App;

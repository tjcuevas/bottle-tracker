import "./App.css";
import { Button, Flex, Heading } from "@chakra-ui/react";
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
      <Flex as="main" direction="column" alignItems="center">
        <Heading>{ouncesLeft}</Heading>
        <p>ounces left</p>
        <Flex gap="1rem">
          <Button onClick={() => setIsRemoveDrawerOpen(true)}>Remove</Button>
          <Button onClick={() => setIsAddDrawerOpen(true)}>Add</Button>
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

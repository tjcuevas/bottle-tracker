import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { useState } from "react";
import { useAddOunces, useRemoveOunces } from "./hooks/useOunces";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const RemoveDrawer = ({ isOpen, onClose }: Props) => {
	const [ounces, setOunces] = useState(0);
	const removeOuncesMutation = useRemoveOunces();
	return (
		<Drawer isOpen={isOpen} onClose={onClose} placement="top" autoFocus={false} isFullHeight>
			<DrawerContent bg="pink.50">
				<DrawerBody m="auto">
					<Flex height="100%" justifyContent="center" direction="column">
					<NumberInput width="100%" mb="1rem" value={ounces} size="lg" onChange={(valueAsString, valueAsNumber) => setOunces(valueAsNumber)}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
					<Button mb=".5rem" width="100%" colorScheme="purple" onClick={async () => {
						await removeOuncesMutation.mutateAsync(ounces);
						onClose();
					}}>Remove</Button>
					<Button width="100%" colorScheme="purple" variant="outline" onClick={onClose}>Cancel</Button>
					</Flex>
				</DrawerBody>
				<DrawerFooter>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default RemoveDrawer;
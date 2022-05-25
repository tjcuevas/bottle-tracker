import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import { useState } from "react";
import { useAddOunces } from "./hooks/useOunces";

interface Props {
	isOpen: boolean;
	onClose: () => void;
}

const AddDrawer = ({ isOpen, onClose }: Props) => {
	const [ounces, setOunces] = useState(0);
	const addOuncesMutation = useAddOunces();
	return (
		<Drawer isOpen={isOpen} onClose={onClose} placement="top" isFullHeight>
			<DrawerContent>
					<DrawerCloseButton />
				<DrawerHeader>Add</DrawerHeader>
				<DrawerBody>
					<NumberInput value={ounces} onChange={(valueAsString, valueAsNumber) => setOunces(valueAsNumber)}>
						<NumberInputField />
						<NumberInputStepper>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</DrawerBody>
				<DrawerFooter>
					<Button onClick={async () => {
						await addOuncesMutation.mutateAsync(ounces);
						onClose();
					}}>Add</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default AddDrawer;
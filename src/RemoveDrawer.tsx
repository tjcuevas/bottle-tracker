import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
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
		<Drawer isOpen={isOpen} onClose={onClose} placement="top" isFullHeight>
			<DrawerContent>
					<DrawerCloseButton />
				<DrawerHeader>Remove</DrawerHeader>
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
						await removeOuncesMutation.mutateAsync(ounces);
						onClose();
					}}>Remove</Button>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
};

export default RemoveDrawer;
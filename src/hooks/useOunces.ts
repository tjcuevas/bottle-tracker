import { useMutation, useQuery, useQueryClient } from "react-query";
import LocalStorageClient from "../services/localStorageClient";

export const useOunces = () => {
	return useQuery(['ounces'], LocalStorageClient.getOuncesLeft)
};

export const useAddOunces = () => {
	const queryClient = useQueryClient();
	return useMutation((ounces: number) => LocalStorageClient.addOunces(ounces), {
		onSuccess: () => {
			queryClient.invalidateQueries(['ounces'])
		}
	})
}

export const useRemoveOunces = () => {
	const queryClient = useQueryClient();
	return useMutation((ounces: number) => LocalStorageClient.removeOunces(ounces), {
		onSuccess: () => {
			queryClient.invalidateQueries(['ounces'])
		}
	})}
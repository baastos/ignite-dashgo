import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

type User = {
    id: string;
    name: string;
    email: string;
    createdAt: string;
}

type getUsersResponse = {
    users: User[];
    totalCount: number;
    
}

export async function getUsers(page: number): Promise<getUsersResponse>{
        const { data, headers } = await api.get('users', {
            params: {
                page,
            }
        });
    
        const users = data.users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(user.createdAt).toLocaleDateString('pt-Br', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })
        }))
        const totalCount = Number(headers['x-total-count'])
        return {
        users, 
        totalCount};
    }


export function useUsers(page: number){
    return useQuery(['users', page], () => getUsers(page), {
        staleTime: 1000 * 60 * 10, // 10 minutes
        
    })
}

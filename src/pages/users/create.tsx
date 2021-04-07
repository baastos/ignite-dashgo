import { Box, Divider, Flex, Heading, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react";
import Link from "next/link";
import * as yup from 'yup'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Input } from '../../components/Form/Input'
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { yupResolver } from "@hookform/resolvers/yup";


interface CreateUserFormData {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}



export default function CreateUser() {
    const createUserSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
        password: yup.string().required('Senha obrigatória').min(6, 'A senha deve ter no mínimo 6 dígitos'),
        password_confirmation: yup.string().oneOf([
            null, yup.ref('password')], 'As senhas devem ser iguais')
    })
    const { register, formState, handleSubmit } = useForm({
        resolver: yupResolver(createUserSchema)
    })
    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log(values);

    }
    return (
        <Box>
            <Header />
            <Flex w="100%" maxW={1480} my="6" mx="auto" px="6">
                <Sidebar />

                <Box onSubmit={handleSubmit(handleCreateUser)} as="form" flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size='lg' fontWeight="normal"> Criar usuário</Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing="8">
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Input
                                name="name"
                                label="Nome Completo"
                                error={errors.name}
                                {...register('name')}
                            />
                            <Input
                                name="email"
                                type="email"
                                label="Email"
                                error={errors.email}
                                {...register('email')}


                            />

                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">

                            <Input
                                name="password"
                                type="password"
                                label="Senha"
                                error={errors.password}
                                {...register('password')}


                            />
                            <Input
                                name="password_confirmation"
                                type="password"
                                label="Confirmação de senha"
                                error={errors.password_confirmation}
                                {...register('password_confirmation')}

                            />

                        </SimpleGrid>

                    </VStack>
                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>

                            </Link>
                            <Button type="submit" isLoading={formState.isSubmitting} colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );

}
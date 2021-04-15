import { Stack, Box, Text } from '@chakra-ui/react'
import { PaginationItem } from './PaginationItem'

interface PaginationProps {
    totalCountofRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
    return [...new Array(to - from)].map((_, index) => {
        return from + index + 1;
    }).filter(page => page > 0)
}

export function Pagination({ totalCountofRegisters, registersPerPage = 10, currentPage = 1, onPageChange }: PaginationProps) {

    const lastPage = Math.floor(totalCountofRegisters / registersPerPage);

    const previousPages = currentPage > 1 ?
        generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []

    const nextPages = currentPage < lastPage ?
        generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []

    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="8"

        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} page={1} />
                        {currentPage > (2 + siblingsCount) && <Text color="gray.300" w="8" textAlign="center">...</Text>}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => (
                    <PaginationItem onPageChange={onPageChange} key={page} page={page} />
                ))}
                <PaginationItem onPageChange={onPageChange} page={currentPage} isCurrent />

                {nextPages.length > 0 && nextPages.map(page => (
                    <PaginationItem onPageChange={onPageChange} key={page} page={page} />
                ))}
                {currentPage + siblingsCount < lastPage &&
                    <>
                        {(currentPage + 1 + siblingsCount) && <Text color="gray.300" w="8" textAlign="center">...</Text>}

                        <PaginationItem onPageChange={onPageChange} page={lastPage} />
                    </>
                }
            </Stack>
        </Stack>
    )
}
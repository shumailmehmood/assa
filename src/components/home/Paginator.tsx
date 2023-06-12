import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { text } from 'stream/consumers';
import { fontWeight } from '@mui/system';
import { string } from 'yargs';

type Props = {
    count: number,
    onChangeHandler: (event: React.ChangeEvent<unknown>, page: number) => void
}
const Paginating: React.FC<Props> = ({ count, onChangeHandler }): React.ReactElement => {
    const margin = {
        margin: "30px",
        fontWeight: "bold",
    }
    console.log(count)
    return (
        <Stack spacing={2}>
            <Pagination count={count} onChange={onChangeHandler} style={margin} />
        </Stack>
    );
}

export default Paginating
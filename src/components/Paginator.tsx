import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type Props = {
    count: number,
    onChangeHandler: (event: React.ChangeEvent<unknown>, page: number) => void
}
const Paginating: React.FC<Props> = ({ count, onChangeHandler }): React.ReactElement => {
    const margin = {
        margin: "30px",
        fontWeight: "bold",
    }
    return (
        <Stack spacing={2}>
            <Pagination count={count} size="small" onChange={onChangeHandler} style={margin} />
        </Stack>
    );
}

export default Paginating
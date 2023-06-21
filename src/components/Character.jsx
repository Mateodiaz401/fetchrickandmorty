import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import PropTypes from 'prop-types';

export default function Character({ data }) {
    return (
        <>
            <Card>
                <CardMedia
                    image={data.image}
                    title="Rick Sanchez"
                    sx={{ height: 250, width: 250 }}
                />
                <CardContent>
                    <Typography variant="h5"> {data.name}</Typography>
                </CardContent>
            </Card>
        </>
    )
}
Character.propTypes = {
    data: PropTypes.object.isRequired,
};
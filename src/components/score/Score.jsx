import { Box, Button, Container, Paper } from '@material-ui/core';
import { Add, Remove, Clear } from '@material-ui/icons';
import React, { useState } from 'react';
import './Score.css';

function Score () {

    const initialScore = 0;

    const [homeScore, setHomeScore] = useState(initialScore);
    const [awayScore, setAwayScore] = useState(initialScore);

    return (
        <Container>
            <Paper className="m-t-1">
                <Box p={2}>
                    <Box className="flex-container">
                        <Box mr={1}>
                            <Button variant="contained" color="primary" onClick={() => setHomeScore(homeScore - 1)}>
                                <Remove />
                            </Button>
                        </Box>

                        <Button variant="contained" color="primary" onClick={() => setHomeScore(homeScore + 1)}>
                            <Add />
                        </Button>

                        <Paper className="p-x-1 m-x-1 big-font" square>{homeScore}</Paper>

                        <Box className="big-font">:</Box>

                        <Paper className="p-x-1 m-x-1 big-font" square>{awayScore}</Paper>

                        <Button variant="contained" color="primary" onClick={() => setAwayScore(awayScore + 1)}>
                            <Add />
                        </Button>

                        <Box ml={1}>
                            <Button variant="contained" color="primary" onClick={() => setAwayScore(awayScore - 1)}>
                                <Remove />
                            </Button>
                        </Box>
                    </Box>

                    <Box pt={2} className="center">
                        <Button variant="contained" onClick={() => {
                            setHomeScore(initialScore);
                            setAwayScore(initialScore);
                        }}>
                            <Clear />
                        </Button>
                    </Box>
                </Box>
                
            </Paper>
        </Container>
    );
}

export default Score;